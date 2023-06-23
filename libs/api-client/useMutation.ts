import type {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationTuple,
} from '@apollo/client';
import * as Apollo from '@apollo/client';
import { useCallback } from 'react';

import type {
  MapperFn,
  MutationFn,
  MutationFnOptions,
  MutationOptions,
} from './types';

interface InternalMutationOption<
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
  Ctx,
  Cache extends ApolloCache<any>,
> extends MutationOptions<TClientMapper, TVariableMapper, Ctx, Cache> {
  toClient: (d: Parameters<TClientMapper>[0]) => ReturnType<TClientMapper>;
  toApiVariables: (
    v: Parameters<TVariableMapper>[0],
  ) => ReturnType<TVariableMapper>;
}

export const useMutation = <
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
  Ctx = DefaultContext,
  Cache extends ApolloCache<any> = ApolloCache<any>,
>(
  mutation: MutationFn<TClientMapper, TVariableMapper>,
  options: InternalMutationOption<TClientMapper, TVariableMapper, Ctx, Cache>,
): MutationTuple<
  ReturnType<TClientMapper>,
  Parameters<TVariableMapper>[0],
  Ctx,
  Cache
> => {
  const [baseMutate, { data, ...rest }] = Apollo.useMutation(mutation, options);

  const mutate = useCallback(
    async (
      opts?: MutationFnOptions<TClientMapper, TVariableMapper, Ctx, Cache>,
    ): Promise<FetchResult<ReturnType<TClientMapper>>> => {
      const { data: res, ...rests } = await baseMutate({
        ...(opts as Omit<typeof opts, 'onCompleted'>),
        variables: options.toApiVariables(opts?.variables),
        onCompleted: opts?.onCompleted
          ? (a, ...args) => opts.onCompleted?.(options.toClient(a), ...args)
          : undefined,
      });

      return { data: options.toClient(res), ...rests };
    },
    [baseMutate, options],
  );
  return [mutate, { data: options.toClient(data), ...rest }];
};
