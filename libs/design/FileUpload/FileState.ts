interface BaseFile {
  id: number;
  file: File;
}

interface SuccessFile extends BaseFile {
  status: 'Success';
}

interface FailedFile extends BaseFile {
  status: 'Failed';
  error?: string;
}

export type FileState = FailedFile | SuccessFile;

export const isFailed = (fileState: FileState): fileState is FailedFile =>
  fileState.status === 'Failed';

export const isSuccess = (fileState: FileState): fileState is SuccessFile =>
  fileState.status === 'Success';
