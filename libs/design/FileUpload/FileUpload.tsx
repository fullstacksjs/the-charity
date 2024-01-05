import { debug } from '@camp/debug';
import { randomInt } from '@fullstacksjs/toolbox';
import type { InputWrapperProps } from '@mantine/core';
import { Input, Stack, Text } from '@mantine/core';
import { useReducer } from 'react';
import type { DropEvent, FileRejection } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { FileList } from './FileList';
import { FileSelect } from './FileSelect';
import type { FileState } from './FileState';

type Action =
  | { type: 'Add'; files: FileState[] }
  | { type: 'Remove'; id: number }
  | { type: 'Upload'; id: number };

const toSuccessFile = (file: File): FileState => ({
  id: randomInt(),
  status: 'Success',
  file,
});

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
        action.id === f.id ? { ...f, status: 'Success' } : f,
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
  // acceptableTypes?: string[];
  // NOTE: in Byte
  // maxSize: number;
  defaultFiles?: File[];
  helper?: string;
  upload?: (file: File) => Promise<void>;
  unUpload?: (id: FileState['id']) => Promise<void>;
  validate?: (files: File[]) => File[];
  onAdd?: (file: File) => void;
  onDelete?: (index: number) => void;
  className?: string;
  dropText?: string;
  variant?: FileUploadVariant;
}

const empty: File[] = [];

export const FileUpload = ({
  disabled,
  onDelete,
  unUpload,
  helper,
  // get validate from props
  validate,
  upload,
  onAdd,
  // maxSize,
  // acceptableTypes,
  defaultFiles = empty,
  variant = 'default',
  ...props
}: FileUploadProps) => {
  const [files, dispatch] = useReducer(
    fileReducer,
    defaultFiles.map(toSuccessFile),
  );

  const handleDrop: FileHandler = rawFiles => {
    const acceptedFiles = validate ? validate(rawFiles) : rawFiles;
    if (acceptedFiles.length === 0) return;
    const fileStates = acceptedFiles.map(toFileState);

    dispatch({ type: 'Add', files: fileStates });

    // FIXME use some kind of tool to have control over the requests
    fileStates.forEach(f => {
      upload?.(f.file)
        .then(() => {
          onAdd?.(f.file);
          dispatch({ type: 'Upload', id: f.id });
        })
        .catch(() => {
          dispatch({ type: 'Remove', id: f.id });
        });
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    disabled,
  });

  const { onClick, ...rootProps } = getRootProps();

  const handleRemove = async (file: FileState, index: number) => {
    try {
      await unUpload?.(index);
      onDelete?.(index);
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
            size="sm"
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
