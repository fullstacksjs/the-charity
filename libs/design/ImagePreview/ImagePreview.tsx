import type { ImageProps } from '@mantine/core';
import { Box, Image } from '@mantine/core';

interface Props extends ImageProps {
  size: number;
  pad?: number;
}

export const ImagePreview = ({ size, pad = 10, ...rest }: Props) => {
  return (
    <Box
      sx={theme => ({
        width: size + pad * 2,
        border: `1px dashed ${theme.colors.bg[5]}`,
        borderRadius: '8px',
        padding: pad,
      })}
    >
      <Image width={size} radius={5} height={size} {...rest} />
    </Box>
  );
};
