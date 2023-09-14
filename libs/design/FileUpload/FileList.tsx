import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { Box } from '@mantine/core';

import { File } from './File';
import type { FileState } from './FileState';

interface Props {
  files?: FileState[];
  onRemove: (file: FileState, index: number) => void;
}

export const FileList = ({ files, onRemove }: Props) => {
  if (isNullOrEmpty(files)) return null;

  return (
    <Box>
      {files.map((file, index) => (
        <File
          key={file.id}
          file={file}
          onRemove={() => {
            onRemove(file, index);
          }}
        />
      ))}
    </Box>
  );
};
