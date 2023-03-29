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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: string;
  timestamptz: any;
  uuid: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type ApiIntComparisonExp = {
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
export type ApiStringComparisonExp = {
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

/** columns and relationships of "city" */
export type ApiCity = {
  __typename?: 'city';
  value: Scalars['String'];
};

/** aggregated selection of "city" */
export type ApiCityAggregate = {
  __typename?: 'city_aggregate';
  aggregate?: Maybe<ApiCityAggregateFields>;
  nodes: Array<ApiCity>;
};

/** aggregate fields of "city" */
export type ApiCityAggregateFields = {
  __typename?: 'city_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiCityMaxFields>;
  min?: Maybe<ApiCityMinFields>;
};


/** aggregate fields of "city" */
export type ApiCityAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiCitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "city". All fields are combined with a logical 'AND'. */
export type ApiCityBoolExp = {
  _and?: InputMaybe<Array<ApiCityBoolExp>>;
  _not?: InputMaybe<ApiCityBoolExp>;
  _or?: InputMaybe<Array<ApiCityBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "city" */
export enum ApiCityConstraint {
  /** unique or primary key constraint */
  CityPkey = 'city_pkey'
}

export enum ApiCityEnum {
  Tehran = 'tehran',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "city_enum". All fields are combined with logical 'AND'. */
export type ApiCityEnumComparisonExp = {
  _eq?: InputMaybe<ApiCityEnum>;
  _in?: InputMaybe<Array<ApiCityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiCityEnum>;
  _nin?: InputMaybe<Array<ApiCityEnum>>;
};

/** input type for inserting data into table "city" */
export type ApiCityInsertInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiCityMaxFields = {
  __typename?: 'city_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiCityMinFields = {
  __typename?: 'city_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "city" */
export type ApiCityMutationResponse = {
  __typename?: 'city_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiCity>;
};

/** on_conflict condition type for table "city" */
export type ApiCityOnConflict = {
  constraint: ApiCityConstraint;
  update_columns?: Array<ApiCityUpdateColumn>;
  where?: InputMaybe<ApiCityBoolExp>;
};

/** Ordering options when selecting data from "city". */
export type ApiCityOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: city */
export type ApiCityPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "city" */
export enum ApiCitySelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "city" */
export type ApiCitySetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "city" */
export enum ApiCityUpdateColumn {
  /** column name */
  Value = 'value'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type ApiDateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "family" */
export type ApiFamily = {
  __typename?: 'family';
  /** A computed field, executes function "format_code" */
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  db_code: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  severity: ApiFamilySeverityEnum;
  status: ApiFamilyStatusEnum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "family" */
export type ApiFamilyAggregate = {
  __typename?: 'family_aggregate';
  aggregate?: Maybe<ApiFamilyAggregateFields>;
  nodes: Array<ApiFamily>;
};

/** aggregate fields of "family" */
export type ApiFamilyAggregateFields = {
  __typename?: 'family_aggregate_fields';
  avg?: Maybe<ApiFamilyAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ApiFamilyMaxFields>;
  min?: Maybe<ApiFamilyMinFields>;
  stddev?: Maybe<ApiFamilyStddevFields>;
  stddev_pop?: Maybe<ApiFamilyStddevPopFields>;
  stddev_samp?: Maybe<ApiFamilyStddevSampFields>;
  sum?: Maybe<ApiFamilySumFields>;
  var_pop?: Maybe<ApiFamilyVarPopFields>;
  var_samp?: Maybe<ApiFamilyVarSampFields>;
  variance?: Maybe<ApiFamilyVarianceFields>;
};


/** aggregate fields of "family" */
export type ApiFamilyAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiFamilySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ApiFamilyAvgFields = {
  __typename?: 'family_avg_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "family". All fields are combined with a logical 'AND'. */
export type ApiFamilyBoolExp = {
  _and?: InputMaybe<Array<ApiFamilyBoolExp>>;
  _not?: InputMaybe<ApiFamilyBoolExp>;
  _or?: InputMaybe<Array<ApiFamilyBoolExp>>;
  code?: InputMaybe<ApiStringComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  db_code?: InputMaybe<ApiIntComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  severity?: InputMaybe<ApiFamilySeverityEnumComparisonExp>;
  status?: InputMaybe<ApiFamilyStatusEnumComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "family" */
export enum ApiFamilyConstraint {
  /** unique or primary key constraint */
  FamilyCodeKey = 'family_code_key',
  /** unique or primary key constraint */
  FamilyPkey = 'family_pkey'
}

/** input type for incrementing numeric columns in table "family" */
export type ApiFamilyIncInput = {
  db_code?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "family" */
export type ApiFamilyInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  db_code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<ApiFamilySeverityEnum>;
  status?: InputMaybe<ApiFamilyStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ApiFamilyMaxFields = {
  __typename?: 'family_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  db_code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ApiFamilyMinFields = {
  __typename?: 'family_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  db_code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "family" */
export type ApiFamilyMutationResponse = {
  __typename?: 'family_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiFamily>;
};

/** input type for inserting object relation for remote table "family" */
export type ApiFamilyObjRelInsertInput = {
  data: ApiFamilyInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiFamilyOnConflict>;
};

/** on_conflict condition type for table "family" */
export type ApiFamilyOnConflict = {
  constraint: ApiFamilyConstraint;
  update_columns?: Array<ApiFamilyUpdateColumn>;
  where?: InputMaybe<ApiFamilyBoolExp>;
};

/** Ordering options when selecting data from "family". */
export type ApiFamilyOrderBy = {
  code?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  db_code?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  severity?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: family */
export type ApiFamilyPkColumnsInput = {
  id: Scalars['uuid'];
};

/**
 * Relation between projects and families
 *
 *
 * columns and relationships of "family_project"
 *
 */
export type ApiFamilyProject = {
  __typename?: 'family_project';
  count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  family: ApiFamily;
  family_id: Scalars['uuid'];
  /** An object relationship */
  project: ApiProject;
  project_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "family_project" */
export type ApiFamilyProjectAggregate = {
  __typename?: 'family_project_aggregate';
  aggregate?: Maybe<ApiFamilyProjectAggregateFields>;
  nodes: Array<ApiFamilyProject>;
};

/** aggregate fields of "family_project" */
export type ApiFamilyProjectAggregateFields = {
  __typename?: 'family_project_aggregate_fields';
  avg?: Maybe<ApiFamilyProjectAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ApiFamilyProjectMaxFields>;
  min?: Maybe<ApiFamilyProjectMinFields>;
  stddev?: Maybe<ApiFamilyProjectStddevFields>;
  stddev_pop?: Maybe<ApiFamilyProjectStddevPopFields>;
  stddev_samp?: Maybe<ApiFamilyProjectStddevSampFields>;
  sum?: Maybe<ApiFamilyProjectSumFields>;
  var_pop?: Maybe<ApiFamilyProjectVarPopFields>;
  var_samp?: Maybe<ApiFamilyProjectVarSampFields>;
  variance?: Maybe<ApiFamilyProjectVarianceFields>;
};


/** aggregate fields of "family_project" */
export type ApiFamilyProjectAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "family_project" */
export type ApiFamilyProjectAggregateOrderBy = {
  avg?: InputMaybe<ApiFamilyProjectAvgOrderBy>;
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiFamilyProjectMaxOrderBy>;
  min?: InputMaybe<ApiFamilyProjectMinOrderBy>;
  stddev?: InputMaybe<ApiFamilyProjectStddevOrderBy>;
  stddev_pop?: InputMaybe<ApiFamilyProjectStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ApiFamilyProjectStddevSampOrderBy>;
  sum?: InputMaybe<ApiFamilyProjectSumOrderBy>;
  var_pop?: InputMaybe<ApiFamilyProjectVarPopOrderBy>;
  var_samp?: InputMaybe<ApiFamilyProjectVarSampOrderBy>;
  variance?: InputMaybe<ApiFamilyProjectVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "family_project" */
export type ApiFamilyProjectArrRelInsertInput = {
  data: Array<ApiFamilyProjectInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiFamilyProjectOnConflict>;
};

/** aggregate avg on columns */
export type ApiFamilyProjectAvgFields = {
  __typename?: 'family_project_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "family_project" */
export type ApiFamilyProjectAvgOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** Boolean expression to filter rows from the table "family_project". All fields are combined with a logical 'AND'. */
export type ApiFamilyProjectBoolExp = {
  _and?: InputMaybe<Array<ApiFamilyProjectBoolExp>>;
  _not?: InputMaybe<ApiFamilyProjectBoolExp>;
  _or?: InputMaybe<Array<ApiFamilyProjectBoolExp>>;
  count?: InputMaybe<ApiIntComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  family?: InputMaybe<ApiFamilyBoolExp>;
  family_id?: InputMaybe<ApiUuidComparisonExp>;
  project?: InputMaybe<ApiProjectBoolExp>;
  project_id?: InputMaybe<ApiUuidComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "family_project" */
export enum ApiFamilyProjectConstraint {
  /** unique or primary key constraint */
  FamilyProjectPkey = 'family_project_pkey'
}

/** input type for incrementing numeric columns in table "family_project" */
export type ApiFamilyProjectIncInput = {
  count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "family_project" */
export type ApiFamilyProjectInsertInput = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  family?: InputMaybe<ApiFamilyObjRelInsertInput>;
  family_id?: InputMaybe<Scalars['uuid']>;
  project?: InputMaybe<ApiProjectObjRelInsertInput>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ApiFamilyProjectMaxFields = {
  __typename?: 'family_project_max_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  family_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "family_project" */
export type ApiFamilyProjectMaxOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  family_id?: InputMaybe<ApiOrderBy>;
  project_id?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiFamilyProjectMinFields = {
  __typename?: 'family_project_min_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  family_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "family_project" */
export type ApiFamilyProjectMinOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  family_id?: InputMaybe<ApiOrderBy>;
  project_id?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "family_project" */
export type ApiFamilyProjectMutationResponse = {
  __typename?: 'family_project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiFamilyProject>;
};

/** on_conflict condition type for table "family_project" */
export type ApiFamilyProjectOnConflict = {
  constraint: ApiFamilyProjectConstraint;
  update_columns?: Array<ApiFamilyProjectUpdateColumn>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};

/** Ordering options when selecting data from "family_project". */
export type ApiFamilyProjectOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  family?: InputMaybe<ApiFamilyOrderBy>;
  family_id?: InputMaybe<ApiOrderBy>;
  project?: InputMaybe<ApiProjectOrderBy>;
  project_id?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: family_project */
export type ApiFamilyProjectPkColumnsInput = {
  family_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};

/** select columns of table "family_project" */
export enum ApiFamilyProjectSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "family_project" */
export type ApiFamilyProjectSetInput = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ApiFamilyProjectStddevFields = {
  __typename?: 'family_project_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "family_project" */
export type ApiFamilyProjectStddevOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate stddev_pop on columns */
export type ApiFamilyProjectStddevPopFields = {
  __typename?: 'family_project_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "family_project" */
export type ApiFamilyProjectStddevPopOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate stddev_samp on columns */
export type ApiFamilyProjectStddevSampFields = {
  __typename?: 'family_project_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "family_project" */
export type ApiFamilyProjectStddevSampOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate sum on columns */
export type ApiFamilyProjectSumFields = {
  __typename?: 'family_project_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "family_project" */
export type ApiFamilyProjectSumOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** update columns of table "family_project" */
export enum ApiFamilyProjectUpdateColumn {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type ApiFamilyProjectVarPopFields = {
  __typename?: 'family_project_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "family_project" */
export type ApiFamilyProjectVarPopOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate var_samp on columns */
export type ApiFamilyProjectVarSampFields = {
  __typename?: 'family_project_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "family_project" */
export type ApiFamilyProjectVarSampOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate variance on columns */
export type ApiFamilyProjectVarianceFields = {
  __typename?: 'family_project_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "family_project" */
export type ApiFamilyProjectVarianceOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** select columns of table "family" */
export enum ApiFamilySelectColumn {
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
export type ApiFamilySetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  db_code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<ApiFamilySeverityEnum>;
  status?: InputMaybe<ApiFamilyStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "family_severity" */
export type ApiFamilySeverity = {
  __typename?: 'family_severity';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "family_severity" */
export type ApiFamilySeverityAggregate = {
  __typename?: 'family_severity_aggregate';
  aggregate?: Maybe<ApiFamilySeverityAggregateFields>;
  nodes: Array<ApiFamilySeverity>;
};

/** aggregate fields of "family_severity" */
export type ApiFamilySeverityAggregateFields = {
  __typename?: 'family_severity_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiFamilySeverityMaxFields>;
  min?: Maybe<ApiFamilySeverityMinFields>;
};


/** aggregate fields of "family_severity" */
export type ApiFamilySeverityAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiFamilySeveritySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "family_severity". All fields are combined with a logical 'AND'. */
export type ApiFamilySeverityBoolExp = {
  _and?: InputMaybe<Array<ApiFamilySeverityBoolExp>>;
  _not?: InputMaybe<ApiFamilySeverityBoolExp>;
  _or?: InputMaybe<Array<ApiFamilySeverityBoolExp>>;
  description?: InputMaybe<ApiStringComparisonExp>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "family_severity" */
export enum ApiFamilySeverityConstraint {
  /** unique or primary key constraint */
  FamilySeverityPkey = 'family_severity_pkey'
}

export enum ApiFamilySeverityEnum {
  Critical = 'Critical',
  Normal = 'Normal'
}

/** Boolean expression to compare columns of type "family_severity_enum". All fields are combined with logical 'AND'. */
export type ApiFamilySeverityEnumComparisonExp = {
  _eq?: InputMaybe<ApiFamilySeverityEnum>;
  _in?: InputMaybe<Array<ApiFamilySeverityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiFamilySeverityEnum>;
  _nin?: InputMaybe<Array<ApiFamilySeverityEnum>>;
};

/** input type for inserting data into table "family_severity" */
export type ApiFamilySeverityInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiFamilySeverityMaxFields = {
  __typename?: 'family_severity_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiFamilySeverityMinFields = {
  __typename?: 'family_severity_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "family_severity" */
export type ApiFamilySeverityMutationResponse = {
  __typename?: 'family_severity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiFamilySeverity>;
};

/** on_conflict condition type for table "family_severity" */
export type ApiFamilySeverityOnConflict = {
  constraint: ApiFamilySeverityConstraint;
  update_columns?: Array<ApiFamilySeverityUpdateColumn>;
  where?: InputMaybe<ApiFamilySeverityBoolExp>;
};

/** Ordering options when selecting data from "family_severity". */
export type ApiFamilySeverityOrderBy = {
  description?: InputMaybe<ApiOrderBy>;
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: family_severity */
export type ApiFamilySeverityPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "family_severity" */
export enum ApiFamilySeveritySelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "family_severity" */
export type ApiFamilySeveritySetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "family_severity" */
export enum ApiFamilySeverityUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "family_status" */
export type ApiFamilyStatus = {
  __typename?: 'family_status';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "family_status" */
export type ApiFamilyStatusAggregate = {
  __typename?: 'family_status_aggregate';
  aggregate?: Maybe<ApiFamilyStatusAggregateFields>;
  nodes: Array<ApiFamilyStatus>;
};

/** aggregate fields of "family_status" */
export type ApiFamilyStatusAggregateFields = {
  __typename?: 'family_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiFamilyStatusMaxFields>;
  min?: Maybe<ApiFamilyStatusMinFields>;
};


/** aggregate fields of "family_status" */
export type ApiFamilyStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiFamilyStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "family_status". All fields are combined with a logical 'AND'. */
export type ApiFamilyStatusBoolExp = {
  _and?: InputMaybe<Array<ApiFamilyStatusBoolExp>>;
  _not?: InputMaybe<ApiFamilyStatusBoolExp>;
  _or?: InputMaybe<Array<ApiFamilyStatusBoolExp>>;
  description?: InputMaybe<ApiStringComparisonExp>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "family_status" */
export enum ApiFamilyStatusConstraint {
  /** unique or primary key constraint */
  FamilyStatusPkey = 'family_status_pkey'
}

export enum ApiFamilyStatusEnum {
  Completed = 'Completed',
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "family_status_enum". All fields are combined with logical 'AND'. */
export type ApiFamilyStatusEnumComparisonExp = {
  _eq?: InputMaybe<ApiFamilyStatusEnum>;
  _in?: InputMaybe<Array<ApiFamilyStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiFamilyStatusEnum>;
  _nin?: InputMaybe<Array<ApiFamilyStatusEnum>>;
};

/** input type for inserting data into table "family_status" */
export type ApiFamilyStatusInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiFamilyStatusMaxFields = {
  __typename?: 'family_status_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiFamilyStatusMinFields = {
  __typename?: 'family_status_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "family_status" */
export type ApiFamilyStatusMutationResponse = {
  __typename?: 'family_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiFamilyStatus>;
};

/** on_conflict condition type for table "family_status" */
export type ApiFamilyStatusOnConflict = {
  constraint: ApiFamilyStatusConstraint;
  update_columns?: Array<ApiFamilyStatusUpdateColumn>;
  where?: InputMaybe<ApiFamilyStatusBoolExp>;
};

/** Ordering options when selecting data from "family_status". */
export type ApiFamilyStatusOrderBy = {
  description?: InputMaybe<ApiOrderBy>;
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: family_status */
export type ApiFamilyStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "family_status" */
export enum ApiFamilyStatusSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "family_status" */
export type ApiFamilyStatusSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "family_status" */
export enum ApiFamilyStatusUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type ApiFamilyStddevFields = {
  __typename?: 'family_stddev_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ApiFamilyStddevPopFields = {
  __typename?: 'family_stddev_pop_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ApiFamilyStddevSampFields = {
  __typename?: 'family_stddev_samp_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type ApiFamilySumFields = {
  __typename?: 'family_sum_fields';
  db_code?: Maybe<Scalars['Int']>;
};

/** update columns of table "family" */
export enum ApiFamilyUpdateColumn {
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

/** aggregate var_pop on columns */
export type ApiFamilyVarPopFields = {
  __typename?: 'family_var_pop_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ApiFamilyVarSampFields = {
  __typename?: 'family_var_samp_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ApiFamilyVarianceFields = {
  __typename?: 'family_variance_fields';
  db_code?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "gender" */
export type ApiGender = {
  __typename?: 'gender';
  value: Scalars['String'];
};

/** aggregated selection of "gender" */
export type ApiGenderAggregate = {
  __typename?: 'gender_aggregate';
  aggregate?: Maybe<ApiGenderAggregateFields>;
  nodes: Array<ApiGender>;
};

/** aggregate fields of "gender" */
export type ApiGenderAggregateFields = {
  __typename?: 'gender_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiGenderMaxFields>;
  min?: Maybe<ApiGenderMinFields>;
};


/** aggregate fields of "gender" */
export type ApiGenderAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiGenderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "gender". All fields are combined with a logical 'AND'. */
export type ApiGenderBoolExp = {
  _and?: InputMaybe<Array<ApiGenderBoolExp>>;
  _not?: InputMaybe<ApiGenderBoolExp>;
  _or?: InputMaybe<Array<ApiGenderBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "gender" */
export enum ApiGenderConstraint {
  /** unique or primary key constraint */
  GenderPkey = 'gender_pkey'
}

export enum ApiGenderEnum {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "gender_enum". All fields are combined with logical 'AND'. */
export type ApiGenderEnumComparisonExp = {
  _eq?: InputMaybe<ApiGenderEnum>;
  _in?: InputMaybe<Array<ApiGenderEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiGenderEnum>;
  _nin?: InputMaybe<Array<ApiGenderEnum>>;
};

/** input type for inserting data into table "gender" */
export type ApiGenderInsertInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiGenderMaxFields = {
  __typename?: 'gender_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiGenderMinFields = {
  __typename?: 'gender_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "gender" */
export type ApiGenderMutationResponse = {
  __typename?: 'gender_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiGender>;
};

/** on_conflict condition type for table "gender" */
export type ApiGenderOnConflict = {
  constraint: ApiGenderConstraint;
  update_columns?: Array<ApiGenderUpdateColumn>;
  where?: InputMaybe<ApiGenderBoolExp>;
};

/** Ordering options when selecting data from "gender". */
export type ApiGenderOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: gender */
export type ApiGenderPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "gender" */
export enum ApiGenderSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "gender" */
export type ApiGenderSetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "gender" */
export enum ApiGenderUpdateColumn {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "householder" */
export type ApiHouseholder = {
  __typename?: 'householder';
  city?: Maybe<ApiCityEnum>;
  created_at: Scalars['timestamptz'];
  dob?: Maybe<Scalars['date']>;
  family_id: Scalars['uuid'];
  father_name?: Maybe<Scalars['String']>;
  gender?: Maybe<ApiGenderEnum>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  national_id?: Maybe<Scalars['String']>;
  nationality?: Maybe<ApiNationalityEnum>;
  religion?: Maybe<ApiReligionEnum>;
  status: ApiHouseholderStatusEnum;
  surname?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "householder" */
export type ApiHouseholderAggregate = {
  __typename?: 'householder_aggregate';
  aggregate?: Maybe<ApiHouseholderAggregateFields>;
  nodes: Array<ApiHouseholder>;
};

/** aggregate fields of "householder" */
export type ApiHouseholderAggregateFields = {
  __typename?: 'householder_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiHouseholderMaxFields>;
  min?: Maybe<ApiHouseholderMinFields>;
};


/** aggregate fields of "householder" */
export type ApiHouseholderAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "householder". All fields are combined with a logical 'AND'. */
export type ApiHouseholderBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholderBoolExp>>;
  _not?: InputMaybe<ApiHouseholderBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholderBoolExp>>;
  city?: InputMaybe<ApiCityEnumComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  dob?: InputMaybe<ApiDateComparisonExp>;
  family_id?: InputMaybe<ApiUuidComparisonExp>;
  father_name?: InputMaybe<ApiStringComparisonExp>;
  gender?: InputMaybe<ApiGenderEnumComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  national_id?: InputMaybe<ApiStringComparisonExp>;
  nationality?: InputMaybe<ApiNationalityEnumComparisonExp>;
  religion?: InputMaybe<ApiReligionEnumComparisonExp>;
  status?: InputMaybe<ApiHouseholderStatusEnumComparisonExp>;
  surname?: InputMaybe<ApiStringComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "householder" */
export enum ApiHouseholderConstraint {
  /** unique or primary key constraint */
  HouseholderFamilyIdKey = 'householder_family_id_key',
  /** unique or primary key constraint */
  HouseholderIdKey = 'householder_id_key',
  /** unique or primary key constraint */
  HouseholderPkey = 'householder_pkey'
}

/** input type for inserting data into table "householder" */
export type ApiHouseholderInsertInput = {
  city?: InputMaybe<ApiCityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dob?: InputMaybe<Scalars['date']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<ApiGenderEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<ApiNationalityEnum>;
  religion?: InputMaybe<ApiReligionEnum>;
  status?: InputMaybe<ApiHouseholderStatusEnum>;
  surname?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ApiHouseholderMaxFields = {
  __typename?: 'householder_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dob?: Maybe<Scalars['date']>;
  family_id?: Maybe<Scalars['uuid']>;
  father_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ApiHouseholderMinFields = {
  __typename?: 'householder_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dob?: Maybe<Scalars['date']>;
  family_id?: Maybe<Scalars['uuid']>;
  father_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "householder" */
export type ApiHouseholderMutationResponse = {
  __typename?: 'householder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHouseholder>;
};

/** on_conflict condition type for table "householder" */
export type ApiHouseholderOnConflict = {
  constraint: ApiHouseholderConstraint;
  update_columns?: Array<ApiHouseholderUpdateColumn>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};

/** Ordering options when selecting data from "householder". */
export type ApiHouseholderOrderBy = {
  city?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  dob?: InputMaybe<ApiOrderBy>;
  family_id?: InputMaybe<ApiOrderBy>;
  father_name?: InputMaybe<ApiOrderBy>;
  gender?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  national_id?: InputMaybe<ApiOrderBy>;
  nationality?: InputMaybe<ApiOrderBy>;
  religion?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  surname?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: householder */
export type ApiHouseholderPkColumnsInput = {
  family_id: Scalars['uuid'];
};

/** select columns of table "householder" */
export enum ApiHouseholderSelectColumn {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Religion = 'religion',
  /** column name */
  Status = 'status',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "householder" */
export type ApiHouseholderSetInput = {
  city?: InputMaybe<ApiCityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dob?: InputMaybe<Scalars['date']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<ApiGenderEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<ApiNationalityEnum>;
  religion?: InputMaybe<ApiReligionEnum>;
  status?: InputMaybe<ApiHouseholderStatusEnum>;
  surname?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "householder_status" */
export type ApiHouseholderStatus = {
  __typename?: 'householder_status';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "householder_status" */
export type ApiHouseholderStatusAggregate = {
  __typename?: 'householder_status_aggregate';
  aggregate?: Maybe<ApiHouseholderStatusAggregateFields>;
  nodes: Array<ApiHouseholderStatus>;
};

/** aggregate fields of "householder_status" */
export type ApiHouseholderStatusAggregateFields = {
  __typename?: 'householder_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiHouseholderStatusMaxFields>;
  min?: Maybe<ApiHouseholderStatusMinFields>;
};


/** aggregate fields of "householder_status" */
export type ApiHouseholderStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholderStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "householder_status". All fields are combined with a logical 'AND'. */
export type ApiHouseholderStatusBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholderStatusBoolExp>>;
  _not?: InputMaybe<ApiHouseholderStatusBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholderStatusBoolExp>>;
  description?: InputMaybe<ApiStringComparisonExp>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "householder_status" */
export enum ApiHouseholderStatusConstraint {
  /** unique or primary key constraint */
  HouseholderStatusPkey = 'householder_status_pkey'
}

export enum ApiHouseholderStatusEnum {
  Completed = 'Completed',
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "householder_status_enum". All fields are combined with logical 'AND'. */
export type ApiHouseholderStatusEnumComparisonExp = {
  _eq?: InputMaybe<ApiHouseholderStatusEnum>;
  _in?: InputMaybe<Array<ApiHouseholderStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiHouseholderStatusEnum>;
  _nin?: InputMaybe<Array<ApiHouseholderStatusEnum>>;
};

/** input type for inserting data into table "householder_status" */
export type ApiHouseholderStatusInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiHouseholderStatusMaxFields = {
  __typename?: 'householder_status_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiHouseholderStatusMinFields = {
  __typename?: 'householder_status_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "householder_status" */
export type ApiHouseholderStatusMutationResponse = {
  __typename?: 'householder_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHouseholderStatus>;
};

/** on_conflict condition type for table "householder_status" */
export type ApiHouseholderStatusOnConflict = {
  constraint: ApiHouseholderStatusConstraint;
  update_columns?: Array<ApiHouseholderStatusUpdateColumn>;
  where?: InputMaybe<ApiHouseholderStatusBoolExp>;
};

/** Ordering options when selecting data from "householder_status". */
export type ApiHouseholderStatusOrderBy = {
  description?: InputMaybe<ApiOrderBy>;
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: householder_status */
export type ApiHouseholderStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "householder_status" */
export enum ApiHouseholderStatusSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "householder_status" */
export type ApiHouseholderStatusSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "householder_status" */
export enum ApiHouseholderStatusUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "householder" */
export enum ApiHouseholderUpdateColumn {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Religion = 'religion',
  /** column name */
  Status = 'status',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "member" */
export type ApiMember = {
  __typename?: 'member';
  created_at: Scalars['timestamptz'];
  dob?: Maybe<Scalars['date']>;
  family_id: Scalars['uuid'];
  father_name?: Maybe<Scalars['String']>;
  gender?: Maybe<ApiGenderEnum>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  national_id?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  status: ApiMemberStatusEnum;
  surname?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "member" */
export type ApiMemberAggregate = {
  __typename?: 'member_aggregate';
  aggregate?: Maybe<ApiMemberAggregateFields>;
  nodes: Array<ApiMember>;
};

/** aggregate fields of "member" */
export type ApiMemberAggregateFields = {
  __typename?: 'member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiMemberMaxFields>;
  min?: Maybe<ApiMemberMinFields>;
};


/** aggregate fields of "member" */
export type ApiMemberAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiMemberSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type ApiMemberBoolExp = {
  _and?: InputMaybe<Array<ApiMemberBoolExp>>;
  _not?: InputMaybe<ApiMemberBoolExp>;
  _or?: InputMaybe<Array<ApiMemberBoolExp>>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  dob?: InputMaybe<ApiDateComparisonExp>;
  family_id?: InputMaybe<ApiUuidComparisonExp>;
  father_name?: InputMaybe<ApiStringComparisonExp>;
  gender?: InputMaybe<ApiGenderEnumComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  national_id?: InputMaybe<ApiStringComparisonExp>;
  nationality?: InputMaybe<ApiStringComparisonExp>;
  religion?: InputMaybe<ApiStringComparisonExp>;
  status?: InputMaybe<ApiMemberStatusEnumComparisonExp>;
  surname?: InputMaybe<ApiStringComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "member" */
export enum ApiMemberConstraint {
  /** unique or primary key constraint */
  MemberPkey = 'member_pkey'
}

/** input type for inserting data into table "member" */
export type ApiMemberInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dob?: InputMaybe<Scalars['date']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<ApiGenderEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ApiMemberStatusEnum>;
  surname?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ApiMemberMaxFields = {
  __typename?: 'member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dob?: Maybe<Scalars['date']>;
  family_id?: Maybe<Scalars['uuid']>;
  father_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ApiMemberMinFields = {
  __typename?: 'member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dob?: Maybe<Scalars['date']>;
  family_id?: Maybe<Scalars['uuid']>;
  father_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "member" */
export type ApiMemberMutationResponse = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiMember>;
};

/** on_conflict condition type for table "member" */
export type ApiMemberOnConflict = {
  constraint: ApiMemberConstraint;
  update_columns?: Array<ApiMemberUpdateColumn>;
  where?: InputMaybe<ApiMemberBoolExp>;
};

/** Ordering options when selecting data from "member". */
export type ApiMemberOrderBy = {
  created_at?: InputMaybe<ApiOrderBy>;
  dob?: InputMaybe<ApiOrderBy>;
  family_id?: InputMaybe<ApiOrderBy>;
  father_name?: InputMaybe<ApiOrderBy>;
  gender?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  national_id?: InputMaybe<ApiOrderBy>;
  nationality?: InputMaybe<ApiOrderBy>;
  religion?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  surname?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: member */
export type ApiMemberPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "member" */
export enum ApiMemberSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Religion = 'religion',
  /** column name */
  Status = 'status',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "member" */
export type ApiMemberSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dob?: InputMaybe<Scalars['date']>;
  family_id?: InputMaybe<Scalars['uuid']>;
  father_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<ApiGenderEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ApiMemberStatusEnum>;
  surname?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "member_status" */
export type ApiMemberStatus = {
  __typename?: 'member_status';
  value: Scalars['String'];
};

/** aggregated selection of "member_status" */
export type ApiMemberStatusAggregate = {
  __typename?: 'member_status_aggregate';
  aggregate?: Maybe<ApiMemberStatusAggregateFields>;
  nodes: Array<ApiMemberStatus>;
};

/** aggregate fields of "member_status" */
export type ApiMemberStatusAggregateFields = {
  __typename?: 'member_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiMemberStatusMaxFields>;
  min?: Maybe<ApiMemberStatusMinFields>;
};


/** aggregate fields of "member_status" */
export type ApiMemberStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiMemberStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "member_status". All fields are combined with a logical 'AND'. */
export type ApiMemberStatusBoolExp = {
  _and?: InputMaybe<Array<ApiMemberStatusBoolExp>>;
  _not?: InputMaybe<ApiMemberStatusBoolExp>;
  _or?: InputMaybe<Array<ApiMemberStatusBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "member_status" */
export enum ApiMemberStatusConstraint {
  /** unique or primary key constraint */
  MemberStatusPkey = 'member_status_pkey'
}

export enum ApiMemberStatusEnum {
  Completed = 'Completed',
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "member_status_enum". All fields are combined with logical 'AND'. */
export type ApiMemberStatusEnumComparisonExp = {
  _eq?: InputMaybe<ApiMemberStatusEnum>;
  _in?: InputMaybe<Array<ApiMemberStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiMemberStatusEnum>;
  _nin?: InputMaybe<Array<ApiMemberStatusEnum>>;
};

/** input type for inserting data into table "member_status" */
export type ApiMemberStatusInsertInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiMemberStatusMaxFields = {
  __typename?: 'member_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiMemberStatusMinFields = {
  __typename?: 'member_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "member_status" */
export type ApiMemberStatusMutationResponse = {
  __typename?: 'member_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiMemberStatus>;
};

/** on_conflict condition type for table "member_status" */
export type ApiMemberStatusOnConflict = {
  constraint: ApiMemberStatusConstraint;
  update_columns?: Array<ApiMemberStatusUpdateColumn>;
  where?: InputMaybe<ApiMemberStatusBoolExp>;
};

/** Ordering options when selecting data from "member_status". */
export type ApiMemberStatusOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: member_status */
export type ApiMemberStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "member_status" */
export enum ApiMemberStatusSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "member_status" */
export type ApiMemberStatusSetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "member_status" */
export enum ApiMemberStatusUpdateColumn {
  /** column name */
  Value = 'value'
}

/** update columns of table "member" */
export enum ApiMemberUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Religion = 'religion',
  /** column name */
  Status = 'status',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type ApiMutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "city" */
  delete_city?: Maybe<ApiCityMutationResponse>;
  /** delete single row from the table: "city" */
  delete_city_by_pk?: Maybe<ApiCity>;
  /** delete data from the table: "family" */
  delete_family?: Maybe<ApiFamilyMutationResponse>;
  /** delete single row from the table: "family" */
  delete_family_by_pk?: Maybe<ApiFamily>;
  /** delete data from the table: "family_project" */
  delete_family_project?: Maybe<ApiFamilyProjectMutationResponse>;
  /** delete single row from the table: "family_project" */
  delete_family_project_by_pk?: Maybe<ApiFamilyProject>;
  /** delete data from the table: "family_severity" */
  delete_family_severity?: Maybe<ApiFamilySeverityMutationResponse>;
  /** delete single row from the table: "family_severity" */
  delete_family_severity_by_pk?: Maybe<ApiFamilySeverity>;
  /** delete data from the table: "family_status" */
  delete_family_status?: Maybe<ApiFamilyStatusMutationResponse>;
  /** delete single row from the table: "family_status" */
  delete_family_status_by_pk?: Maybe<ApiFamilyStatus>;
  /** delete data from the table: "gender" */
  delete_gender?: Maybe<ApiGenderMutationResponse>;
  /** delete single row from the table: "gender" */
  delete_gender_by_pk?: Maybe<ApiGender>;
  /** delete data from the table: "householder" */
  delete_householder?: Maybe<ApiHouseholderMutationResponse>;
  /** delete single row from the table: "householder" */
  delete_householder_by_pk?: Maybe<ApiHouseholder>;
  /** delete data from the table: "householder_status" */
  delete_householder_status?: Maybe<ApiHouseholderStatusMutationResponse>;
  /** delete single row from the table: "householder_status" */
  delete_householder_status_by_pk?: Maybe<ApiHouseholderStatus>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<ApiMemberMutationResponse>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<ApiMember>;
  /** delete data from the table: "member_status" */
  delete_member_status?: Maybe<ApiMemberStatusMutationResponse>;
  /** delete single row from the table: "member_status" */
  delete_member_status_by_pk?: Maybe<ApiMemberStatus>;
  /** delete data from the table: "nationality" */
  delete_nationality?: Maybe<ApiNationalityMutationResponse>;
  /** delete single row from the table: "nationality" */
  delete_nationality_by_pk?: Maybe<ApiNationality>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<ApiProjectMutationResponse>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<ApiProject>;
  /** delete data from the table: "project_status" */
  delete_project_status?: Maybe<ApiProjectStatusMutationResponse>;
  /** delete single row from the table: "project_status" */
  delete_project_status_by_pk?: Maybe<ApiProjectStatus>;
  /** delete data from the table: "religion" */
  delete_religion?: Maybe<ApiReligionMutationResponse>;
  /** delete single row from the table: "religion" */
  delete_religion_by_pk?: Maybe<ApiReligion>;
  /** insert data into the table: "city" */
  insert_city?: Maybe<ApiCityMutationResponse>;
  /** insert a single row into the table: "city" */
  insert_city_one?: Maybe<ApiCity>;
  /** insert data into the table: "family" */
  insert_family?: Maybe<ApiFamilyMutationResponse>;
  /** insert a single row into the table: "family" */
  insert_family_one?: Maybe<ApiFamily>;
  /** insert data into the table: "family_project" */
  insert_family_project?: Maybe<ApiFamilyProjectMutationResponse>;
  /** insert a single row into the table: "family_project" */
  insert_family_project_one?: Maybe<ApiFamilyProject>;
  /** insert data into the table: "family_severity" */
  insert_family_severity?: Maybe<ApiFamilySeverityMutationResponse>;
  /** insert a single row into the table: "family_severity" */
  insert_family_severity_one?: Maybe<ApiFamilySeverity>;
  /** insert data into the table: "family_status" */
  insert_family_status?: Maybe<ApiFamilyStatusMutationResponse>;
  /** insert a single row into the table: "family_status" */
  insert_family_status_one?: Maybe<ApiFamilyStatus>;
  /** insert data into the table: "gender" */
  insert_gender?: Maybe<ApiGenderMutationResponse>;
  /** insert a single row into the table: "gender" */
  insert_gender_one?: Maybe<ApiGender>;
  /** insert data into the table: "householder" */
  insert_householder?: Maybe<ApiHouseholderMutationResponse>;
  /** insert a single row into the table: "householder" */
  insert_householder_one?: Maybe<ApiHouseholder>;
  /** insert data into the table: "householder_status" */
  insert_householder_status?: Maybe<ApiHouseholderStatusMutationResponse>;
  /** insert a single row into the table: "householder_status" */
  insert_householder_status_one?: Maybe<ApiHouseholderStatus>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<ApiMemberMutationResponse>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<ApiMember>;
  /** insert data into the table: "member_status" */
  insert_member_status?: Maybe<ApiMemberStatusMutationResponse>;
  /** insert a single row into the table: "member_status" */
  insert_member_status_one?: Maybe<ApiMemberStatus>;
  /** insert data into the table: "nationality" */
  insert_nationality?: Maybe<ApiNationalityMutationResponse>;
  /** insert a single row into the table: "nationality" */
  insert_nationality_one?: Maybe<ApiNationality>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<ApiProjectMutationResponse>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<ApiProject>;
  /** insert data into the table: "project_status" */
  insert_project_status?: Maybe<ApiProjectStatusMutationResponse>;
  /** insert a single row into the table: "project_status" */
  insert_project_status_one?: Maybe<ApiProjectStatus>;
  /** insert data into the table: "religion" */
  insert_religion?: Maybe<ApiReligionMutationResponse>;
  /** insert a single row into the table: "religion" */
  insert_religion_one?: Maybe<ApiReligion>;
  /** update data of the table: "city" */
  update_city?: Maybe<ApiCityMutationResponse>;
  /** update single row of the table: "city" */
  update_city_by_pk?: Maybe<ApiCity>;
  /** update data of the table: "family" */
  update_family?: Maybe<ApiFamilyMutationResponse>;
  /** update single row of the table: "family" */
  update_family_by_pk?: Maybe<ApiFamily>;
  /** update data of the table: "family_project" */
  update_family_project?: Maybe<ApiFamilyProjectMutationResponse>;
  /** update single row of the table: "family_project" */
  update_family_project_by_pk?: Maybe<ApiFamilyProject>;
  /** update data of the table: "family_severity" */
  update_family_severity?: Maybe<ApiFamilySeverityMutationResponse>;
  /** update single row of the table: "family_severity" */
  update_family_severity_by_pk?: Maybe<ApiFamilySeverity>;
  /** update data of the table: "family_status" */
  update_family_status?: Maybe<ApiFamilyStatusMutationResponse>;
  /** update single row of the table: "family_status" */
  update_family_status_by_pk?: Maybe<ApiFamilyStatus>;
  /** update data of the table: "gender" */
  update_gender?: Maybe<ApiGenderMutationResponse>;
  /** update single row of the table: "gender" */
  update_gender_by_pk?: Maybe<ApiGender>;
  /** update data of the table: "householder" */
  update_householder?: Maybe<ApiHouseholderMutationResponse>;
  /** update single row of the table: "householder" */
  update_householder_by_pk?: Maybe<ApiHouseholder>;
  /** update data of the table: "householder_status" */
  update_householder_status?: Maybe<ApiHouseholderStatusMutationResponse>;
  /** update single row of the table: "householder_status" */
  update_householder_status_by_pk?: Maybe<ApiHouseholderStatus>;
  /** update data of the table: "member" */
  update_member?: Maybe<ApiMemberMutationResponse>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<ApiMember>;
  /** update data of the table: "member_status" */
  update_member_status?: Maybe<ApiMemberStatusMutationResponse>;
  /** update single row of the table: "member_status" */
  update_member_status_by_pk?: Maybe<ApiMemberStatus>;
  /** update data of the table: "nationality" */
  update_nationality?: Maybe<ApiNationalityMutationResponse>;
  /** update single row of the table: "nationality" */
  update_nationality_by_pk?: Maybe<ApiNationality>;
  /** update data of the table: "project" */
  update_project?: Maybe<ApiProjectMutationResponse>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<ApiProject>;
  /** update data of the table: "project_status" */
  update_project_status?: Maybe<ApiProjectStatusMutationResponse>;
  /** update single row of the table: "project_status" */
  update_project_status_by_pk?: Maybe<ApiProjectStatus>;
  /** update data of the table: "religion" */
  update_religion?: Maybe<ApiReligionMutationResponse>;
  /** update single row of the table: "religion" */
  update_religion_by_pk?: Maybe<ApiReligion>;
};


/** mutation root */
export type ApiMutationRootApiDeleteCityArgs = {
  where: ApiCityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteCityByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilyArgs = {
  where: ApiFamilyBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilyByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilyProjectArgs = {
  where: ApiFamilyProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilyProjectByPkArgs = {
  family_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilySeverityArgs = {
  where: ApiFamilySeverityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilySeverityByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilyStatusArgs = {
  where: ApiFamilyStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteFamilyStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteGenderArgs = {
  where: ApiGenderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteGenderByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholderArgs = {
  where: ApiHouseholderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholderByPkArgs = {
  family_id: Scalars['uuid'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholderStatusArgs = {
  where: ApiHouseholderStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholderStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteMemberArgs = {
  where: ApiMemberBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteMemberByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type ApiMutationRootApiDeleteMemberStatusArgs = {
  where: ApiMemberStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteMemberStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteNationalityArgs = {
  where: ApiNationalityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteNationalityByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectArgs = {
  where: ApiProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectStatusArgs = {
  where: ApiProjectStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectStatusByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiDeleteReligionArgs = {
  where: ApiReligionBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteReligionByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type ApiMutationRootApiInsertCityArgs = {
  objects: Array<ApiCityInsertInput>;
  on_conflict?: InputMaybe<ApiCityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertCityOneArgs = {
  object: ApiCityInsertInput;
  on_conflict?: InputMaybe<ApiCityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilyArgs = {
  objects: Array<ApiFamilyInsertInput>;
  on_conflict?: InputMaybe<ApiFamilyOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilyOneArgs = {
  object: ApiFamilyInsertInput;
  on_conflict?: InputMaybe<ApiFamilyOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilyProjectArgs = {
  objects: Array<ApiFamilyProjectInsertInput>;
  on_conflict?: InputMaybe<ApiFamilyProjectOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilyProjectOneArgs = {
  object: ApiFamilyProjectInsertInput;
  on_conflict?: InputMaybe<ApiFamilyProjectOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilySeverityArgs = {
  objects: Array<ApiFamilySeverityInsertInput>;
  on_conflict?: InputMaybe<ApiFamilySeverityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilySeverityOneArgs = {
  object: ApiFamilySeverityInsertInput;
  on_conflict?: InputMaybe<ApiFamilySeverityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilyStatusArgs = {
  objects: Array<ApiFamilyStatusInsertInput>;
  on_conflict?: InputMaybe<ApiFamilyStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertFamilyStatusOneArgs = {
  object: ApiFamilyStatusInsertInput;
  on_conflict?: InputMaybe<ApiFamilyStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertGenderArgs = {
  objects: Array<ApiGenderInsertInput>;
  on_conflict?: InputMaybe<ApiGenderOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertGenderOneArgs = {
  object: ApiGenderInsertInput;
  on_conflict?: InputMaybe<ApiGenderOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholderArgs = {
  objects: Array<ApiHouseholderInsertInput>;
  on_conflict?: InputMaybe<ApiHouseholderOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholderOneArgs = {
  object: ApiHouseholderInsertInput;
  on_conflict?: InputMaybe<ApiHouseholderOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholderStatusArgs = {
  objects: Array<ApiHouseholderStatusInsertInput>;
  on_conflict?: InputMaybe<ApiHouseholderStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholderStatusOneArgs = {
  object: ApiHouseholderStatusInsertInput;
  on_conflict?: InputMaybe<ApiHouseholderStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertMemberArgs = {
  objects: Array<ApiMemberInsertInput>;
  on_conflict?: InputMaybe<ApiMemberOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertMemberOneArgs = {
  object: ApiMemberInsertInput;
  on_conflict?: InputMaybe<ApiMemberOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertMemberStatusArgs = {
  objects: Array<ApiMemberStatusInsertInput>;
  on_conflict?: InputMaybe<ApiMemberStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertMemberStatusOneArgs = {
  object: ApiMemberStatusInsertInput;
  on_conflict?: InputMaybe<ApiMemberStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertNationalityArgs = {
  objects: Array<ApiNationalityInsertInput>;
  on_conflict?: InputMaybe<ApiNationalityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertNationalityOneArgs = {
  object: ApiNationalityInsertInput;
  on_conflict?: InputMaybe<ApiNationalityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertProjectArgs = {
  objects: Array<ApiProjectInsertInput>;
  on_conflict?: InputMaybe<ApiProjectOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertProjectOneArgs = {
  object: ApiProjectInsertInput;
  on_conflict?: InputMaybe<ApiProjectOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertProjectStatusArgs = {
  objects: Array<ApiProjectStatusInsertInput>;
  on_conflict?: InputMaybe<ApiProjectStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertProjectStatusOneArgs = {
  object: ApiProjectStatusInsertInput;
  on_conflict?: InputMaybe<ApiProjectStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertReligionArgs = {
  objects: Array<ApiReligionInsertInput>;
  on_conflict?: InputMaybe<ApiReligionOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertReligionOneArgs = {
  object: ApiReligionInsertInput;
  on_conflict?: InputMaybe<ApiReligionOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiUpdateCityArgs = {
  _set?: InputMaybe<ApiCitySetInput>;
  where: ApiCityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateCityByPkArgs = {
  _set?: InputMaybe<ApiCitySetInput>;
  pk_columns: ApiCityPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilyArgs = {
  _inc?: InputMaybe<ApiFamilyIncInput>;
  _set?: InputMaybe<ApiFamilySetInput>;
  where: ApiFamilyBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilyByPkArgs = {
  _inc?: InputMaybe<ApiFamilyIncInput>;
  _set?: InputMaybe<ApiFamilySetInput>;
  pk_columns: ApiFamilyPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilyProjectArgs = {
  _inc?: InputMaybe<ApiFamilyProjectIncInput>;
  _set?: InputMaybe<ApiFamilyProjectSetInput>;
  where: ApiFamilyProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilyProjectByPkArgs = {
  _inc?: InputMaybe<ApiFamilyProjectIncInput>;
  _set?: InputMaybe<ApiFamilyProjectSetInput>;
  pk_columns: ApiFamilyProjectPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilySeverityArgs = {
  _set?: InputMaybe<ApiFamilySeveritySetInput>;
  where: ApiFamilySeverityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilySeverityByPkArgs = {
  _set?: InputMaybe<ApiFamilySeveritySetInput>;
  pk_columns: ApiFamilySeverityPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilyStatusArgs = {
  _set?: InputMaybe<ApiFamilyStatusSetInput>;
  where: ApiFamilyStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateFamilyStatusByPkArgs = {
  _set?: InputMaybe<ApiFamilyStatusSetInput>;
  pk_columns: ApiFamilyStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateGenderArgs = {
  _set?: InputMaybe<ApiGenderSetInput>;
  where: ApiGenderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateGenderByPkArgs = {
  _set?: InputMaybe<ApiGenderSetInput>;
  pk_columns: ApiGenderPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholderArgs = {
  _set?: InputMaybe<ApiHouseholderSetInput>;
  where: ApiHouseholderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholderByPkArgs = {
  _set?: InputMaybe<ApiHouseholderSetInput>;
  pk_columns: ApiHouseholderPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholderStatusArgs = {
  _set?: InputMaybe<ApiHouseholderStatusSetInput>;
  where: ApiHouseholderStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholderStatusByPkArgs = {
  _set?: InputMaybe<ApiHouseholderStatusSetInput>;
  pk_columns: ApiHouseholderStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateMemberArgs = {
  _set?: InputMaybe<ApiMemberSetInput>;
  where: ApiMemberBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateMemberByPkArgs = {
  _set?: InputMaybe<ApiMemberSetInput>;
  pk_columns: ApiMemberPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateMemberStatusArgs = {
  _set?: InputMaybe<ApiMemberStatusSetInput>;
  where: ApiMemberStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateMemberStatusByPkArgs = {
  _set?: InputMaybe<ApiMemberStatusSetInput>;
  pk_columns: ApiMemberStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateNationalityArgs = {
  _set?: InputMaybe<ApiNationalitySetInput>;
  where: ApiNationalityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateNationalityByPkArgs = {
  _set?: InputMaybe<ApiNationalitySetInput>;
  pk_columns: ApiNationalityPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateProjectArgs = {
  _set?: InputMaybe<ApiProjectSetInput>;
  where: ApiProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateProjectByPkArgs = {
  _set?: InputMaybe<ApiProjectSetInput>;
  pk_columns: ApiProjectPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateProjectStatusArgs = {
  _set?: InputMaybe<ApiProjectStatusSetInput>;
  where: ApiProjectStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateProjectStatusByPkArgs = {
  _set?: InputMaybe<ApiProjectStatusSetInput>;
  pk_columns: ApiProjectStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateReligionArgs = {
  _set?: InputMaybe<ApiReligionSetInput>;
  where: ApiReligionBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateReligionByPkArgs = {
  _set?: InputMaybe<ApiReligionSetInput>;
  pk_columns: ApiReligionPkColumnsInput;
};

/** columns and relationships of "nationality" */
export type ApiNationality = {
  __typename?: 'nationality';
  value: Scalars['String'];
};

/** aggregated selection of "nationality" */
export type ApiNationalityAggregate = {
  __typename?: 'nationality_aggregate';
  aggregate?: Maybe<ApiNationalityAggregateFields>;
  nodes: Array<ApiNationality>;
};

/** aggregate fields of "nationality" */
export type ApiNationalityAggregateFields = {
  __typename?: 'nationality_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiNationalityMaxFields>;
  min?: Maybe<ApiNationalityMinFields>;
};


/** aggregate fields of "nationality" */
export type ApiNationalityAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nationality". All fields are combined with a logical 'AND'. */
export type ApiNationalityBoolExp = {
  _and?: InputMaybe<Array<ApiNationalityBoolExp>>;
  _not?: InputMaybe<ApiNationalityBoolExp>;
  _or?: InputMaybe<Array<ApiNationalityBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "nationality" */
export enum ApiNationalityConstraint {
  /** unique or primary key constraint */
  NationalityPkey = 'nationality_pkey'
}

export enum ApiNationalityEnum {
  Ir = 'ir',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "nationality_enum". All fields are combined with logical 'AND'. */
export type ApiNationalityEnumComparisonExp = {
  _eq?: InputMaybe<ApiNationalityEnum>;
  _in?: InputMaybe<Array<ApiNationalityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiNationalityEnum>;
  _nin?: InputMaybe<Array<ApiNationalityEnum>>;
};

/** input type for inserting data into table "nationality" */
export type ApiNationalityInsertInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiNationalityMaxFields = {
  __typename?: 'nationality_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiNationalityMinFields = {
  __typename?: 'nationality_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "nationality" */
export type ApiNationalityMutationResponse = {
  __typename?: 'nationality_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiNationality>;
};

/** on_conflict condition type for table "nationality" */
export type ApiNationalityOnConflict = {
  constraint: ApiNationalityConstraint;
  update_columns?: Array<ApiNationalityUpdateColumn>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};

/** Ordering options when selecting data from "nationality". */
export type ApiNationalityOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: nationality */
export type ApiNationalityPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "nationality" */
export enum ApiNationalitySelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "nationality" */
export type ApiNationalitySetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "nationality" */
export enum ApiNationalityUpdateColumn {
  /** column name */
  Value = 'value'
}

/** column ordering options */
export enum ApiOrderBy {
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
export type ApiProject = {
  __typename?: 'project';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['date']>;
  /** An array relationship */
  families: Array<ApiFamilyProject>;
  /** An aggregate relationship */
  families_aggregate: ApiFamilyProjectAggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  start_date?: Maybe<Scalars['date']>;
  status: ApiProjectStatusEnum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "project" */
export type ApiProjectApiFamiliesArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyProjectOrderBy>>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};


/** columns and relationships of "project" */
export type ApiProjectApiFamiliesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyProjectOrderBy>>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};

/** aggregated selection of "project" */
export type ApiProjectAggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<ApiProjectAggregateFields>;
  nodes: Array<ApiProject>;
};

/** aggregate fields of "project" */
export type ApiProjectAggregateFields = {
  __typename?: 'project_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiProjectMaxFields>;
  min?: Maybe<ApiProjectMinFields>;
};


/** aggregate fields of "project" */
export type ApiProjectAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type ApiProjectBoolExp = {
  _and?: InputMaybe<Array<ApiProjectBoolExp>>;
  _not?: InputMaybe<ApiProjectBoolExp>;
  _or?: InputMaybe<Array<ApiProjectBoolExp>>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  description?: InputMaybe<ApiStringComparisonExp>;
  due_date?: InputMaybe<ApiDateComparisonExp>;
  families?: InputMaybe<ApiFamilyProjectBoolExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  start_date?: InputMaybe<ApiDateComparisonExp>;
  status?: InputMaybe<ApiProjectStatusEnumComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "project" */
export enum ApiProjectConstraint {
  /** unique or primary key constraint */
  ProjectPkey = 'project_pkey'
}

/** input type for inserting data into table "project" */
export type ApiProjectInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['date']>;
  families?: InputMaybe<ApiFamilyProjectArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<ApiProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ApiProjectMaxFields = {
  __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ApiProjectMinFields = {
  __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "project" */
export type ApiProjectMutationResponse = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiProject>;
};

/** input type for inserting object relation for remote table "project" */
export type ApiProjectObjRelInsertInput = {
  data: ApiProjectInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiProjectOnConflict>;
};

/** on_conflict condition type for table "project" */
export type ApiProjectOnConflict = {
  constraint: ApiProjectConstraint;
  update_columns?: Array<ApiProjectUpdateColumn>;
  where?: InputMaybe<ApiProjectBoolExp>;
};

/** Ordering options when selecting data from "project". */
export type ApiProjectOrderBy = {
  created_at?: InputMaybe<ApiOrderBy>;
  description?: InputMaybe<ApiOrderBy>;
  due_date?: InputMaybe<ApiOrderBy>;
  families_aggregate?: InputMaybe<ApiFamilyProjectAggregateOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  start_date?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: project */
export type ApiProjectPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "project" */
export enum ApiProjectSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "project" */
export type ApiProjectSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<ApiProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "project_status" */
export type ApiProjectStatus = {
  __typename?: 'project_status';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "project_status" */
export type ApiProjectStatusAggregate = {
  __typename?: 'project_status_aggregate';
  aggregate?: Maybe<ApiProjectStatusAggregateFields>;
  nodes: Array<ApiProjectStatus>;
};

/** aggregate fields of "project_status" */
export type ApiProjectStatusAggregateFields = {
  __typename?: 'project_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiProjectStatusMaxFields>;
  min?: Maybe<ApiProjectStatusMinFields>;
};


/** aggregate fields of "project_status" */
export type ApiProjectStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project_status". All fields are combined with a logical 'AND'. */
export type ApiProjectStatusBoolExp = {
  _and?: InputMaybe<Array<ApiProjectStatusBoolExp>>;
  _not?: InputMaybe<ApiProjectStatusBoolExp>;
  _or?: InputMaybe<Array<ApiProjectStatusBoolExp>>;
  comment?: InputMaybe<ApiStringComparisonExp>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "project_status" */
export enum ApiProjectStatusConstraint {
  /** unique or primary key constraint */
  ProjectStatusPkey = 'project_status_pkey'
}

export enum ApiProjectStatusEnum {
  Closed = 'Closed',
  Done = 'Done',
  InProgress = 'InProgress',
  Planning = 'Planning',
  Suspended = 'Suspended'
}

/** Boolean expression to compare columns of type "project_status_enum". All fields are combined with logical 'AND'. */
export type ApiProjectStatusEnumComparisonExp = {
  _eq?: InputMaybe<ApiProjectStatusEnum>;
  _in?: InputMaybe<Array<ApiProjectStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiProjectStatusEnum>;
  _nin?: InputMaybe<Array<ApiProjectStatusEnum>>;
};

/** input type for inserting data into table "project_status" */
export type ApiProjectStatusInsertInput = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiProjectStatusMaxFields = {
  __typename?: 'project_status_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiProjectStatusMinFields = {
  __typename?: 'project_status_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "project_status" */
export type ApiProjectStatusMutationResponse = {
  __typename?: 'project_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiProjectStatus>;
};

/** on_conflict condition type for table "project_status" */
export type ApiProjectStatusOnConflict = {
  constraint: ApiProjectStatusConstraint;
  update_columns?: Array<ApiProjectStatusUpdateColumn>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};

/** Ordering options when selecting data from "project_status". */
export type ApiProjectStatusOrderBy = {
  comment?: InputMaybe<ApiOrderBy>;
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: project_status */
export type ApiProjectStatusPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "project_status" */
export enum ApiProjectStatusSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "project_status" */
export type ApiProjectStatusSetInput = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "project_status" */
export enum ApiProjectStatusUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** update columns of table "project" */
export enum ApiProjectUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ApiQueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "city" */
  city: Array<ApiCity>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: ApiCityAggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<ApiCity>;
  /** fetch data from the table: "family" */
  family: Array<ApiFamily>;
  /** fetch aggregated fields from the table: "family" */
  family_aggregate: ApiFamilyAggregate;
  /** fetch data from the table: "family" using primary key columns */
  family_by_pk?: Maybe<ApiFamily>;
  /** fetch data from the table: "family_project" */
  family_project: Array<ApiFamilyProject>;
  /** fetch aggregated fields from the table: "family_project" */
  family_project_aggregate: ApiFamilyProjectAggregate;
  /** fetch data from the table: "family_project" using primary key columns */
  family_project_by_pk?: Maybe<ApiFamilyProject>;
  /** fetch data from the table: "family_severity" */
  family_severity: Array<ApiFamilySeverity>;
  /** fetch aggregated fields from the table: "family_severity" */
  family_severity_aggregate: ApiFamilySeverityAggregate;
  /** fetch data from the table: "family_severity" using primary key columns */
  family_severity_by_pk?: Maybe<ApiFamilySeverity>;
  /** fetch data from the table: "family_status" */
  family_status: Array<ApiFamilyStatus>;
  /** fetch aggregated fields from the table: "family_status" */
  family_status_aggregate: ApiFamilyStatusAggregate;
  /** fetch data from the table: "family_status" using primary key columns */
  family_status_by_pk?: Maybe<ApiFamilyStatus>;
  /** fetch data from the table: "gender" */
  gender: Array<ApiGender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: ApiGenderAggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<ApiGender>;
  /** fetch data from the table: "householder" */
  householder: Array<ApiHouseholder>;
  /** fetch aggregated fields from the table: "householder" */
  householder_aggregate: ApiHouseholderAggregate;
  /** fetch data from the table: "householder" using primary key columns */
  householder_by_pk?: Maybe<ApiHouseholder>;
  /** fetch data from the table: "householder_status" */
  householder_status: Array<ApiHouseholderStatus>;
  /** fetch aggregated fields from the table: "householder_status" */
  householder_status_aggregate: ApiHouseholderStatusAggregate;
  /** fetch data from the table: "householder_status" using primary key columns */
  householder_status_by_pk?: Maybe<ApiHouseholderStatus>;
  /** fetch data from the table: "member" */
  member: Array<ApiMember>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: ApiMemberAggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<ApiMember>;
  /** fetch data from the table: "member_status" */
  member_status: Array<ApiMemberStatus>;
  /** fetch aggregated fields from the table: "member_status" */
  member_status_aggregate: ApiMemberStatusAggregate;
  /** fetch data from the table: "member_status" using primary key columns */
  member_status_by_pk?: Maybe<ApiMemberStatus>;
  /** fetch data from the table: "nationality" */
  nationality: Array<ApiNationality>;
  /** fetch aggregated fields from the table: "nationality" */
  nationality_aggregate: ApiNationalityAggregate;
  /** fetch data from the table: "nationality" using primary key columns */
  nationality_by_pk?: Maybe<ApiNationality>;
  /** fetch data from the table: "project" */
  project: Array<ApiProject>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: ApiProjectAggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<ApiProject>;
  /** fetch data from the table: "project_status" */
  project_status: Array<ApiProjectStatus>;
  /** fetch aggregated fields from the table: "project_status" */
  project_status_aggregate: ApiProjectStatusAggregate;
  /** fetch data from the table: "project_status" using primary key columns */
  project_status_by_pk?: Maybe<ApiProjectStatus>;
  /** fetch data from the table: "religion" */
  religion: Array<ApiReligion>;
  /** fetch aggregated fields from the table: "religion" */
  religion_aggregate: ApiReligionAggregate;
  /** fetch data from the table: "religion" using primary key columns */
  religion_by_pk?: Maybe<ApiReligion>;
};


export type ApiQueryRootApiCityArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiQueryRootApiCityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiQueryRootApiCityByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiFamilyArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyOrderBy>>;
  where?: InputMaybe<ApiFamilyBoolExp>;
};


export type ApiQueryRootApiFamilyAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyOrderBy>>;
  where?: InputMaybe<ApiFamilyBoolExp>;
};


export type ApiQueryRootApiFamilyByPkArgs = {
  id: Scalars['uuid'];
};


export type ApiQueryRootApiFamilyProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyProjectOrderBy>>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};


export type ApiQueryRootApiFamilyProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyProjectOrderBy>>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};


export type ApiQueryRootApiFamilyProjectByPkArgs = {
  family_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};


export type ApiQueryRootApiFamilySeverityArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilySeverityOrderBy>>;
  where?: InputMaybe<ApiFamilySeverityBoolExp>;
};


export type ApiQueryRootApiFamilySeverityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilySeverityOrderBy>>;
  where?: InputMaybe<ApiFamilySeverityBoolExp>;
};


export type ApiQueryRootApiFamilySeverityByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiFamilyStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyStatusOrderBy>>;
  where?: InputMaybe<ApiFamilyStatusBoolExp>;
};


export type ApiQueryRootApiFamilyStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyStatusOrderBy>>;
  where?: InputMaybe<ApiFamilyStatusBoolExp>;
};


export type ApiQueryRootApiFamilyStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiGenderArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiQueryRootApiGenderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiQueryRootApiGenderByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiHouseholderArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiQueryRootApiHouseholderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiQueryRootApiHouseholderByPkArgs = {
  family_id: Scalars['uuid'];
};


export type ApiQueryRootApiHouseholderStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholderStatusBoolExp>;
};


export type ApiQueryRootApiHouseholderStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholderStatusBoolExp>;
};


export type ApiQueryRootApiHouseholderStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiMemberArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiQueryRootApiMemberAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiQueryRootApiMemberByPkArgs = {
  id: Scalars['uuid'];
};


export type ApiQueryRootApiMemberStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberStatusOrderBy>>;
  where?: InputMaybe<ApiMemberStatusBoolExp>;
};


export type ApiQueryRootApiMemberStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberStatusOrderBy>>;
  where?: InputMaybe<ApiMemberStatusBoolExp>;
};


export type ApiQueryRootApiMemberStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiNationalityArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiQueryRootApiNationalityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiQueryRootApiNationalityByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiQueryRootApiProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiQueryRootApiProjectByPkArgs = {
  id: Scalars['uuid'];
};


export type ApiQueryRootApiProjectStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiQueryRootApiProjectStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiQueryRootApiProjectStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiQueryRootApiReligionArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiQueryRootApiReligionAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiQueryRootApiReligionByPkArgs = {
  value: Scalars['String'];
};

/** columns and relationships of "religion" */
export type ApiReligion = {
  __typename?: 'religion';
  value: Scalars['String'];
};

/** aggregated selection of "religion" */
export type ApiReligionAggregate = {
  __typename?: 'religion_aggregate';
  aggregate?: Maybe<ApiReligionAggregateFields>;
  nodes: Array<ApiReligion>;
};

/** aggregate fields of "religion" */
export type ApiReligionAggregateFields = {
  __typename?: 'religion_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApiReligionMaxFields>;
  min?: Maybe<ApiReligionMinFields>;
};


/** aggregate fields of "religion" */
export type ApiReligionAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiReligionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "religion". All fields are combined with a logical 'AND'. */
export type ApiReligionBoolExp = {
  _and?: InputMaybe<Array<ApiReligionBoolExp>>;
  _not?: InputMaybe<ApiReligionBoolExp>;
  _or?: InputMaybe<Array<ApiReligionBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "religion" */
export enum ApiReligionConstraint {
  /** unique or primary key constraint */
  ReligionPkey = 'religion_pkey'
}

export enum ApiReligionEnum {
  Islam = 'islam',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "religion_enum". All fields are combined with logical 'AND'. */
export type ApiReligionEnumComparisonExp = {
  _eq?: InputMaybe<ApiReligionEnum>;
  _in?: InputMaybe<Array<ApiReligionEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ApiReligionEnum>;
  _nin?: InputMaybe<Array<ApiReligionEnum>>;
};

/** input type for inserting data into table "religion" */
export type ApiReligionInsertInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApiReligionMaxFields = {
  __typename?: 'religion_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApiReligionMinFields = {
  __typename?: 'religion_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "religion" */
export type ApiReligionMutationResponse = {
  __typename?: 'religion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiReligion>;
};

/** on_conflict condition type for table "religion" */
export type ApiReligionOnConflict = {
  constraint: ApiReligionConstraint;
  update_columns?: Array<ApiReligionUpdateColumn>;
  where?: InputMaybe<ApiReligionBoolExp>;
};

/** Ordering options when selecting data from "religion". */
export type ApiReligionOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: religion */
export type ApiReligionPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "religion" */
export enum ApiReligionSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "religion" */
export type ApiReligionSetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "religion" */
export enum ApiReligionUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiSubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "city" */
  city: Array<ApiCity>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: ApiCityAggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<ApiCity>;
  /** fetch data from the table: "family" */
  family: Array<ApiFamily>;
  /** fetch aggregated fields from the table: "family" */
  family_aggregate: ApiFamilyAggregate;
  /** fetch data from the table: "family" using primary key columns */
  family_by_pk?: Maybe<ApiFamily>;
  /** fetch data from the table: "family_project" */
  family_project: Array<ApiFamilyProject>;
  /** fetch aggregated fields from the table: "family_project" */
  family_project_aggregate: ApiFamilyProjectAggregate;
  /** fetch data from the table: "family_project" using primary key columns */
  family_project_by_pk?: Maybe<ApiFamilyProject>;
  /** fetch data from the table: "family_severity" */
  family_severity: Array<ApiFamilySeverity>;
  /** fetch aggregated fields from the table: "family_severity" */
  family_severity_aggregate: ApiFamilySeverityAggregate;
  /** fetch data from the table: "family_severity" using primary key columns */
  family_severity_by_pk?: Maybe<ApiFamilySeverity>;
  /** fetch data from the table: "family_status" */
  family_status: Array<ApiFamilyStatus>;
  /** fetch aggregated fields from the table: "family_status" */
  family_status_aggregate: ApiFamilyStatusAggregate;
  /** fetch data from the table: "family_status" using primary key columns */
  family_status_by_pk?: Maybe<ApiFamilyStatus>;
  /** fetch data from the table: "gender" */
  gender: Array<ApiGender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: ApiGenderAggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<ApiGender>;
  /** fetch data from the table: "householder" */
  householder: Array<ApiHouseholder>;
  /** fetch aggregated fields from the table: "householder" */
  householder_aggregate: ApiHouseholderAggregate;
  /** fetch data from the table: "householder" using primary key columns */
  householder_by_pk?: Maybe<ApiHouseholder>;
  /** fetch data from the table: "householder_status" */
  householder_status: Array<ApiHouseholderStatus>;
  /** fetch aggregated fields from the table: "householder_status" */
  householder_status_aggregate: ApiHouseholderStatusAggregate;
  /** fetch data from the table: "householder_status" using primary key columns */
  householder_status_by_pk?: Maybe<ApiHouseholderStatus>;
  /** fetch data from the table: "member" */
  member: Array<ApiMember>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: ApiMemberAggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<ApiMember>;
  /** fetch data from the table: "member_status" */
  member_status: Array<ApiMemberStatus>;
  /** fetch aggregated fields from the table: "member_status" */
  member_status_aggregate: ApiMemberStatusAggregate;
  /** fetch data from the table: "member_status" using primary key columns */
  member_status_by_pk?: Maybe<ApiMemberStatus>;
  /** fetch data from the table: "nationality" */
  nationality: Array<ApiNationality>;
  /** fetch aggregated fields from the table: "nationality" */
  nationality_aggregate: ApiNationalityAggregate;
  /** fetch data from the table: "nationality" using primary key columns */
  nationality_by_pk?: Maybe<ApiNationality>;
  /** fetch data from the table: "project" */
  project: Array<ApiProject>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: ApiProjectAggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<ApiProject>;
  /** fetch data from the table: "project_status" */
  project_status: Array<ApiProjectStatus>;
  /** fetch aggregated fields from the table: "project_status" */
  project_status_aggregate: ApiProjectStatusAggregate;
  /** fetch data from the table: "project_status" using primary key columns */
  project_status_by_pk?: Maybe<ApiProjectStatus>;
  /** fetch data from the table: "religion" */
  religion: Array<ApiReligion>;
  /** fetch aggregated fields from the table: "religion" */
  religion_aggregate: ApiReligionAggregate;
  /** fetch data from the table: "religion" using primary key columns */
  religion_by_pk?: Maybe<ApiReligion>;
};


export type ApiSubscriptionRootApiCityArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiSubscriptionRootApiCityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiSubscriptionRootApiCityByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiFamilyArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyOrderBy>>;
  where?: InputMaybe<ApiFamilyBoolExp>;
};


export type ApiSubscriptionRootApiFamilyAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyOrderBy>>;
  where?: InputMaybe<ApiFamilyBoolExp>;
};


export type ApiSubscriptionRootApiFamilyByPkArgs = {
  id: Scalars['uuid'];
};


export type ApiSubscriptionRootApiFamilyProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyProjectOrderBy>>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};


export type ApiSubscriptionRootApiFamilyProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyProjectOrderBy>>;
  where?: InputMaybe<ApiFamilyProjectBoolExp>;
};


export type ApiSubscriptionRootApiFamilyProjectByPkArgs = {
  family_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};


export type ApiSubscriptionRootApiFamilySeverityArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilySeverityOrderBy>>;
  where?: InputMaybe<ApiFamilySeverityBoolExp>;
};


export type ApiSubscriptionRootApiFamilySeverityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilySeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilySeverityOrderBy>>;
  where?: InputMaybe<ApiFamilySeverityBoolExp>;
};


export type ApiSubscriptionRootApiFamilySeverityByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiFamilyStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyStatusOrderBy>>;
  where?: InputMaybe<ApiFamilyStatusBoolExp>;
};


export type ApiSubscriptionRootApiFamilyStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiFamilyStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiFamilyStatusOrderBy>>;
  where?: InputMaybe<ApiFamilyStatusBoolExp>;
};


export type ApiSubscriptionRootApiFamilyStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiGenderArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiSubscriptionRootApiGenderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiSubscriptionRootApiGenderByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiHouseholderArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderByPkArgs = {
  family_id: Scalars['uuid'];
};


export type ApiSubscriptionRootApiHouseholderStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholderStatusBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiHouseholderStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholderStatusBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiMemberArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiSubscriptionRootApiMemberAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiSubscriptionRootApiMemberByPkArgs = {
  id: Scalars['uuid'];
};


export type ApiSubscriptionRootApiMemberStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberStatusOrderBy>>;
  where?: InputMaybe<ApiMemberStatusBoolExp>;
};


export type ApiSubscriptionRootApiMemberStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiMemberStatusOrderBy>>;
  where?: InputMaybe<ApiMemberStatusBoolExp>;
};


export type ApiSubscriptionRootApiMemberStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiNationalityArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiSubscriptionRootApiNationalityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiSubscriptionRootApiNationalityByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiSubscriptionRootApiProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiSubscriptionRootApiProjectByPkArgs = {
  id: Scalars['uuid'];
};


export type ApiSubscriptionRootApiProjectStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiSubscriptionRootApiProjectStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiSubscriptionRootApiProjectStatusByPkArgs = {
  value: Scalars['String'];
};


export type ApiSubscriptionRootApiReligionArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiSubscriptionRootApiReligionAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiSubscriptionRootApiReligionByPkArgs = {
  value: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type ApiTimestamptzComparisonExp = {
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
export type ApiUuidComparisonExp = {
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

export type ApiCreateFamilyMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type ApiCreateFamilyMutation = { __typename?: 'mutation_root', insert_family_one?: { __typename?: 'family', id: string, code?: string | null, name: string } | null };

export type ApiCreateProjectMutationVariables = Exact<{
  input: ApiProjectInsertInput;
}>;


export type ApiCreateProjectMutation = { __typename?: 'mutation_root', insert_project_one?: { __typename?: 'project', id: string, name: string, description?: string | null, status: ApiProjectStatusEnum } | null };

export type ApiDeleteFamilyMutationMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ApiDeleteFamilyMutationMutation = { __typename?: 'mutation_root', delete_family_by_pk?: { __typename?: 'family', id: string, name: string } | null };

export type ApiMemberMutationVariables = Exact<{
  input: ApiMemberInsertInput;
}>;


export type ApiMemberMutation = { __typename?: 'mutation_root', insert_member_one?: { __typename?: 'member', id: string, name: string, surname?: string | null, father_name?: string | null, nationality?: string | null, gender?: ApiGenderEnum | null, religion?: string | null, status: ApiMemberStatusEnum } | null };

export type ApiUpsertHouseholderMutationVariables = Exact<{
  input: ApiHouseholderInsertInput;
}>;


export type ApiUpsertHouseholderMutation = { __typename?: 'mutation_root', insert_householder_one?: { __typename?: 'householder', city?: ApiCityEnum | null, gender?: ApiGenderEnum | null, dob?: string | null, national_id?: string | null, father_name?: string | null, name: string, nationality?: ApiNationalityEnum | null, religion?: ApiReligionEnum | null, surname?: string | null, status: ApiHouseholderStatusEnum } | null };

export type ApiMemberListQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ApiMemberListQuery = { __typename?: 'query_root', member_by_pk?: { __typename?: 'member', id: any, family_id: any, father_name?: string | null, gender?: ApiGenderEnum | null, name: string, surname?: string | null, religion?: string | null, status: ApiMemberStatusEnum, nationality?: string | null } | null };

export type ApiFamilyListQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiFamilyListQuery = { __typename?: 'query_root', family: Array<{ __typename?: 'family', id: string, name: string, severity: ApiFamilySeverityEnum, status: ApiFamilyStatusEnum }> };

export type ApiFamilyQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ApiFamilyQuery = { __typename?: 'query_root', family_by_pk?: { __typename?: 'family', id: string, name: string, status: ApiFamilyStatusEnum, severity: ApiFamilySeverityEnum, code?: string | null } | null };

export type ApiHouseholderQueryVariables = Exact<{
  family_id: Scalars['uuid'];
}>;


export type ApiHouseholderQuery = { __typename?: 'query_root', householder_by_pk?: { __typename?: 'householder', name: string, father_name?: string | null, surname?: string | null, nationality?: ApiNationalityEnum | null, religion?: ApiReligionEnum | null, city?: ApiCityEnum | null, gender?: ApiGenderEnum | null, status: ApiHouseholderStatusEnum, national_id?: string | null, dob?: string | null } | null };

export type ApiProjectListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ApiProjectListQuery = { __typename?: 'query_root', project_aggregate: { __typename?: 'project_aggregate', nodes: Array<{ __typename?: 'project', name: string, id: string }> } };


export const ApiCreateFamilyDocument = gql`
    mutation CreateFamily($name: String!) {
  insert_family_one(object: {name: $name}) {
    id
    code
    name
  }
}
    `;
export type ApiCreateFamilyMutationFn = Apollo.MutationFunction<ApiCreateFamilyMutation, ApiCreateFamilyMutationVariables>;
export type ApiCreateFamilyMutationResult = Apollo.MutationResult<ApiCreateFamilyMutation>;
export type ApiCreateFamilyMutationOptions = Apollo.BaseMutationOptions<ApiCreateFamilyMutation, ApiCreateFamilyMutationVariables>;
export const ApiCreateProjectDocument = gql`
    mutation CreateProject($input: project_insert_input!) {
  insert_project_one(object: $input) {
    id
    name
    description
    status
  }
}
    `;
export type ApiCreateProjectMutationFn = Apollo.MutationFunction<ApiCreateProjectMutation, ApiCreateProjectMutationVariables>;
export type ApiCreateProjectMutationResult = Apollo.MutationResult<ApiCreateProjectMutation>;
export type ApiCreateProjectMutationOptions = Apollo.BaseMutationOptions<ApiCreateProjectMutation, ApiCreateProjectMutationVariables>;
export const ApiDeleteFamilyMutationDocument = gql`
    mutation DeleteFamilyMutation($id: uuid!) {
  delete_family_by_pk(id: $id) {
    id
    name
  }
}
    `;
export type ApiDeleteFamilyMutationMutationFn = Apollo.MutationFunction<ApiDeleteFamilyMutationMutation, ApiDeleteFamilyMutationMutationVariables>;
export type ApiDeleteFamilyMutationMutationResult = Apollo.MutationResult<ApiDeleteFamilyMutationMutation>;
export type ApiDeleteFamilyMutationMutationOptions = Apollo.BaseMutationOptions<ApiDeleteFamilyMutationMutation, ApiDeleteFamilyMutationMutationVariables>;
export const ApiMemberDocument = gql`
    mutation Member($input: member_insert_input!) {
  insert_member_one(object: $input, on_conflict: {constraint: member_pkey}) {
    id
    name
    surname
    father_name
    nationality
    gender
    religion
    status
  }
}
    `;
export type ApiMemberMutationFn = Apollo.MutationFunction<ApiMemberMutation, ApiMemberMutationVariables>;
export type ApiMemberMutationResult = Apollo.MutationResult<ApiMemberMutation>;
export type ApiMemberMutationOptions = Apollo.BaseMutationOptions<ApiMemberMutation, ApiMemberMutationVariables>;
export const ApiUpsertHouseholderDocument = gql`
    mutation UpsertHouseholder($input: householder_insert_input!) {
  insert_householder_one(
    object: $input
    on_conflict: {constraint: householder_family_id_key, update_columns: [city, gender, dob, father_name, name, nationality, religion, surname, national_id]}
  ) {
    city
    gender
    dob
    national_id
    father_name
    name
    nationality
    religion
    surname
    status
  }
}
    `;
export type ApiUpsertHouseholderMutationFn = Apollo.MutationFunction<ApiUpsertHouseholderMutation, ApiUpsertHouseholderMutationVariables>;
export type ApiUpsertHouseholderMutationResult = Apollo.MutationResult<ApiUpsertHouseholderMutation>;
export type ApiUpsertHouseholderMutationOptions = Apollo.BaseMutationOptions<ApiUpsertHouseholderMutation, ApiUpsertHouseholderMutationVariables>;
export const ApiMemberListDocument = gql`
    query MemberList($id: uuid!) {
  member_by_pk(id: $id) {
    id
    family_id
    father_name
    gender
    name
    surname
    religion
    status
    nationality
  }
}
    `;
export type ApiMemberListQueryResult = Apollo.QueryResult<ApiMemberListQuery, ApiMemberListQueryVariables>;
export const ApiFamilyListDocument = gql`
    query FamilyList {
  family {
    id
    name
    severity
    status
  }
}
    `;
export type ApiFamilyListQueryResult = Apollo.QueryResult<ApiFamilyListQuery, ApiFamilyListQueryVariables>;
export const ApiFamilyDocument = gql`
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
export type ApiFamilyQueryResult = Apollo.QueryResult<ApiFamilyQuery, ApiFamilyQueryVariables>;
export const ApiHouseholderDocument = gql`
    query Householder($family_id: uuid!) {
  householder_by_pk(family_id: $family_id) {
    name
    father_name
    surname
    nationality
    religion
    city
    gender
    status
    national_id
    dob
  }
}
    `;
export type ApiHouseholderQueryResult = Apollo.QueryResult<ApiHouseholderQuery, ApiHouseholderQueryVariables>;
export const ApiProjectListDocument = gql`
    query ProjectList($offset: Int, $limit: Int) {
  project_aggregate(offset: $offset, limit: $limit) {
    nodes {
      name
      id
    }
  }
}
    `;
export type ApiProjectListQueryResult = Apollo.QueryResult<ApiProjectListQuery, ApiProjectListQueryVariables>;