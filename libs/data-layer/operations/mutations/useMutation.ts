import {
  type ApolloCache,
  type DefaultContext,
  type DocumentNode,
  type FetchResult,
  type MutationHookOptions,
  type MutationTuple,
  type OperationVariables,
  type TypedDocumentNode,
} from '@apollo/client';
import * as Apollo from '@apollo/client';

type Options<
  Client,
  Variables,
  Data,
  ApiVariables,
  Ctx,
  Cache extends ApolloCache<any> = ApolloCache<any>,
> = Partial<MutationHookOptions<Data, Variables, Ctx, Cache>> & {
  mapData: (d: Data | null | undefined) => Client;
  mapVariables: (
    v: Variables | null | undefined,
  ) => ApiVariables | null | undefined;
};

export const useMutation = <
  Client,
  Variables,
  Data = any,
  ApiVariables = OperationVariables,
  Ctx = DefaultContext,
  Cache extends ApolloCache<any> = ApolloCache<any>,
>(
  mutation: DocumentNode | TypedDocumentNode<Data, ApiVariables>,
  _options: Options<Client, Variables, Data, ApiVariables, Ctx, Cache>,
): MutationTuple<Client, Variables, Ctx, Cache> => {
  const options = {
    ..._options,
    variables: _options.mapVariables(_options.variables),
  } as Options<Client, ApiVariables, Data, ApiVariables, Ctx, Cache>;

  const [fn, { data, ...rest }] = Apollo.useMutation(mutation, options);
  const m = (
    opts?:
      | Apollo.MutationFunctionOptions<Client, Variables, Ctx, Cache>
      | undefined,
  ): Promise<FetchResult<Client>> =>
    fn({
      ...(opts as Omit<typeof opts, 'onCompleted'>),
      onCompleted: opts?.onCompleted
        ? (a, ...args) => {
            opts.onCompleted?.(options.mapData(a), ...args);
          }
        : undefined,
    }).then(({ data: res, ...rests }) => ({
      data: options.mapData(res),
      ...rests,
    }));
  return [m, { data: options.mapData(data), ...rest }];
};
