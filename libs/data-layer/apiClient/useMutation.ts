import type {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationTuple,
} from '@apollo/client';
import * as Apollo from '@apollo/client';
import { useCallback } from 'react';

import type { MapperFn, MutationFn, MutationFnOptions } from './types';

type InternalMutationOption<
  TClientMapper extends <X, Y>(v: X) => Y,
  TVariableMapper extends <X, Y>(v: X) => Y,
  Ctx,
  Cache extends ApolloCache<any>,
> = Apollo.MutationHookOptions<
  TClientMapper extends (api: infer A) => any ? A : never,
  TVariableMapper extends (c: any) => infer V ? V : never,
  Ctx,
  Cache
> & {
  mapData: (
    d: Parameters<TClientMapper>[0] | null | undefined,
  ) => ReturnType<TClientMapper>;
  mapVariables: (
    v: Parameters<TVariableMapper>[0] | null | undefined,
  ) => ReturnType<TVariableMapper> | undefined;
};

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
        variables: options.mapVariables(opts?.variables),
        onCompleted: opts?.onCompleted
          ? (a, ...args) => opts.onCompleted?.(options.mapData(a), ...args)
          : undefined,
      });

      return { data: options.mapData(res), ...rests };
    },
    [baseMutate, options],
  );
  return [mutate, { data: options.mapData(data), ...rest }];
};
