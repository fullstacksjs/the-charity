import type { Icon } from '@camp/icons';
import { Box } from '@mantine/core';

interface Props {
  Icon: Icon;
}

export const VisualizedIcon = ({ Icon }: Props) => {
  return (
    <Box
      sx={theme => ({
        background: theme.colors.primary[0],
        marginInline: 'auto',
        borderRadius: ' 50%',
        height: 111,
        width: 111,
        position: 'relative',
      })}
    >
      <Box
        sx={theme => ({
          background: theme.colors.primary[2],
          borderRadius: ' 50%',
          right: '18%',
          top: '18%',
          height: 72,
          width: 72,
          position: 'absolute',
          boxShadow: `0px 0px 20px ${theme.colors.primary[1]}`,
        })}
      >
        <Box
          sx={theme => ({
            right: '28%',
            top: '28%',
            position: 'absolute',
            color: theme.colors.primary[7],
          })}
        >
          <Icon width="33" height="33" />
        </Box>
      </Box>
    </Box>
  );
};
