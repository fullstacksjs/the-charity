import { errorMessages } from '@camp/messages';

export type ServerError =
  | 'INTERNAL_SERVER'
  | 'INVALID_CREDENTIALS'
  | 'UNKNOWN_ERROR';

export interface KnownError extends Omit<Error, 'message'> {
  message: ServerError;
}

const isKnownError = (e: unknown): e is KnownError =>
  e instanceof Error && Object.keys(errorMessages).includes(e.message);

export const toClientErrorMessage = (error: unknown): string => {
  if (!isKnownError(error)) {
    console.error(error);
    return errorMessages.UNKNOWN_ERROR;
  }

  return errorMessages[error.message];
};
