import { getFileName } from './getFileName';

export type FileType = 'image' | 'pdf' | 'video';

export const getFileType = (url: string): FileType => {
  const type = getFileName(url).replace(/.+\./g, '');

  return type === 'pdf' ? 'pdf' : /mp4|mkv/.exec(type) ? 'video' : 'image';
};
