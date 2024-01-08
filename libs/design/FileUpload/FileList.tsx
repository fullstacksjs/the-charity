import { isNullOrEmptyArray } from '@fullstacksjs/toolbox';
import { Box } from '@mantine/core';

import { File } from './File';
import type { FileState } from './FileState';

interface Props {
  files?: FileState[];
  onRemove: (file: FileState, index: number) => Promise<void>;
}

export const FileList = ({ files, onRemove }: Props) => {
  if (isNullOrEmptyArray(files)) return null;

  return (
    <Box>
      {files.map((file, index) => (
        <File
          key={file.id}
          file={file}
          onRemove={() => {
            return onRemove(file, index);
          }}
        />
      ))}
    </Box>
  );
};
