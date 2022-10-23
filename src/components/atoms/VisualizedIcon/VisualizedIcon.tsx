import { Box } from '@mantine/core';

interface Props {
  icon: React.ReactNode;
}

export const VisualizedIcon = ({ icon }: Props) => {
  return (
    <Box
      sx={theme => ({
        background: theme.colors.primarySubtle[6],
        marginInline: 'auto',
        borderRadius: ' 50%',
        height: 111,
        width: 111,
        position: 'relative',
      })}
    >
      <Box
        sx={theme => ({
          background: theme.colors.indigo[2],
          borderRadius: ' 50%',
          right: '18%',
          top: '18%',
          height: 72,
          width: 72,
          position: 'absolute',
          boxShadow: `0px 0px 20px ${theme.colors.indigo[2]}`,
        })}
      >
        <Box
          sx={{
            right: '28%',
            top: '28%',
            position: 'absolute',
          }}
        >
          {icon}
        </Box>
      </Box>
    </Box>
  );
};
