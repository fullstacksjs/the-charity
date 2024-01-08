import { TrashIcon } from '@camp/icons';
import { ActionIcon, Box, Group, Text } from '@mantine/core';
import { useState } from 'react';

import type { FileState } from './FileState';
import { isFailed, isSuccess } from './FileState';

interface Props {
  file: FileState;
  onRemove?: () => Promise<void> | void;
}

export const File = ({ file, onRemove }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Group
      py="10px"
      spacing="15px"
      position="apart"
      sx={theme => ({
        'borderColor': theme.colors.bg[5],
        'borderWidth': 1,
        '&:not(:last-child)': {
          borderBottomStyle: 'solid',
        },
      })}
    >
      <ActionIcon
        onClick={async () => {
          try {
            setIsDeleting(true);
            await onRemove?.();
          } finally {
            setIsDeleting(false);
          }
        }}
        loading={isDeleting}
        disabled={isDeleting}
      >
        <TrashIcon size="18px" />
      </ActionIcon>
      <Group spacing="8px" align="center" noWrap>
        <Box sx={{ maxWidth: '320px' }}>
          <Text dir="ltr" lh="1">
            {file.file.name}
          </Text>
        </Box>
        <Box
          sx={theme => ({
            width: '8px',
            height: '8px',
            borderRadius: '100%',
            backgroundColor: isSuccess(file)
              ? theme.colors.success[6]
              : isFailed(file)
                ? theme.colors.error[6]
                : theme.colors.warning[6],
          })}
        />
      </Group>
    </Group>
  );
};
