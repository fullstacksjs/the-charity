import {
  useDeleteDocumentMutation,
  useVisitDetailQuery,
} from '@camp/data-layer';
import { FullPageLoader, showNotification } from '@camp/design';
import type { Document } from '@camp/domain';
import { fileStorageClient } from '@camp/file-storage-client';
import { DownloadIcon, PdfFileIcon, TrashIcon, VideoIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { getFileName, getFileType } from '@camp/router';
import { isEmpty } from '@fullstacksjs/toolbox';
import { Box, Button, Center, Group, Stack } from '@mantine/core';
import download from 'downloadjs';
import { useMemo, useState } from 'react';

import { DocumentGrid } from './DocumentGrid';
import { ImagePreview } from './ImagePreview';

export interface VisitDetailProps {
  id: string;
}

export const VisitDetail = ({ id }: VisitDetailProps) => {
  const t = messages.householder.visits.detail;

  const [selectedDocument, setSelectedDocument] = useState<Document>();
  const [deleteOneDocument, { loading: isDeleting }] =
    useDeleteDocumentMutation();

  const { data, loading, error } = useVisitDetailQuery({
    variables: { id },
    onCompleted: () => {
      setSelectedDocument(data!.visit!.documents[0]);
    },
  });

  const documents = useMemo(
    () => data?.visit?.documents ?? [],
    [data?.visit?.documents],
  );

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

  const deleteDocument = async (d: Document): Promise<void> => {
    const deleted = await deleteOneDocument({
      variables: { id: d.id },
    });

    setSelectedDocument(
      documents.filter(
        document => document.id !== deleted.data.document?.id,
      )[0],
    );
  };

  const downloadSelectedFile = async () => {
    const url = selectedDocument!.url;
    const file = await fileStorageClient.get(url);
    download(file, getFileName(url));
  };

  const fileType = selectedDocument?.url
    ? getFileType(selectedDocument.url)
    : null;

  return (
    <Group w="100%" noWrap sx={{ alignItems: 'flex-start', gap: 0 }}>
      {isEmpty(documents) ? null : (
        <>
          <DocumentGrid
            documents={documents}
            selectedDocument={selectedDocument}
            onSelect={setSelectedDocument}
            onDelete={deleteDocument}
          />
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
            ) : fileType === 'video' ? (
              <Center h="100%">
                <VideoIcon size={100} />
              </Center>
            ) : selectedDocument != null ? (
              <ImagePreview document={selectedDocument} />
            ) : null}
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
        </>
      )}
    </Group>
  );
};
