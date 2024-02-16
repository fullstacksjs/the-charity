import type {
  ApiDocumentDetailFragment,
  ApiDocumentKeysFragment,
} from '@camp/data-layer';
import type { DocumentDetail, DocumentKeys } from '@camp/domain';

export const getDocumentKeys = (
  data: ApiDocumentKeysFragment,
): DocumentKeys => {
  return {
    storageId: data.storage_id,
    id: data.id,
  };
};

export const getDocumentDetail = (
  data: ApiDocumentDetailFragment,
): DocumentDetail => {
  return {
    url: data.url,
  };
};
