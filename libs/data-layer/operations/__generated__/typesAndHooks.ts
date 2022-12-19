/* This file is generated, do not edit! */
/* eslint-disable */
/* cspell:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "family" */
export type Family = {
  __typename?: 'family';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  db_code: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  severity: FamilySeverityEnum;
  status: FamilyStatusEnum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "family" */
export type FamilyAggregate = {
  __typename?: 'family_aggregate';
  aggregate?: Maybe<FamilyAggregateFields>;
  nodes: Array<Family>;
};

/** aggregate fields of "family" */
export type FamilyAggregateFields = {
  __typename?: 'family_aggregate_fields';
  avg?: Maybe<FamilyAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FamilyMaxFields>;
  min?: Maybe<FamilyMinFields>;
  stddev?: Maybe<FamilyStddevFields>;
  stddev_pop?: Maybe<FamilyStddevPopFields>;
  stddev_samp?: Maybe<FamilyStddevSampFields>;
  sum?: Maybe<FamilySumFields>;
  var_pop?: Maybe<FamilyVarPopFields>;
  var_samp?: Maybe<FamilyVarSampFields>;
  variance?: Maybe<FamilyVarianceFields>;
};


/** aggregate fields of "family" */
export type FamilyAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FamilySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type FamilyAvgFields = {
  __typename?: 'family_avg_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "family". All fields are combined with a logical 'AND'. */
export type FamilyBoolExp = {
  _and?: InputMaybe<Array<FamilyBoolExp>>;
  _not?: InputMaybe<FamilyBoolExp>;
  _or?: InputMaybe<Array<FamilyBoolExp>>;
  code?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  db_code?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  severity?: InputMaybe<FamilySeverityEnumComparisonExp>;
  status?: InputMaybe<FamilyStatusEnumComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "family" */
export enum FamilyConstraint {
  /** unique or primary key constraint on columns "db_code" */
  FamilyCodeKey = 'family_code_key',
  /** unique or primary key constraint on columns "id" */
  FamilyPkey = 'family_pkey'
}

/** input type for incrementing numeric columns in table "family" */
export type FamilyIncInput = {
  db_code?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "family" */
export type FamilyInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  db_code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<FamilySeverityEnum>;
  status?: InputMaybe<FamilyStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type FamilyMaxFields = {
  __typename?: 'family_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  db_code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type FamilyMinFields = {
  __typename?: 'family_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  db_code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "family" */
export type FamilyMutationResponse = {
  __typename?: 'family_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Family>;
};

/** on_conflict condition type for table "family" */
export type FamilyOnConflict = {
  constraint: FamilyConstraint;
  update_columns?: Array<FamilyUpdateColumn>;
  where?: InputMaybe<FamilyBoolExp>;
};

/** Ordering options when selecting data from "family". */
export type FamilyOrderBy = {
  code?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  db_code?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  severity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: family */
export type FamilyPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "family" */
export enum FamilySelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DbCode = 'db_code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Severity = 'severity',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "family" */
export type FamilySetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  db_code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<FamilySeverityEnum>;
  status?: InputMaybe<FamilyStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "family_severity" */
export type FamilySeverity = {
  __typename?: 'family_severity';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "family_severity" */
export type FamilySeverityAggregate = {
  __typename?: 'family_severity_aggregate';
  aggregate?: Maybe<FamilySeverityAggregateFields>;
  nodes: Array<FamilySeverity>;
};

/** aggregate fields of "family_severity" */
export type FamilySeverityAggregateFields = {
  __typename?: 'family_severity_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FamilySeverityMaxFields>;
  min?: Maybe<FamilySeverityMinFields>;
};


/** aggregate fields of "family_severity" */
export type FamilySeverityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FamilySeveritySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "family_severity". All fields are combined with a logical 'AND'. */
export type FamilySeverityBoolExp = {
  _and?: InputMaybe<Array<FamilySeverityBoolExp>>;
  _not?: InputMaybe<FamilySeverityBoolExp>;
  _or?: InputMaybe<Array<FamilySeverityBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "family_severity" */
export enum FamilySeverityConstraint {
  /** unique or primary key constraint on columns "value" */
  FamilySeverityPkey = 'family_severity_pkey'
}

export enum FamilySeverityEnum {
  Critical = 'Critical',
  Normal = 'Normal'
}

/** Boolean expression to compare columns of type "family_severity_enum". All fields are combined with logical 'AND'. */
export type FamilySeverityEnumComparisonExp = {
  _eq?: InputMaybe<FamilySeverityEnum>;
  _in?: InputMaybe<Array<FamilySeverityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<FamilySeverityEnum>;
  _nin?: InputMaybe<Array<FamilySeverityEnum>>;
};

/** input type for inserting data into table "family_severity" */
export type FamilySeverityInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FamilySeverityMaxFields = {
  __typename?: 'family_severity_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FamilySeverityMinFields = {
  __typename?: 'family_severity_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "family_severity" */
export type FamilySeverityMutationResponse = {
  __typename?: 'family_severity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FamilySeverity>;
};

/** on_conflict condition type for table "family_severity" */
export type FamilySeverityOnConflict = {
  constraint: FamilySeverityConstraint;
  update_columns?: Array<FamilySeverityUpdateColumn>;
  where?: InputMaybe<FamilySeverityBoolExp>;
};

/** Ordering options when selecting data from "family_severity". */
export type FamilySeverityOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: family_severity */
export type FamilySeverityPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "family_severity" */
export enum FamilySeveritySelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "family_severity" */
export type FamilySeveritySetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "family_severity" */
export type FamilySeverityStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FamilySeverityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FamilySeverityStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "family_severity" */
export enum FamilySeverityUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type FamilySeverityUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FamilySeveritySetInput>;
  where: FamilySeverityBoolExp;
};

/** columns and relationships of "family_status" */
export type FamilyStatus = {
  __typename?: 'family_status';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "family_status" */
export type FamilyStatusAggregate = {
  __typename?: 'family_status_aggregate';
  aggregate?: Maybe<FamilyStatusAggregateFields>;
  nodes: Array<FamilyStatus>;
};

/** aggregate fields of "family_status" */
export type FamilyStatusAggregateFields = {
  __typename?: 'family_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FamilyStatusMaxFields>;
  min?: Maybe<FamilyStatusMinFields>;
};


/** aggregate fields of "family_status" */
export type FamilyStatusAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FamilyStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "family_status". All fields are combined with a logical 'AND'. */
export type FamilyStatusBoolExp = {
  _and?: InputMaybe<Array<FamilyStatusBoolExp>>;
  _not?: InputMaybe<FamilyStatusBoolExp>;
  _or?: InputMaybe<Array<FamilyStatusBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "family_status" */
export enum FamilyStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  FamilyStatusPkey = 'family_status_pkey'
}

export enum FamilyStatusEnum {
  Completed = 'Completed',
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "family_status_enum". All fields are combined with logical 'AND'. */
export type FamilyStatusEnumComparisonExp = {
  _eq?: InputMaybe<FamilyStatusEnum>;
  _in?: InputMaybe<Array<FamilyStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<FamilyStatusEnum>;
  _nin?: InputMaybe<Array<FamilyStatusEnum>>;
};

/** input type for inserting data into table "family_status" */
export type FamilyStatusInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FamilyStatusMaxFields = {
  __typename?: 'family_status_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FamilyStatusMinFields = {
  __typename?: 'family_status_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "family_status" */
export type FamilyStatusMutationResponse = {
  __typename?: 'family_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FamilyStatus>;
};

/** on_conflict condition type for table "family_status" */
export type FamilyStatusOnConflict = {
  constraint: FamilyStatusConstraint;
  update_columns?: Array<FamilyStatusUpdateColumn>;
  where?: InputMaybe<FamilyStatusBoolExp>;
};

/** Ordering options when selecting data from "family_status". */
export type FamilyStatusOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: family_status */
export type FamilyStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "family_status" */
export enum FamilyStatusSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "family_status" */
export type FamilyStatusSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "family_status" */
export type FamilyStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FamilyStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FamilyStatusStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "family_status" */
export enum FamilyStatusUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type FamilyStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FamilyStatusSetInput>;
  where: FamilyStatusBoolExp;
};

/** aggregate stddev on columns */
export type FamilyStddevFields = {
  __typename?: 'family_stddev_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type FamilyStddevPopFields = {
  __typename?: 'family_stddev_pop_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type FamilyStddevSampFields = {
  __typename?: 'family_stddev_samp_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "family" */
export type FamilyStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FamilyStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FamilyStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  db_code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<FamilySeverityEnum>;
  status?: InputMaybe<FamilyStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type FamilySumFields = {
  __typename?: 'family_sum_fields';
  db_code?: Maybe<Scalars['Int']>;
};

/** update columns of table "family" */
export enum FamilyUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DbCode = 'db_code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Severity = 'severity',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type FamilyUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FamilyIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FamilySetInput>;
  where: FamilyBoolExp;
};

/** aggregate var_pop on columns */
export type FamilyVarPopFields = {
  __typename?: 'family_var_pop_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type FamilyVarSampFields = {
  __typename?: 'family_var_samp_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type FamilyVarianceFields = {
  __typename?: 'family_variance_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "householder" */
export type Householder = {
  __typename?: 'householder';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  status: HouseholderStatusEnum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "householder" */
export type HouseholderAggregate = {
  __typename?: 'householder_aggregate';
  aggregate?: Maybe<HouseholderAggregateFields>;
  nodes: Array<Householder>;
};

/** aggregate fields of "householder" */
export type HouseholderAggregateFields = {
  __typename?: 'householder_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<HouseholderMaxFields>;
  min?: Maybe<HouseholderMinFields>;
};


/** aggregate fields of "householder" */
export type HouseholderAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "householder". All fields are combined with a logical 'AND'. */
export type HouseholderBoolExp = {
  _and?: InputMaybe<Array<HouseholderBoolExp>>;
  _not?: InputMaybe<HouseholderBoolExp>;
  _or?: InputMaybe<Array<HouseholderBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<HouseholderStatusEnumComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "householder" */
export enum HouseholderConstraint {
  /** unique or primary key constraint on columns "id" */
  HouseholderPkey = 'householder_pkey'
}

/** input type for inserting data into table "householder" */
export type HouseholderInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<HouseholderStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type HouseholderMaxFields = {
  __typename?: 'householder_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type HouseholderMinFields = {
  __typename?: 'householder_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "householder" */
export type HouseholderMutationResponse = {
  __typename?: 'householder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Householder>;
};

/** on_conflict condition type for table "householder" */
export type HouseholderOnConflict = {
  constraint: HouseholderConstraint;
  update_columns?: Array<HouseholderUpdateColumn>;
  where?: InputMaybe<HouseholderBoolExp>;
};

/** Ordering options when selecting data from "householder". */
export type HouseholderOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: householder */
export type HouseholderPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "householder" */
export enum HouseholderSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "householder" */
export type HouseholderSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<HouseholderStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "householder_status" */
export type HouseholderStatus = {
  __typename?: 'householder_status';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "householder_status" */
export type HouseholderStatusAggregate = {
  __typename?: 'householder_status_aggregate';
  aggregate?: Maybe<HouseholderStatusAggregateFields>;
  nodes: Array<HouseholderStatus>;
};

/** aggregate fields of "householder_status" */
export type HouseholderStatusAggregateFields = {
  __typename?: 'householder_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<HouseholderStatusMaxFields>;
  min?: Maybe<HouseholderStatusMinFields>;
};


/** aggregate fields of "householder_status" */
export type HouseholderStatusAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholderStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "householder_status". All fields are combined with a logical 'AND'. */
export type HouseholderStatusBoolExp = {
  _and?: InputMaybe<Array<HouseholderStatusBoolExp>>;
  _not?: InputMaybe<HouseholderStatusBoolExp>;
  _or?: InputMaybe<Array<HouseholderStatusBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "householder_status" */
export enum HouseholderStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  HouseholderStatusPkey = 'householder_status_pkey'
}

export enum HouseholderStatusEnum {
  Completed = 'Completed',
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "householder_status_enum". All fields are combined with logical 'AND'. */
export type HouseholderStatusEnumComparisonExp = {
  _eq?: InputMaybe<HouseholderStatusEnum>;
  _in?: InputMaybe<Array<HouseholderStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<HouseholderStatusEnum>;
  _nin?: InputMaybe<Array<HouseholderStatusEnum>>;
};

/** input type for inserting data into table "householder_status" */
export type HouseholderStatusInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type HouseholderStatusMaxFields = {
  __typename?: 'householder_status_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type HouseholderStatusMinFields = {
  __typename?: 'householder_status_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "householder_status" */
export type HouseholderStatusMutationResponse = {
  __typename?: 'householder_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholderStatus>;
};

/** on_conflict condition type for table "householder_status" */
export type HouseholderStatusOnConflict = {
  constraint: HouseholderStatusConstraint;
  update_columns?: Array<HouseholderStatusUpdateColumn>;
  where?: InputMaybe<HouseholderStatusBoolExp>;
};

/** Ordering options when selecting data from "householder_status". */
export type HouseholderStatusOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: householder_status */
export type HouseholderStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "householder_status" */
export enum HouseholderStatusSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "householder_status" */
export type HouseholderStatusSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "householder_status" */
export type HouseholderStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HouseholderStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholderStatusStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "householder_status" */
export enum HouseholderStatusUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type HouseholderStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholderStatusSetInput>;
  where: HouseholderStatusBoolExp;
};

/** Streaming cursor of the table "householder" */
export type HouseholderStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HouseholderStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholderStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<HouseholderStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "householder" */
export enum HouseholderUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type HouseholderUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholderSetInput>;
  where: HouseholderBoolExp;
};

/** columns and relationships of "member" */
export type Member = {
  __typename?: 'member';
  created_at: Scalars['timestamptz'];
  family_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "member" */
export type MemberAggregate = {
  __typename?: 'member_aggregate';
  aggregate?: Maybe<MemberAggregateFields>;
  nodes: Array<Member>;
};

/** aggregate fields of "member" */
export type MemberAggregateFields = {
  __typename?: 'member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MemberMaxFields>;
  min?: Maybe<MemberMinFields>;
};


/** aggregate fields of "member" */
export type MemberAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MemberSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type MemberBoolExp = {
  _and?: InputMaybe<Array<MemberBoolExp>>;
  _not?: InputMaybe<MemberBoolExp>;
  _or?: InputMaybe<Array<MemberBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  family_id?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "member" */
export enum MemberConstraint {
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** input type for inserting data into table "member" */
export type MemberInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type MemberMaxFields = {
  __typename?: 'member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  family_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MemberMinFields = {
  __typename?: 'member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  family_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "member" */
export type MemberMutationResponse = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** on_conflict condition type for table "member" */
export type MemberOnConflict = {
  constraint: MemberConstraint;
  update_columns?: Array<MemberUpdateColumn>;
  where?: InputMaybe<MemberBoolExp>;
};

/** Ordering options when selecting data from "member". */
export type MemberOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  family_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: member */
export type MemberPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "member" */
export enum MemberSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "member" */
export type MemberSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "member" */
export type MemberStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: MemberStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "member" */
export enum MemberUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type MemberUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberSetInput>;
  where: MemberBoolExp;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "family" */
  delete_family?: Maybe<FamilyMutationResponse>;
  /** delete single row from the table: "family" */
  delete_family_by_pk?: Maybe<Family>;
  /** delete data from the table: "family_severity" */
  delete_family_severity?: Maybe<FamilySeverityMutationResponse>;
  /** delete single row from the table: "family_severity" */
  delete_family_severity_by_pk?: Maybe<FamilySeverity>;
  /** delete data from the table: "family_status" */
  delete_family_status?: Maybe<FamilyStatusMutationResponse>;
  /** delete single row from the table: "family_status" */
  delete_family_status_by_pk?: Maybe<FamilyStatus>;
  /** delete data from the table: "householder" */
  delete_householder?: Maybe<HouseholderMutationResponse>;
  /** delete single row from the table: "householder" */
  delete_householder_by_pk?: Maybe<Householder>;
  /** delete data from the table: "householder_status" */
  delete_householder_status?: Maybe<HouseholderStatusMutationResponse>;
  /** delete single row from the table: "householder_status" */
  delete_householder_status_by_pk?: Maybe<HouseholderStatus>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<MemberMutationResponse>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<Member>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<ProjectMutationResponse>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "project_status" */
  delete_project_status?: Maybe<ProjectStatusMutationResponse>;
  /** delete single row from the table: "project_status" */
  delete_project_status_by_pk?: Maybe<ProjectStatus>;
  /** insert data into the table: "family" */
  insert_family?: Maybe<FamilyMutationResponse>;
  /** insert a single row into the table: "family" */
  insert_family_one?: Maybe<Family>;
  /** insert data into the table: "family_severity" */
  insert_family_severity?: Maybe<FamilySeverityMutationResponse>;
  /** insert a single row into the table: "family_severity" */
  insert_family_severity_one?: Maybe<FamilySeverity>;
  /** insert data into the table: "family_status" */
  insert_family_status?: Maybe<FamilyStatusMutationResponse>;
  /** insert a single row into the table: "family_status" */
  insert_family_status_one?: Maybe<FamilyStatus>;
  /** insert data into the table: "householder" */
  insert_householder?: Maybe<HouseholderMutationResponse>;
  /** insert a single row into the table: "householder" */
  insert_householder_one?: Maybe<Householder>;
  /** insert data into the table: "householder_status" */
  insert_householder_status?: Maybe<HouseholderStatusMutationResponse>;
  /** insert a single row into the table: "householder_status" */
  insert_householder_status_one?: Maybe<HouseholderStatus>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<MemberMutationResponse>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<Member>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<ProjectMutationResponse>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "project_status" */
  insert_project_status?: Maybe<ProjectStatusMutationResponse>;
  /** insert a single row into the table: "project_status" */
  insert_project_status_one?: Maybe<ProjectStatus>;
  /** update data of the table: "family" */
  update_family?: Maybe<FamilyMutationResponse>;
  /** update single row of the table: "family" */
  update_family_by_pk?: Maybe<Family>;
  /** update multiples rows of table: "family" */
  update_family_many?: Maybe<Array<Maybe<FamilyMutationResponse>>>;
  /** update data of the table: "family_severity" */
  update_family_severity?: Maybe<FamilySeverityMutationResponse>;
  /** update single row of the table: "family_severity" */
  update_family_severity_by_pk?: Maybe<FamilySeverity>;
  /** update multiples rows of table: "family_severity" */
  update_family_severity_many?: Maybe<Array<Maybe<FamilySeverityMutationResponse>>>;
  /** update data of the table: "family_status" */
  update_family_status?: Maybe<FamilyStatusMutationResponse>;
  /** update single row of the table: "family_status" */
  update_family_status_by_pk?: Maybe<FamilyStatus>;
  /** update multiples rows of table: "family_status" */
  update_family_status_many?: Maybe<Array<Maybe<FamilyStatusMutationResponse>>>;
  /** update data of the table: "householder" */
  update_householder?: Maybe<HouseholderMutationResponse>;
  /** update single row of the table: "householder" */
  update_householder_by_pk?: Maybe<Householder>;
  /** update multiples rows of table: "householder" */
  update_householder_many?: Maybe<Array<Maybe<HouseholderMutationResponse>>>;
  /** update data of the table: "householder_status" */
  update_householder_status?: Maybe<HouseholderStatusMutationResponse>;
  /** update single row of the table: "householder_status" */
  update_householder_status_by_pk?: Maybe<HouseholderStatus>;
  /** update multiples rows of table: "householder_status" */
  update_householder_status_many?: Maybe<Array<Maybe<HouseholderStatusMutationResponse>>>;
  /** update data of the table: "member" */
  update_member?: Maybe<MemberMutationResponse>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<Member>;
  /** update multiples rows of table: "member" */
  update_member_many?: Maybe<Array<Maybe<MemberMutationResponse>>>;
  /** update data of the table: "project" */
  update_project?: Maybe<ProjectMutationResponse>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "project" */
  update_project_many?: Maybe<Array<Maybe<ProjectMutationResponse>>>;
  /** update data of the table: "project_status" */
  update_project_status?: Maybe<ProjectStatusMutationResponse>;
  /** update single row of the table: "project_status" */
  update_project_status_by_pk?: Maybe<ProjectStatus>;
  /** update multiples rows of table: "project_status" */
  update_project_status_many?: Maybe<Array<Maybe<ProjectStatusMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteFamilyArgs = {
  where: FamilyBoolExp;
};


/** mutation root */
export type MutationRootDeleteFamilyByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFamilySeverityArgs = {
  where: FamilySeverityBoolExp;
};


/** mutation root */
export type MutationRootDeleteFamilySeverityByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteFamilyStatusArgs = {
  where: FamilyStatusBoolExp;
};


/** mutation root */
export type MutationRootDeleteFamilyStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteHouseholderArgs = {
  where: HouseholderBoolExp;
};


/** mutation root */
export type MutationRootDeleteHouseholderByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteHouseholderStatusArgs = {
  where: HouseholderStatusBoolExp;
};


/** mutation root */
export type MutationRootDeleteHouseholderStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteMemberArgs = {
  where: MemberBoolExp;
};


/** mutation root */
export type MutationRootDeleteMemberByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteProjectArgs = {
  where: ProjectBoolExp;
};


/** mutation root */
export type MutationRootDeleteProjectByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteProjectStatusArgs = {
  where: ProjectStatusBoolExp;
};


/** mutation root */
export type MutationRootDeleteProjectStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertFamilyArgs = {
  objects: Array<FamilyInsertInput>;
  on_conflict?: InputMaybe<FamilyOnConflict>;
};


/** mutation root */
export type MutationRootInsertFamilyOneArgs = {
  object: FamilyInsertInput;
  on_conflict?: InputMaybe<FamilyOnConflict>;
};


/** mutation root */
export type MutationRootInsertFamilySeverityArgs = {
  objects: Array<FamilySeverityInsertInput>;
  on_conflict?: InputMaybe<FamilySeverityOnConflict>;
};


/** mutation root */
export type MutationRootInsertFamilySeverityOneArgs = {
  object: FamilySeverityInsertInput;
  on_conflict?: InputMaybe<FamilySeverityOnConflict>;
};


/** mutation root */
export type MutationRootInsertFamilyStatusArgs = {
  objects: Array<FamilyStatusInsertInput>;
  on_conflict?: InputMaybe<FamilyStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertFamilyStatusOneArgs = {
  object: FamilyStatusInsertInput;
  on_conflict?: InputMaybe<FamilyStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertHouseholderArgs = {
  objects: Array<HouseholderInsertInput>;
  on_conflict?: InputMaybe<HouseholderOnConflict>;
};


/** mutation root */
export type MutationRootInsertHouseholderOneArgs = {
  object: HouseholderInsertInput;
  on_conflict?: InputMaybe<HouseholderOnConflict>;
};


/** mutation root */
export type MutationRootInsertHouseholderStatusArgs = {
  objects: Array<HouseholderStatusInsertInput>;
  on_conflict?: InputMaybe<HouseholderStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertHouseholderStatusOneArgs = {
  object: HouseholderStatusInsertInput;
  on_conflict?: InputMaybe<HouseholderStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertMemberArgs = {
  objects: Array<MemberInsertInput>;
  on_conflict?: InputMaybe<MemberOnConflict>;
};


/** mutation root */
export type MutationRootInsertMemberOneArgs = {
  object: MemberInsertInput;
  on_conflict?: InputMaybe<MemberOnConflict>;
};


/** mutation root */
export type MutationRootInsertProjectArgs = {
  objects: Array<ProjectInsertInput>;
  on_conflict?: InputMaybe<ProjectOnConflict>;
};


/** mutation root */
export type MutationRootInsertProjectOneArgs = {
  object: ProjectInsertInput;
  on_conflict?: InputMaybe<ProjectOnConflict>;
};


/** mutation root */
export type MutationRootInsertProjectStatusArgs = {
  objects: Array<ProjectStatusInsertInput>;
  on_conflict?: InputMaybe<ProjectStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertProjectStatusOneArgs = {
  object: ProjectStatusInsertInput;
  on_conflict?: InputMaybe<ProjectStatusOnConflict>;
};


/** mutation root */
export type MutationRootUpdateFamilyArgs = {
  _inc?: InputMaybe<FamilyIncInput>;
  _set?: InputMaybe<FamilySetInput>;
  where: FamilyBoolExp;
};


/** mutation root */
export type MutationRootUpdateFamilyByPkArgs = {
  _inc?: InputMaybe<FamilyIncInput>;
  _set?: InputMaybe<FamilySetInput>;
  pk_columns: FamilyPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFamilyManyArgs = {
  updates: Array<FamilyUpdates>;
};


/** mutation root */
export type MutationRootUpdateFamilySeverityArgs = {
  _set?: InputMaybe<FamilySeveritySetInput>;
  where: FamilySeverityBoolExp;
};


/** mutation root */
export type MutationRootUpdateFamilySeverityByPkArgs = {
  _set?: InputMaybe<FamilySeveritySetInput>;
  pk_columns: FamilySeverityPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFamilySeverityManyArgs = {
  updates: Array<FamilySeverityUpdates>;
};


/** mutation root */
export type MutationRootUpdateFamilyStatusArgs = {
  _set?: InputMaybe<FamilyStatusSetInput>;
  where: FamilyStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdateFamilyStatusByPkArgs = {
  _set?: InputMaybe<FamilyStatusSetInput>;
  pk_columns: FamilyStatusPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFamilyStatusManyArgs = {
  updates: Array<FamilyStatusUpdates>;
};


/** mutation root */
export type MutationRootUpdateHouseholderArgs = {
  _set?: InputMaybe<HouseholderSetInput>;
  where: HouseholderBoolExp;
};


/** mutation root */
export type MutationRootUpdateHouseholderByPkArgs = {
  _set?: InputMaybe<HouseholderSetInput>;
  pk_columns: HouseholderPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateHouseholderManyArgs = {
  updates: Array<HouseholderUpdates>;
};


/** mutation root */
export type MutationRootUpdateHouseholderStatusArgs = {
  _set?: InputMaybe<HouseholderStatusSetInput>;
  where: HouseholderStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdateHouseholderStatusByPkArgs = {
  _set?: InputMaybe<HouseholderStatusSetInput>;
  pk_columns: HouseholderStatusPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateHouseholderStatusManyArgs = {
  updates: Array<HouseholderStatusUpdates>;
};


/** mutation root */
export type MutationRootUpdateMemberArgs = {
  _set?: InputMaybe<MemberSetInput>;
  where: MemberBoolExp;
};


/** mutation root */
export type MutationRootUpdateMemberByPkArgs = {
  _set?: InputMaybe<MemberSetInput>;
  pk_columns: MemberPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateMemberManyArgs = {
  updates: Array<MemberUpdates>;
};


/** mutation root */
export type MutationRootUpdateProjectArgs = {
  _set?: InputMaybe<ProjectSetInput>;
  where: ProjectBoolExp;
};


/** mutation root */
export type MutationRootUpdateProjectByPkArgs = {
  _set?: InputMaybe<ProjectSetInput>;
  pk_columns: ProjectPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateProjectManyArgs = {
  updates: Array<ProjectUpdates>;
};


/** mutation root */
export type MutationRootUpdateProjectStatusArgs = {
  _set?: InputMaybe<ProjectStatusSetInput>;
  where: ProjectStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdateProjectStatusByPkArgs = {
  _set?: InputMaybe<ProjectStatusSetInput>;
  pk_columns: ProjectStatusPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateProjectStatusManyArgs = {
  updates: Array<ProjectStatusUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "project" */
export type Project = {
  __typename?: 'project';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  status: ProjectStatusEnum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "project" */
export type ProjectAggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<ProjectAggregateFields>;
  nodes: Array<Project>;
};

/** aggregate fields of "project" */
export type ProjectAggregateFields = {
  __typename?: 'project_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProjectMaxFields>;
  min?: Maybe<ProjectMinFields>;
};


/** aggregate fields of "project" */
export type ProjectAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type ProjectBoolExp = {
  _and?: InputMaybe<Array<ProjectBoolExp>>;
  _not?: InputMaybe<ProjectBoolExp>;
  _or?: InputMaybe<Array<ProjectBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<ProjectStatusEnumComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "project" */
export enum ProjectConstraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'project_pkey'
}

/** input type for inserting data into table "project" */
export type ProjectInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ProjectMaxFields = {
  __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ProjectMinFields = {
  __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "project" */
export type ProjectMutationResponse = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** on_conflict condition type for table "project" */
export type ProjectOnConflict = {
  constraint: ProjectConstraint;
  update_columns?: Array<ProjectUpdateColumn>;
  where?: InputMaybe<ProjectBoolExp>;
};

/** Ordering options when selecting data from "project". */
export type ProjectOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project */
export type ProjectPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "project" */
export enum ProjectSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "project" */
export type ProjectSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "project_status" */
export type ProjectStatus = {
  __typename?: 'project_status';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "project_status" */
export type ProjectStatusAggregate = {
  __typename?: 'project_status_aggregate';
  aggregate?: Maybe<ProjectStatusAggregateFields>;
  nodes: Array<ProjectStatus>;
};

/** aggregate fields of "project_status" */
export type ProjectStatusAggregateFields = {
  __typename?: 'project_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProjectStatusMaxFields>;
  min?: Maybe<ProjectStatusMinFields>;
};


/** aggregate fields of "project_status" */
export type ProjectStatusAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project_status". All fields are combined with a logical 'AND'. */
export type ProjectStatusBoolExp = {
  _and?: InputMaybe<Array<ProjectStatusBoolExp>>;
  _not?: InputMaybe<ProjectStatusBoolExp>;
  _or?: InputMaybe<Array<ProjectStatusBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "project_status" */
export enum ProjectStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  ProjectStatusPkey = 'project_status_pkey'
}

export enum ProjectStatusEnum {
  Done = 'Done',
  InProgress = 'InProgress',
  Planning = 'Planning',
  Suspended = 'Suspended'
}

/** Boolean expression to compare columns of type "project_status_enum". All fields are combined with logical 'AND'. */
export type ProjectStatusEnumComparisonExp = {
  _eq?: InputMaybe<ProjectStatusEnum>;
  _in?: InputMaybe<Array<ProjectStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ProjectStatusEnum>;
  _nin?: InputMaybe<Array<ProjectStatusEnum>>;
};

/** input type for inserting data into table "project_status" */
export type ProjectStatusInsertInput = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ProjectStatusMaxFields = {
  __typename?: 'project_status_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ProjectStatusMinFields = {
  __typename?: 'project_status_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "project_status" */
export type ProjectStatusMutationResponse = {
  __typename?: 'project_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectStatus>;
};

/** on_conflict condition type for table "project_status" */
export type ProjectStatusOnConflict = {
  constraint: ProjectStatusConstraint;
  update_columns?: Array<ProjectStatusUpdateColumn>;
  where?: InputMaybe<ProjectStatusBoolExp>;
};

/** Ordering options when selecting data from "project_status". */
export type ProjectStatusOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project_status */
export type ProjectStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "project_status" */
export enum ProjectStatusSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "project_status" */
export type ProjectStatusSetInput = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "project_status" */
export type ProjectStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ProjectStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectStatusStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "project_status" */
export enum ProjectStatusUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type ProjectStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectStatusSetInput>;
  where: ProjectStatusBoolExp;
};

/** Streaming cursor of the table "project" */
export type ProjectStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ProjectStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "project" */
export enum ProjectUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ProjectUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectSetInput>;
  where: ProjectBoolExp;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "family" */
  family: Array<Family>;
  /** fetch aggregated fields from the table: "family" */
  family_aggregate: FamilyAggregate;
  /** fetch data from the table: "family" using primary key columns */
  family_by_pk?: Maybe<Family>;
  /** fetch data from the table: "family_severity" */
  family_severity: Array<FamilySeverity>;
  /** fetch aggregated fields from the table: "family_severity" */
  family_severity_aggregate: FamilySeverityAggregate;
  /** fetch data from the table: "family_severity" using primary key columns */
  family_severity_by_pk?: Maybe<FamilySeverity>;
  /** fetch data from the table: "family_status" */
  family_status: Array<FamilyStatus>;
  /** fetch aggregated fields from the table: "family_status" */
  family_status_aggregate: FamilyStatusAggregate;
  /** fetch data from the table: "family_status" using primary key columns */
  family_status_by_pk?: Maybe<FamilyStatus>;
  /** fetch data from the table: "householder" */
  householder: Array<Householder>;
  /** fetch aggregated fields from the table: "householder" */
  householder_aggregate: HouseholderAggregate;
  /** fetch data from the table: "householder" using primary key columns */
  householder_by_pk?: Maybe<Householder>;
  /** fetch data from the table: "householder_status" */
  householder_status: Array<HouseholderStatus>;
  /** fetch aggregated fields from the table: "householder_status" */
  householder_status_aggregate: HouseholderStatusAggregate;
  /** fetch data from the table: "householder_status" using primary key columns */
  householder_status_by_pk?: Maybe<HouseholderStatus>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: MemberAggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: ProjectAggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "project_status" */
  project_status: Array<ProjectStatus>;
  /** fetch aggregated fields from the table: "project_status" */
  project_status_aggregate: ProjectStatusAggregate;
  /** fetch data from the table: "project_status" using primary key columns */
  project_status_by_pk?: Maybe<ProjectStatus>;
};


export type QueryRootFamilyArgs = {
  distinct_on?: InputMaybe<Array<FamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyOrderBy>>;
  where?: InputMaybe<FamilyBoolExp>;
};


export type QueryRootFamilyAggregateArgs = {
  distinct_on?: InputMaybe<Array<FamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyOrderBy>>;
  where?: InputMaybe<FamilyBoolExp>;
};


export type QueryRootFamilyByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootFamilySeverityArgs = {
  distinct_on?: InputMaybe<Array<FamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilySeverityOrderBy>>;
  where?: InputMaybe<FamilySeverityBoolExp>;
};


export type QueryRootFamilySeverityAggregateArgs = {
  distinct_on?: InputMaybe<Array<FamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilySeverityOrderBy>>;
  where?: InputMaybe<FamilySeverityBoolExp>;
};


export type QueryRootFamilySeverityByPkArgs = {
  value: Scalars['String'];
};


export type QueryRootFamilyStatusArgs = {
  distinct_on?: InputMaybe<Array<FamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyStatusOrderBy>>;
  where?: InputMaybe<FamilyStatusBoolExp>;
};


export type QueryRootFamilyStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<FamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyStatusOrderBy>>;
  where?: InputMaybe<FamilyStatusBoolExp>;
};


export type QueryRootFamilyStatusByPkArgs = {
  value: Scalars['String'];
};


export type QueryRootHouseholderArgs = {
  distinct_on?: InputMaybe<Array<HouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderOrderBy>>;
  where?: InputMaybe<HouseholderBoolExp>;
};


export type QueryRootHouseholderAggregateArgs = {
  distinct_on?: InputMaybe<Array<HouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderOrderBy>>;
  where?: InputMaybe<HouseholderBoolExp>;
};


export type QueryRootHouseholderByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootHouseholderStatusArgs = {
  distinct_on?: InputMaybe<Array<HouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderStatusOrderBy>>;
  where?: InputMaybe<HouseholderStatusBoolExp>;
};


export type QueryRootHouseholderStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<HouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderStatusOrderBy>>;
  where?: InputMaybe<HouseholderStatusBoolExp>;
};


export type QueryRootHouseholderStatusByPkArgs = {
  value: Scalars['String'];
};


export type QueryRootMemberArgs = {
  distinct_on?: InputMaybe<Array<MemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemberOrderBy>>;
  where?: InputMaybe<MemberBoolExp>;
};


export type QueryRootMemberAggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemberOrderBy>>;
  where?: InputMaybe<MemberBoolExp>;
};


export type QueryRootMemberByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootProjectArgs = {
  distinct_on?: InputMaybe<Array<ProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectOrderBy>>;
  where?: InputMaybe<ProjectBoolExp>;
};


export type QueryRootProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectOrderBy>>;
  where?: InputMaybe<ProjectBoolExp>;
};


export type QueryRootProjectByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootProjectStatusArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatusOrderBy>>;
  where?: InputMaybe<ProjectStatusBoolExp>;
};


export type QueryRootProjectStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatusOrderBy>>;
  where?: InputMaybe<ProjectStatusBoolExp>;
};


export type QueryRootProjectStatusByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "family" */
  family: Array<Family>;
  /** fetch aggregated fields from the table: "family" */
  family_aggregate: FamilyAggregate;
  /** fetch data from the table: "family" using primary key columns */
  family_by_pk?: Maybe<Family>;
  /** fetch data from the table: "family_severity" */
  family_severity: Array<FamilySeverity>;
  /** fetch aggregated fields from the table: "family_severity" */
  family_severity_aggregate: FamilySeverityAggregate;
  /** fetch data from the table: "family_severity" using primary key columns */
  family_severity_by_pk?: Maybe<FamilySeverity>;
  /** fetch data from the table in a streaming manner: "family_severity" */
  family_severity_stream: Array<FamilySeverity>;
  /** fetch data from the table: "family_status" */
  family_status: Array<FamilyStatus>;
  /** fetch aggregated fields from the table: "family_status" */
  family_status_aggregate: FamilyStatusAggregate;
  /** fetch data from the table: "family_status" using primary key columns */
  family_status_by_pk?: Maybe<FamilyStatus>;
  /** fetch data from the table in a streaming manner: "family_status" */
  family_status_stream: Array<FamilyStatus>;
  /** fetch data from the table in a streaming manner: "family" */
  family_stream: Array<Family>;
  /** fetch data from the table: "householder" */
  householder: Array<Householder>;
  /** fetch aggregated fields from the table: "householder" */
  householder_aggregate: HouseholderAggregate;
  /** fetch data from the table: "householder" using primary key columns */
  householder_by_pk?: Maybe<Householder>;
  /** fetch data from the table: "householder_status" */
  householder_status: Array<HouseholderStatus>;
  /** fetch aggregated fields from the table: "householder_status" */
  householder_status_aggregate: HouseholderStatusAggregate;
  /** fetch data from the table: "householder_status" using primary key columns */
  householder_status_by_pk?: Maybe<HouseholderStatus>;
  /** fetch data from the table in a streaming manner: "householder_status" */
  householder_status_stream: Array<HouseholderStatus>;
  /** fetch data from the table in a streaming manner: "householder" */
  householder_stream: Array<Householder>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: MemberAggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table in a streaming manner: "member" */
  member_stream: Array<Member>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: ProjectAggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "project_status" */
  project_status: Array<ProjectStatus>;
  /** fetch aggregated fields from the table: "project_status" */
  project_status_aggregate: ProjectStatusAggregate;
  /** fetch data from the table: "project_status" using primary key columns */
  project_status_by_pk?: Maybe<ProjectStatus>;
  /** fetch data from the table in a streaming manner: "project_status" */
  project_status_stream: Array<ProjectStatus>;
  /** fetch data from the table in a streaming manner: "project" */
  project_stream: Array<Project>;
};


export type SubscriptionRootFamilyArgs = {
  distinct_on?: InputMaybe<Array<FamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyOrderBy>>;
  where?: InputMaybe<FamilyBoolExp>;
};


export type SubscriptionRootFamilyAggregateArgs = {
  distinct_on?: InputMaybe<Array<FamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyOrderBy>>;
  where?: InputMaybe<FamilyBoolExp>;
};


export type SubscriptionRootFamilyByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootFamilySeverityArgs = {
  distinct_on?: InputMaybe<Array<FamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilySeverityOrderBy>>;
  where?: InputMaybe<FamilySeverityBoolExp>;
};


export type SubscriptionRootFamilySeverityAggregateArgs = {
  distinct_on?: InputMaybe<Array<FamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilySeverityOrderBy>>;
  where?: InputMaybe<FamilySeverityBoolExp>;
};


export type SubscriptionRootFamilySeverityByPkArgs = {
  value: Scalars['String'];
};


export type SubscriptionRootFamilySeverityStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FamilySeverityStreamCursorInput>>;
  where?: InputMaybe<FamilySeverityBoolExp>;
};


export type SubscriptionRootFamilyStatusArgs = {
  distinct_on?: InputMaybe<Array<FamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyStatusOrderBy>>;
  where?: InputMaybe<FamilyStatusBoolExp>;
};


export type SubscriptionRootFamilyStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<FamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FamilyStatusOrderBy>>;
  where?: InputMaybe<FamilyStatusBoolExp>;
};


export type SubscriptionRootFamilyStatusByPkArgs = {
  value: Scalars['String'];
};


export type SubscriptionRootFamilyStatusStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FamilyStatusStreamCursorInput>>;
  where?: InputMaybe<FamilyStatusBoolExp>;
};


export type SubscriptionRootFamilyStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FamilyStreamCursorInput>>;
  where?: InputMaybe<FamilyBoolExp>;
};


export type SubscriptionRootHouseholderArgs = {
  distinct_on?: InputMaybe<Array<HouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderOrderBy>>;
  where?: InputMaybe<HouseholderBoolExp>;
};


export type SubscriptionRootHouseholderAggregateArgs = {
  distinct_on?: InputMaybe<Array<HouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderOrderBy>>;
  where?: InputMaybe<HouseholderBoolExp>;
};


export type SubscriptionRootHouseholderByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootHouseholderStatusArgs = {
  distinct_on?: InputMaybe<Array<HouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderStatusOrderBy>>;
  where?: InputMaybe<HouseholderStatusBoolExp>;
};


export type SubscriptionRootHouseholderStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<HouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HouseholderStatusOrderBy>>;
  where?: InputMaybe<HouseholderStatusBoolExp>;
};


export type SubscriptionRootHouseholderStatusByPkArgs = {
  value: Scalars['String'];
};


export type SubscriptionRootHouseholderStatusStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<HouseholderStatusStreamCursorInput>>;
  where?: InputMaybe<HouseholderStatusBoolExp>;
};


export type SubscriptionRootHouseholderStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<HouseholderStreamCursorInput>>;
  where?: InputMaybe<HouseholderBoolExp>;
};


export type SubscriptionRootMemberArgs = {
  distinct_on?: InputMaybe<Array<MemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemberOrderBy>>;
  where?: InputMaybe<MemberBoolExp>;
};


export type SubscriptionRootMemberAggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemberOrderBy>>;
  where?: InputMaybe<MemberBoolExp>;
};


export type SubscriptionRootMemberByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootMemberStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MemberStreamCursorInput>>;
  where?: InputMaybe<MemberBoolExp>;
};


export type SubscriptionRootProjectArgs = {
  distinct_on?: InputMaybe<Array<ProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectOrderBy>>;
  where?: InputMaybe<ProjectBoolExp>;
};


export type SubscriptionRootProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectOrderBy>>;
  where?: InputMaybe<ProjectBoolExp>;
};


export type SubscriptionRootProjectByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootProjectStatusArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatusOrderBy>>;
  where?: InputMaybe<ProjectStatusBoolExp>;
};


export type SubscriptionRootProjectStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatusOrderBy>>;
  where?: InputMaybe<ProjectStatusBoolExp>;
};


export type SubscriptionRootProjectStatusByPkArgs = {
  value: Scalars['String'];
};


export type SubscriptionRootProjectStatusStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProjectStatusStreamCursorInput>>;
  where?: InputMaybe<ProjectStatusBoolExp>;
};


export type SubscriptionRootProjectStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProjectStreamCursorInput>>;
  where?: InputMaybe<ProjectBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CreateFamilyMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateFamilyMutation = { __typename?: 'mutation_root', insert_family_one?: { __typename?: 'family', id: any, code?: string | null, name: string } | null };

export type CreateProjectMutationVariables = Exact<{
  input: ProjectInsertInput;
}>;


export type CreateProjectMutation = { __typename?: 'mutation_root', insert_project_one?: { __typename?: 'project', id: any, name: string, description?: string | null, status: ProjectStatusEnum } | null };

export type FamilyQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type FamilyQuery = { __typename?: 'query_root', family_by_pk?: { __typename?: 'family', id: any, name: string, status: FamilyStatusEnum, severity: FamilySeverityEnum, code?: string | null } | null };

export type FamilyListQueryVariables = Exact<{ [key: string]: never; }>;


export type FamilyListQuery = { __typename?: 'query_root', family: Array<{ __typename?: 'family', id: any, name: string, severity: FamilySeverityEnum, status: FamilyStatusEnum }> };


export const CreateFamilyDocument = gql`
    mutation CreateFamily($name: String!) {
  insert_family_one(object: {name: $name}) {
    id
    code
    name
  }
}
    `;
export type CreateFamilyMutationFn = Apollo.MutationFunction<CreateFamilyMutation, CreateFamilyMutationVariables>;

/**
 * __useCreateFamilyMutation__
 *
 * To run a mutation, you first call `useCreateFamilyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFamilyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFamilyMutation, { data, loading, error }] = useCreateFamilyMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateFamilyMutation(baseOptions?: Apollo.MutationHookOptions<CreateFamilyMutation, CreateFamilyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFamilyMutation, CreateFamilyMutationVariables>(CreateFamilyDocument, options);
      }
export type CreateFamilyMutationHookResult = ReturnType<typeof useCreateFamilyMutation>;
export type CreateFamilyMutationResult = Apollo.MutationResult<CreateFamilyMutation>;
export type CreateFamilyMutationOptions = Apollo.BaseMutationOptions<CreateFamilyMutation, CreateFamilyMutationVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($input: project_insert_input!) {
  insert_project_one(object: $input) {
    id
    name
    description
    status
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const FamilyDocument = gql`
    query Family($id: uuid!) {
  family_by_pk(id: $id) {
    id
    name
    status
    severity
    code
  }
}
    `;

/**
 * __useFamilyQuery__
 *
 * To run a query within a React component, call `useFamilyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamilyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamilyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFamilyQuery(baseOptions: Apollo.QueryHookOptions<FamilyQuery, FamilyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamilyQuery, FamilyQueryVariables>(FamilyDocument, options);
      }
export function useFamilyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamilyQuery, FamilyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamilyQuery, FamilyQueryVariables>(FamilyDocument, options);
        }
export type FamilyQueryHookResult = ReturnType<typeof useFamilyQuery>;
export type FamilyLazyQueryHookResult = ReturnType<typeof useFamilyLazyQuery>;
export type FamilyQueryResult = Apollo.QueryResult<FamilyQuery, FamilyQueryVariables>;
export const FamilyListDocument = gql`
    query FamilyList {
  family {
    id
    name
    severity
    status
  }
}
    `;

/**
 * __useFamilyListQuery__
 *
 * To run a query within a React component, call `useFamilyListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFamilyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFamilyListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFamilyListQuery(baseOptions?: Apollo.QueryHookOptions<FamilyListQuery, FamilyListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FamilyListQuery, FamilyListQueryVariables>(FamilyListDocument, options);
      }
export function useFamilyListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FamilyListQuery, FamilyListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FamilyListQuery, FamilyListQueryVariables>(FamilyListDocument, options);
        }
export type FamilyListQueryHookResult = ReturnType<typeof useFamilyListQuery>;
export type FamilyListLazyQueryHookResult = ReturnType<typeof useFamilyListLazyQuery>;
export type FamilyListQueryResult = Apollo.QueryResult<FamilyListQuery, FamilyListQueryVariables>;