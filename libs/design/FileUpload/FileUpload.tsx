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
  | { type: 'Remove'; id: number };

const toSuccessFile = (file: File): FileState => ({
  id: randomInt(),
  status: 'Success',
  file,
});

const toFileState = (file: File): FileState => ({
  id: randomInt(),
  file,
  status: 'Success',
});

const fileReducer = (state: FileState[], action: Action): FileState[] => {
  switch (action.type) {
    case 'Add':
      return [...state, ...action.files];

    case 'Remove':
      return state.filter(({ id }) => id !== action.id);

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

export interface FileUploadProps extends Omit<InputWrapperProps, 'onDrop'> {
  disabled?: boolean;
  onDrop?: FileHandler;
  defaultFiles?: File[];
  helper?: string;
  onDelete?: (index: number) => Promise<any>;
  className?: string;
  dropText?: string;
  variant?: FileUploadVariant;
}

const empty: File[] = [];

export const FileUpload = ({
  disabled,
  onDrop,
  onDelete,
  helper,
  defaultFiles = empty,
  variant = 'default',
  ...props
}: FileUploadProps) => {
  const [files, dispatch] = useReducer(
    fileReducer,
    defaultFiles.map(toSuccessFile),
  );

  const handleDrop: FileHandler = (acceptedFiles, ...args) => {
    const fileStates = acceptedFiles.map(toFileState);
    dispatch({ type: 'Add', files: fileStates });
    onDrop?.(acceptedFiles, ...args);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    disabled,
  });

  const { onClick, ...rootProps } = getRootProps();

  const handleRemove = async (file: FileState, index: number) => {
    await onDelete?.(index);
    dispatch({ type: 'Remove', id: file.id });
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
