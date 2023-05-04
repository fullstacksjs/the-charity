import type * as Apollo from '@apollo/client';

export type MapperFn<X = any, Y = any> = (x: X) => Y;

export type MutationOptions<
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
  TContext = Apollo.DefaultContext,
  TCache extends Apollo.ApolloCache<any> = Apollo.ApolloCache<any>,
> = Apollo.MutationHookOptions<
  Parameters<TClientMapper>[0],
  ReturnType<TVariableMapper>,
  TContext,
  TCache
>;

export type MutationFn<
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
> =
  | Apollo.DocumentNode
  | Apollo.TypedDocumentNode<
      Parameters<TClientMapper>[0],
      ReturnType<TVariableMapper>
    >;

export type MutationFnOptions<
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
  Ctx = Apollo.DefaultContext,
  Cache extends Apollo.ApolloCache<any> = Apollo.ApolloCache<any>,
> = Apollo.MutationFunctionOptions<
  ReturnType<TClientMapper>,
  Parameters<TVariableMapper>[0],
  Ctx,
  Cache
>;
