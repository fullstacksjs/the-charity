import { debug } from '@camp/debug';
import type {
  FailedFile,
  FileState,
  StorageFile,
  SuccessFile,
} from '@camp/domain';
import { isSuccess } from '@camp/domain';
import { randomInt } from '@fullstacksjs/toolbox';
import type { InputWrapperProps } from '@mantine/core';
import { Input, Stack, Text } from '@mantine/core';
import Prray from 'prray';
import { useReducer } from 'react';
import type { DropEvent, FileRejection } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { FileList } from './FileList';
import { FileSelect } from './FileSelect';

type Action =
  | {
      type: 'Upload';
      id: number;
      remote: StorageFile;
      status: SuccessFile['status'];
    }
  | {
      type: 'Upload';
      id: number;
      status: FailedFile['status'];
    }
  | { type: 'Add'; files: FileState[] }
  | { type: 'Remove'; id: number };

const toFileState = (file: File): FileState => ({
  id: randomInt(),
  file,
  status: 'Uploading',
});

const fileReducer = (state: FileState[], action: Action): FileState[] => {
  switch (action.type) {
    case 'Add':
      return [...state, ...action.files];

    case 'Remove':
      return state.filter(({ id }) => id !== action.id);

    case 'Upload':
      return state.map(f =>
        action.id === f.id
          ? action.status === 'Success'
            ? {
                ...f,
                status: action.status,
                remote: action.remote,
              }
            : {
                ...f,
                status: action.status,
              }
          : f,
      );
    default:
      return state;
  }
};

type FileHandler = (
  acceptedFiles: File[],
  fileRejections: FileRejection[],
  event: DropEvent,
) => void;

type FileUploadVariant = 'default' | 'error';

export interface FileUploadProps
  extends Omit<InputWrapperProps, 'children' | 'onDrop'> {
  disabled?: boolean;
  defaultFiles?: (FailedFile | SuccessFile)[];
  helper?: string;
  concurrency?: number;
  upload?: (file: File) => Promise<StorageFile>;
  unUpload?: (id: StorageFile['id']) => Promise<void>;
  filter?: (files: File[]) => File[];
  onAdd?: (doc: StorageFile) => void;
  onDelete?: (doc: StorageFile) => void;
  className?: string;
  dropText?: string;
  variant?: FileUploadVariant;
}

const empty: (FailedFile | SuccessFile)[] = [];

export const FileUpload = ({
  disabled,
  onDelete,
  unUpload,
  helper,
  concurrency = 3,
  filter,
  upload,
  onAdd,
  defaultFiles = empty,
  variant = 'default',
  ...props
}: FileUploadProps) => {
  const [files, dispatch] = useReducer(fileReducer, defaultFiles);

  const handleDrop: FileHandler = rawFiles => {
    const acceptedFiles = filter ? filter(rawFiles) : rawFiles;
    if (acceptedFiles.length === 0) return;
    const fileStates = acceptedFiles.map(toFileState);

    dispatch({ type: 'Add', files: fileStates });

    Prray.from(fileStates)
      .forEachAsync(
        f =>
          upload?.(f.file)
            .then(doc => {
              onAdd?.(doc);
              dispatch({
                type: 'Upload',
                id: f.id,
                status: 'Success',
                remote: doc,
              });
            })
            .catch(e => {
              debug.error(e);
              dispatch({ type: 'Upload', id: f.id, status: 'Failed' });
            }),
        { concurrency },
      )
      .catch(e => debug.error('FileUpload', e));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    disabled,
  });

  const { onClick, ...rootProps } = getRootProps();

  const handleRemove = async (file: FileState) => {
    try {
      if (isSuccess(file)) {
        await unUpload?.(file.remote.id);
        onDelete?.(file.remote);
      }
      dispatch({ type: 'Remove', id: file.id });
    } catch (err) {
      debug.error(err);
    }
  };

  return (
    <Input.Wrapper {...props}>
      <Stack spacing="8px" mt="8px">
        <Stack
          {...rootProps}
          spacing="16px"
          p="20px"
          w="430px"
          sx={theme => ({
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor:
              variant === 'error' ? theme.colors.error[6] : theme.colors.bg[4],
            borderRadius: '8px',
          })}
        >
          <FileSelect {...getInputProps({ disabled })} onClick={onClick} />
          <FileList files={files} onRemove={handleRemove} />
        </Stack>
        {helper ? (
          <Text
            size="xs"
            display={variant === 'error' ? 'none' : 'block'}
            color="fg.5"
          >
            {helper}
          </Text>
        ) : null}
      </Stack>
    </Input.Wrapper>
  );
};
