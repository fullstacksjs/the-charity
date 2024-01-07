interface BaseFile {
  id: number;
  file: File;
}

export interface SuccessFile extends BaseFile {
  status: 'Success';
}

interface UploadingFile extends BaseFile {
  status: 'Uploading';
}

export interface FailedFile extends BaseFile {
  status: 'Failed';
  error?: string;
}

export type FileState = FailedFile | SuccessFile | UploadingFile;

export const isFailed = (fileState: FileState): fileState is FailedFile =>
  fileState.status === 'Failed';

export const isSuccess = (fileState: FileState): fileState is SuccessFile =>
  fileState.status === 'Success';
