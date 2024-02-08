import { config } from '@camp/config';
import type { StorageFile } from '@camp/domain';
import axios from 'axios';

const client = axios.create({
  baseURL: config.fileStorageApiEndpoint,
});

export const upload = async (file: File): Promise<StorageFile> => {
  const data = new FormData();

  const blob = new Blob([file], { type: file.type });
  data.append('file', blob, file.name);
  const response = await client.post('/', data);
  const id = response.data.Key as string;

  return { url: `${config.fileStorageApiEndpoint}${id}`, id };
};

export const unUpload = async (id: StorageFile['id']) => {
  await client.delete(`/${id}`);
};

export const get = async (url: string): Promise<Blob> => {
  const res = await axios.get(url, { responseType: 'blob' });
  return res.data;
};
