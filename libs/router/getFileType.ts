import { getFileName } from './getFileName';

export type FileType = 'image' | 'pdf';

export const getFileType = (url: string): FileType => {
  const type = getFileName(url).replace(/.+\./g, '');
  return type === 'pdf' ? 'pdf' : 'image';
};
