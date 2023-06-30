import type * as Apollo from '@apollo/client';
import type { ExecutionResult, GraphQLError } from 'graphql';

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

export type QueryOptions<
  TClientMapper extends MapperFn,
  TVariableMapper,
> = Apollo.QueryOptions<
  TVariableMapper extends MapperFn
    ? ReturnType<TVariableMapper>
    : TVariableMapper,
  Parameters<TClientMapper>[0]
>;

export interface SingleExecutionResult<
  TData = Record<string, any>,
  TContext = Apollo.DefaultContext,
  TExtensions = Record<string, any>,
> extends ExecutionResult<TData, TExtensions> {
  data: TData;
  context?: TContext;
}

export interface ExecutionPatchInitialResult<
  TData = Record<string, any>,
  TExtensions = Record<string, any>,
> {
  data: TData;
  incremental?: never;
  errors?: readonly GraphQLError[];
  extensions?: TExtensions;
  hasNext?: boolean;
}

export interface ExecutionPatchIncrementalResult<
  TData = Record<string, any>,
  TExtensions = Record<string, any>,
> {
  incremental?: Apollo.IncrementalPayload<TData, TExtensions>[];
  data: never;
  errors?: never;
  extensions?: never;
  hasNext?: boolean;
}

export type ExecutionPatchResult<
  TData = Record<string, any>,
  TExtensions = Record<string, any>,
> =
  | ExecutionPatchIncrementalResult<TData, TExtensions>
  | ExecutionPatchInitialResult<TData, TExtensions>;

export type FetchResult<
  TData = Record<string, any>,
  TContext = Record<string, any>,
  TExtensions = Record<string, any>,
> =
  | ExecutionPatchResult<TData, TExtensions>
  | SingleExecutionResult<TData, TContext, TExtensions>;

export type MutationTuple<
  TData,
  TVariables,
  TContext = Apollo.DefaultContext,
  TCache extends Apollo.ApolloCache<any> = Apollo.ApolloCache<any>,
> = [
  (
    options?: Apollo.MutationFunctionOptions<
      TData,
      TVariables,
      TContext,
      TCache
    >,
  ) => Promise<FetchResult<TData>>,
  Apollo.MutationResult<TData>,
];

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

export type QueryHookOptions<
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
> = Apollo.QueryHookOptions<
  ReturnType<TClientMapper>,
  Parameters<TVariableMapper>[0]
>;

export type NeverFn = (x: any) => Record<string, never>;
