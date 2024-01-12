import { config } from '@camp/config';
import type { RemoteDocument } from '@camp/domain';
import axios from 'axios';

const client = axios.create({
  baseURL: config.fileStorageApiEndpoint,
});

export const upload = async (file: File): Promise<RemoteDocument> => {
  const data = new FormData();

  const blob = new Blob([file], { type: file.type });
  data.append('file', blob, file.name);
  const response = await client.post('/', data);
  const id = response.data.Key as string;

  return { url: `${config.fileStorageApiEndpoint}/${id}`, id };
};

export const unUpload = async (id: RemoteDocument['id']) => {
  await client.delete(`/${id}`);
};
