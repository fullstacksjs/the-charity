import type { Document } from '@camp/domain';
import { Image } from '@mantine/core';

export const ImagePreview = ({ document }: { document: Document }) => {
  return (
    <Image
      radius="10px"
      styles={{
        figure: { height: '100%' },
        imageWrapper: {
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        },
        image: {
          objectFit: 'contain',
          height: 'calc(100vh - 400px) !important',
          width: 'auto !important',
        },
      }}
      src={document.url}
    />
  );
};
