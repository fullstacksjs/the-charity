import {
  useDeleteDocumentMutation,
  useVisitDetailQuery,
} from '@camp/data-layer';
import { FullPageLoader, showNotification } from '@camp/design';
import type { Document } from '@camp/domain';
import { fileStorageClient } from '@camp/file-storage-client';
import { DownloadIcon, PdfFileIcon, TrashIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { getFileName, getFileType } from '@camp/router';
import {
  Box,
  Button,
  Center,
  Group,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
} from '@mantine/core';
import download from 'downloadjs';
import { useState } from 'react';

import { VisitDetailDocumentItem } from './VisitDetailDocumentItem';

export interface VisitDetailProps {
  id: string;
}

export const VisitDetail = ({ id }: VisitDetailProps) => {
  const t = messages.householder.visits.detail;

  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null,
  );
  const [deleteOneDocument, { loading: isDeleting }] =
    useDeleteDocumentMutation();

  const { data, loading, error } = useVisitDetailQuery({
    variables: { id },
    onCompleted: () => {
      setSelectedDocument(data!.visit!.documents[0]!);
    },
  });

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }

  if (loading)
    return (
      <Box w="100%">
        <FullPageLoader />;
      </Box>
    );
  const visit = data!.visit;
  // const fileType = getFileType(selectedDocument!.url);

  const deleteDocument = async (d: Document): Promise<void> => {
    if (visit?.documents.length === 1) {
      return showNotification({
        type: 'failure',
        title: t.title,
        message: messages.notification.visits.delete.cantDeleteLst,
      });
    }

    const deleted = await deleteOneDocument({
      variables: { id: d.id },
    });

    setSelectedDocument(
      visit?.documents.filter(
        document => document.id !== deleted.data.document?.id,
      )[0] ?? null,
    );
  };

  const downloadSelectedFile = async () => {
    const url = selectedDocument!.url;
    const file = await fileStorageClient.get(url);
    download(file, getFileName(url));
  };

  const fileType = getFileType(selectedDocument!.url);

  return (
    <Group w="100%" noWrap sx={{ alignItems: 'flex-start', gap: 0 }}>
      <SimpleGrid sx={{ padding: '40px', flexShrink: 0 }} cols={2}>
        {visit?.documents.map(doc => {
          const isSelected = selectedDocument?.url === doc.url;

          return (
            <VisitDetailDocumentItem
              key={doc.id}
              document={doc}
              isSelected={isSelected}
              onSelect={d => setSelectedDocument(d)}
              onDelete={deleteDocument}
            />
          );
        })}
      </SimpleGrid>
      <Stack
        spacing="30px"
        align="center"
        h="100%"
        p="40px"
        bg="bg"
        sx={theme => ({
          flexGrow: 1,
          borderLeft: `1px solid ${theme.colors.bg[5]}`,
        })}
      >
        {fileType === 'pdf' ? (
          <Center w="100%" h="100%" bg="fg.2" sx={{ borderRadius: '10px' }}>
            <PdfFileIcon size={100} />
          </Center>
        ) : (
          <Image
            radius="10px"
            styles={{
              figure: { height: '100%' },
              imageWrapper: {
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              },
              image: {
                objectFit: 'contain',
                height: 'calc(100vh - 400px) !important',
                width: 'auto !important',
              },
            }}
            src={selectedDocument?.url}
          />
        )}
        <Group>
          <Button
            loading={isDeleting}
            disabled={isDeleting}
            onClick={downloadSelectedFile}
            color="fg.5"
            variant="subtle"
            leftIcon={<DownloadIcon />}
          >
            {messages.actions.download}
          </Button>
          <Button
            loading={isDeleting}
            disabled={isDeleting}
            color="error"
            variant="subtle"
            leftIcon={<TrashIcon />}
            onClick={() => deleteDocument(selectedDocument!)}
          >
            {messages.actions.delete}
          </Button>
        </Group>
      </Stack>
    </Group>
  );
};
