import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

const VisualElements = ({ icon }: { icon: ReactNode }) => {
  return (
    <>
      <Box
        sx={{
          background: '#EDF2FF',
          borderRadius: ' 50%',
          height: 110,
          width: 110,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            background: '#BAC8FF',
            borderRadius: ' 50%',
            right: '18%',
            top: '18%',
            height: 72,
            width: 72,
            position: 'absolute',
            boxShadow: '0px 0px 20px #BAC8FF',
          }}
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
    </>
  );
};

export default VisualElements;
