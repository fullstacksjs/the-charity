import { TrashIcon } from '@camp/icons';
import { ActionIcon, Box, Group, Text } from '@mantine/core';

import type { FileState } from './FileState';
import { isSuccess } from './FileState';

interface Props {
  file: FileState;
  onRemove?: () => Promise<void> | void;
}

export const File = ({ file, onRemove }: Props) => (
  <Group
    py="10px"
    spacing="15px"
    position="apart"
    sx={theme => ({
      'borderColor': theme.colors.bgMuted[6],
      'borderWidth': 1,
      '&:not(:last-child)': {
        borderBottomStyle: 'solid',
      },
    })}
  >
    <ActionIcon>
      <TrashIcon size="18px" onClick={onRemove} />
    </ActionIcon>
    <Group spacing="8px" align="center" noWrap>
      <Box sx={{ maxWidth: '320px' }}>
        <Text dir="ltr" lh="1" truncate>
          {file.file.name}
        </Text>
      </Box>
      <Box
        sx={theme => ({
          width: '8px',
          height: '8px',
          borderRadius: '100%',
          backgroundColor: isSuccess(file)
            ? theme.colors.successDefault[6]
            : theme.colors.primaryDefault[6],
        })}
      />
    </Group>
  </Group>
);
