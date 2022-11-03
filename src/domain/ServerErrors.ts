import { messages } from '@camp/messages';

const invalidCredentials = 'INVALID_CREDENTIALS';
const internalServer = 'INTERNAL_SERVER';

export const toClientErrorMessage = (error: unknown): string => {
  if (!(error instanceof Error))
    throw new Error('the arg type should be an error');

  switch (error.message) {
    case invalidCredentials:
      return messages.errors.INVALID_CREDENTIALS;
    case internalServer:
      return messages.errors.INTERNAL_SERVER;
    default:
      throw new Error('unknown error');
  }
};
