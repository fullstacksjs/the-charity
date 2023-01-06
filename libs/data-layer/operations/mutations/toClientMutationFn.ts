import type Apollo from '@apollo/client';
import type { FetchResult } from '@apollo/client';

export const toClientMutationFn =
  <Option, Result, Client>(
    mutation: (
      o?: Apollo.MutationFunctionOptions<Option, Result>,
    ) => Promise<FetchResult<Option>>,
    toClientFn: (o: Option | null | undefined) => Client,
  ) =>
  (options?: Apollo.MutationFunctionOptions<Option, Result>) =>
    mutation(options).then(({ data, ...rest }) => ({
      data: toClientFn(data),
      ...rest,
    }));
