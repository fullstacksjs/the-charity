import type { ImageProps } from '@mantine/core';
import { Box, Center, Image } from '@mantine/core';

import { CameraOffIcon } from '../../icons';

interface Props extends ImageProps {
  size: number;
  pad?: number;
}

export const ImagePreview = ({ size, pad = 10, src, ...rest }: Props) => {
  return (
    <Box
      sx={theme => ({
        width: size + pad * 2,
        border: `1px dashed ${theme.colors.bg[5]}`,
        borderRadius: '8px',
        padding: pad,
      })}
    >
      <Center sx={{ height: size }}>
        {src == null ? (
          <CameraOffIcon />
        ) : (
          <Image radius={5} height={size} src={src} {...rest} />
        )}
      </Center>
    </Box>
  );
};
