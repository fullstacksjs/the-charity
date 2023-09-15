/* This file is generated, do not edit! */
/* eslint-disable */
/* cspell:disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: string; output: string; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type ApiIntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type ApiStringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "city" */
export type ApiCity = {
  __typename?: 'city';
  value: Scalars['String']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiCityMaxFields>;
  min?: Maybe<ApiCityMinFields>;
};


/** aggregate fields of "city" */
export type ApiCityAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiCitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "value" */
  CityPkey = 'city_pkey'
}

export enum CityEnum {
  Tehran = 'tehran',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "city_enum". All fields are combined with logical 'AND'. */
export type CityEnumComparisonExp = {
  _eq?: InputMaybe<CityEnum>;
  _in?: InputMaybe<Array<CityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<CityEnum>;
  _nin?: InputMaybe<Array<CityEnum>>;
};

/** input type for inserting data into table "city" */
export type ApiCityInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiCityMaxFields = {
  __typename?: 'city_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiCityMinFields = {
  __typename?: 'city_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "city" */
export type ApiCityMutationResponse = {
  __typename?: 'city_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  value: Scalars['String']['input'];
};

/** select columns of table "city" */
export enum ApiCitySelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "city" */
export type ApiCitySetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "city" */
export type ApiCityStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiCityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiCityStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "city" */
export enum ApiCityUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiCityUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiCitySetInput>;
  /** filter the rows which have to be updated */
  where: ApiCityBoolExp;
};

/** ordering argument of a cursor */
export enum ApiCursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type ApiDateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "gender" */
export type ApiGender = {
  __typename?: 'gender';
  value: Scalars['String']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiGenderMaxFields>;
  min?: Maybe<ApiGenderMinFields>;
};


/** aggregate fields of "gender" */
export type ApiGenderAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiGenderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "value" */
  GenderPkey = 'gender_pkey'
}

export enum GenderEnum {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "gender_enum". All fields are combined with logical 'AND'. */
export type GenderEnumComparisonExp = {
  _eq?: InputMaybe<GenderEnum>;
  _in?: InputMaybe<Array<GenderEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<GenderEnum>;
  _nin?: InputMaybe<Array<GenderEnum>>;
};

/** input type for inserting data into table "gender" */
export type ApiGenderInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiGenderMaxFields = {
  __typename?: 'gender_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiGenderMinFields = {
  __typename?: 'gender_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "gender" */
export type ApiGenderMutationResponse = {
  __typename?: 'gender_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  value: Scalars['String']['input'];
};

/** select columns of table "gender" */
export enum ApiGenderSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "gender" */
export type ApiGenderSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "gender" */
export type ApiGenderStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiGenderStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiGenderStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "gender" */
export enum ApiGenderUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiGenderUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiGenderSetInput>;
  /** filter the rows which have to be updated */
  where: ApiGenderBoolExp;
};

/** columns and relationships of "household" */
export type ApiHousehold = {
  __typename?: 'household';
  /** A computed field, executes function "format_code" */
  code?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  db_code: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  severity: HouseholdSeverityEnum;
  status: HouseholdStatusEnum;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "household" */
export type ApiHouseholdAggregate = {
  __typename?: 'household_aggregate';
  aggregate?: Maybe<ApiHouseholdAggregateFields>;
  nodes: Array<ApiHousehold>;
};

/** aggregate fields of "household" */
export type ApiHouseholdAggregateFields = {
  __typename?: 'household_aggregate_fields';
  avg?: Maybe<ApiHouseholdAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHouseholdMaxFields>;
  min?: Maybe<ApiHouseholdMinFields>;
  stddev?: Maybe<ApiHouseholdStddevFields>;
  stddev_pop?: Maybe<ApiHouseholdStddevPopFields>;
  stddev_samp?: Maybe<ApiHouseholdStddevSampFields>;
  sum?: Maybe<ApiHouseholdSumFields>;
  var_pop?: Maybe<ApiHouseholdVarPopFields>;
  var_samp?: Maybe<ApiHouseholdVarSampFields>;
  variance?: Maybe<ApiHouseholdVarianceFields>;
};


/** aggregate fields of "household" */
export type ApiHouseholdAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholdSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ApiHouseholdAvgFields = {
  __typename?: 'household_avg_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "household". All fields are combined with a logical 'AND'. */
export type ApiHouseholdBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholdBoolExp>>;
  _not?: InputMaybe<ApiHouseholdBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholdBoolExp>>;
  code?: InputMaybe<ApiStringComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  db_code?: InputMaybe<ApiIntComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  members_count?: InputMaybe<ApiIntComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  severity?: InputMaybe<HouseholdSeverityEnumComparisonExp>;
  status?: InputMaybe<HouseholdStatusEnumComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "household" */
export enum ApiHouseholdConstraint {
  /** unique or primary key constraint on columns "db_code" */
  HouseholdCodeKey = 'household_code_key',
  /** unique or primary key constraint on columns "id" */
  HouseholdPkey = 'household_pkey'
}

/** input type for incrementing numeric columns in table "household" */
export type ApiHouseholdIncInput = {
  db_code?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "household" */
export type ApiHouseholdInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  db_code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<HouseholdSeverityEnum>;
  status?: InputMaybe<HouseholdStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ApiHouseholdMaxFields = {
  __typename?: 'household_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  db_code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ApiHouseholdMinFields = {
  __typename?: 'household_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  db_code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "household" */
export type ApiHouseholdMutationResponse = {
  __typename?: 'household_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHousehold>;
};

/** input type for inserting object relation for remote table "household" */
export type ApiHouseholdObjRelInsertInput = {
  data: ApiHouseholdInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiHouseholdOnConflict>;
};

/** on_conflict condition type for table "household" */
export type ApiHouseholdOnConflict = {
  constraint: ApiHouseholdConstraint;
  update_columns?: Array<ApiHouseholdUpdateColumn>;
  where?: InputMaybe<ApiHouseholdBoolExp>;
};

/** Ordering options when selecting data from "household". */
export type ApiHouseholdOrderBy = {
  code?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  db_code?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  members_count?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  severity?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: household */
export type ApiHouseholdPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** Relation between projects and households */
export type ApiHouseholdProject = {
  __typename?: 'household_project';
  count: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  household: ApiHousehold;
  household_id: Scalars['uuid']['output'];
  /** An object relationship */
  project: ApiProject;
  project_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "household_project" */
export type ApiHouseholdProjectAggregate = {
  __typename?: 'household_project_aggregate';
  aggregate?: Maybe<ApiHouseholdProjectAggregateFields>;
  nodes: Array<ApiHouseholdProject>;
};

export type ApiHouseholdProjectAggregateBoolExp = {
  count?: InputMaybe<ApiHouseholdProjectAggregateBoolExpCount>;
};

export type ApiHouseholdProjectAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiHouseholdProjectBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "household_project" */
export type ApiHouseholdProjectAggregateFields = {
  __typename?: 'household_project_aggregate_fields';
  avg?: Maybe<ApiHouseholdProjectAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHouseholdProjectMaxFields>;
  min?: Maybe<ApiHouseholdProjectMinFields>;
  stddev?: Maybe<ApiHouseholdProjectStddevFields>;
  stddev_pop?: Maybe<ApiHouseholdProjectStddevPopFields>;
  stddev_samp?: Maybe<ApiHouseholdProjectStddevSampFields>;
  sum?: Maybe<ApiHouseholdProjectSumFields>;
  var_pop?: Maybe<ApiHouseholdProjectVarPopFields>;
  var_samp?: Maybe<ApiHouseholdProjectVarSampFields>;
  variance?: Maybe<ApiHouseholdProjectVarianceFields>;
};


/** aggregate fields of "household_project" */
export type ApiHouseholdProjectAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "household_project" */
export type ApiHouseholdProjectAggregateOrderBy = {
  avg?: InputMaybe<ApiHouseholdProjectAvgOrderBy>;
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiHouseholdProjectMaxOrderBy>;
  min?: InputMaybe<ApiHouseholdProjectMinOrderBy>;
  stddev?: InputMaybe<ApiHouseholdProjectStddevOrderBy>;
  stddev_pop?: InputMaybe<ApiHouseholdProjectStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ApiHouseholdProjectStddevSampOrderBy>;
  sum?: InputMaybe<ApiHouseholdProjectSumOrderBy>;
  var_pop?: InputMaybe<ApiHouseholdProjectVarPopOrderBy>;
  var_samp?: InputMaybe<ApiHouseholdProjectVarSampOrderBy>;
  variance?: InputMaybe<ApiHouseholdProjectVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household_project" */
export type ApiHouseholdProjectArrRelInsertInput = {
  data: Array<ApiHouseholdProjectInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiHouseholdProjectOnConflict>;
};

/** aggregate avg on columns */
export type ApiHouseholdProjectAvgFields = {
  __typename?: 'household_project_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "household_project" */
export type ApiHouseholdProjectAvgOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** Boolean expression to filter rows from the table "household_project". All fields are combined with a logical 'AND'. */
export type ApiHouseholdProjectBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholdProjectBoolExp>>;
  _not?: InputMaybe<ApiHouseholdProjectBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholdProjectBoolExp>>;
  count?: InputMaybe<ApiIntComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  household?: InputMaybe<ApiHouseholdBoolExp>;
  household_id?: InputMaybe<ApiUuidComparisonExp>;
  project?: InputMaybe<ApiProjectBoolExp>;
  project_id?: InputMaybe<ApiUuidComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "household_project" */
export enum ApiHouseholdProjectConstraint {
  /** unique or primary key constraint on columns "project_id", "household_id" */
  HouseholdProjectPkey = 'household_project_pkey'
}

/** input type for incrementing numeric columns in table "household_project" */
export type ApiHouseholdProjectIncInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "household_project" */
export type ApiHouseholdProjectInsertInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  household?: InputMaybe<ApiHouseholdObjRelInsertInput>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  project?: InputMaybe<ApiProjectObjRelInsertInput>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ApiHouseholdProjectMaxFields = {
  __typename?: 'household_project_max_fields';
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  project_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "household_project" */
export type ApiHouseholdProjectMaxOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
  project_id?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiHouseholdProjectMinFields = {
  __typename?: 'household_project_min_fields';
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  project_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "household_project" */
export type ApiHouseholdProjectMinOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
  project_id?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "household_project" */
export type ApiHouseholdProjectMutationResponse = {
  __typename?: 'household_project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHouseholdProject>;
};

/** on_conflict condition type for table "household_project" */
export type ApiHouseholdProjectOnConflict = {
  constraint: ApiHouseholdProjectConstraint;
  update_columns?: Array<ApiHouseholdProjectUpdateColumn>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};

/** Ordering options when selecting data from "household_project". */
export type ApiHouseholdProjectOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  household?: InputMaybe<ApiHouseholdOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
  project?: InputMaybe<ApiProjectOrderBy>;
  project_id?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: household_project */
export type ApiHouseholdProjectPkColumnsInput = {
  household_id: Scalars['uuid']['input'];
  project_id: Scalars['uuid']['input'];
};

/** select columns of table "household_project" */
export enum ApiHouseholdProjectSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "household_project" */
export type ApiHouseholdProjectSetInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type ApiHouseholdProjectStddevFields = {
  __typename?: 'household_project_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "household_project" */
export type ApiHouseholdProjectStddevOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate stddev_pop on columns */
export type ApiHouseholdProjectStddevPopFields = {
  __typename?: 'household_project_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "household_project" */
export type ApiHouseholdProjectStddevPopOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate stddev_samp on columns */
export type ApiHouseholdProjectStddevSampFields = {
  __typename?: 'household_project_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "household_project" */
export type ApiHouseholdProjectStddevSampOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** Streaming cursor of the table "household_project" */
export type ApiHouseholdProjectStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiHouseholdProjectStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiHouseholdProjectStreamCursorValueInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type ApiHouseholdProjectSumFields = {
  __typename?: 'household_project_sum_fields';
  count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "household_project" */
export type ApiHouseholdProjectSumOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** update columns of table "household_project" */
export enum ApiHouseholdProjectUpdateColumn {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ApiHouseholdProjectUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ApiHouseholdProjectIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHouseholdProjectSetInput>;
  /** filter the rows which have to be updated */
  where: ApiHouseholdProjectBoolExp;
};

/** aggregate var_pop on columns */
export type ApiHouseholdProjectVarPopFields = {
  __typename?: 'household_project_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "household_project" */
export type ApiHouseholdProjectVarPopOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate var_samp on columns */
export type ApiHouseholdProjectVarSampFields = {
  __typename?: 'household_project_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "household_project" */
export type ApiHouseholdProjectVarSampOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** aggregate variance on columns */
export type ApiHouseholdProjectVarianceFields = {
  __typename?: 'household_project_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "household_project" */
export type ApiHouseholdProjectVarianceOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
};

/** select columns of table "household" */
export enum ApiHouseholdSelectColumn {
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

/** input type for updating data in table "household" */
export type ApiHouseholdSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  db_code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<HouseholdSeverityEnum>;
  status?: InputMaybe<HouseholdStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "household_severity" */
export type ApiHouseholdSeverity = {
  __typename?: 'household_severity';
  description?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "household_severity" */
export type ApiHouseholdSeverityAggregate = {
  __typename?: 'household_severity_aggregate';
  aggregate?: Maybe<ApiHouseholdSeverityAggregateFields>;
  nodes: Array<ApiHouseholdSeverity>;
};

/** aggregate fields of "household_severity" */
export type ApiHouseholdSeverityAggregateFields = {
  __typename?: 'household_severity_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHouseholdSeverityMaxFields>;
  min?: Maybe<ApiHouseholdSeverityMinFields>;
};


/** aggregate fields of "household_severity" */
export type ApiHouseholdSeverityAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholdSeveritySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "household_severity". All fields are combined with a logical 'AND'. */
export type ApiHouseholdSeverityBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholdSeverityBoolExp>>;
  _not?: InputMaybe<ApiHouseholdSeverityBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholdSeverityBoolExp>>;
  description?: InputMaybe<ApiStringComparisonExp>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "household_severity" */
export enum ApiHouseholdSeverityConstraint {
  /** unique or primary key constraint on columns "value" */
  HouseholdSeverityPkey = 'household_severity_pkey'
}

export enum HouseholdSeverityEnum {
  Critical = 'Critical',
  Normal = 'Normal'
}

/** Boolean expression to compare columns of type "household_severity_enum". All fields are combined with logical 'AND'. */
export type HouseholdSeverityEnumComparisonExp = {
  _eq?: InputMaybe<HouseholdSeverityEnum>;
  _in?: InputMaybe<Array<HouseholdSeverityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<HouseholdSeverityEnum>;
  _nin?: InputMaybe<Array<HouseholdSeverityEnum>>;
};

/** input type for inserting data into table "household_severity" */
export type ApiHouseholdSeverityInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiHouseholdSeverityMaxFields = {
  __typename?: 'household_severity_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiHouseholdSeverityMinFields = {
  __typename?: 'household_severity_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "household_severity" */
export type ApiHouseholdSeverityMutationResponse = {
  __typename?: 'household_severity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHouseholdSeverity>;
};

/** on_conflict condition type for table "household_severity" */
export type ApiHouseholdSeverityOnConflict = {
  constraint: ApiHouseholdSeverityConstraint;
  update_columns?: Array<ApiHouseholdSeverityUpdateColumn>;
  where?: InputMaybe<ApiHouseholdSeverityBoolExp>;
};

/** Ordering options when selecting data from "household_severity". */
export type ApiHouseholdSeverityOrderBy = {
  description?: InputMaybe<ApiOrderBy>;
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: household_severity */
export type ApiHouseholdSeverityPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "household_severity" */
export enum ApiHouseholdSeveritySelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "household_severity" */
export type ApiHouseholdSeveritySetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "household_severity" */
export type ApiHouseholdSeverityStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiHouseholdSeverityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiHouseholdSeverityStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "household_severity" */
export enum ApiHouseholdSeverityUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type ApiHouseholdSeverityUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHouseholdSeveritySetInput>;
  /** filter the rows which have to be updated */
  where: ApiHouseholdSeverityBoolExp;
};

/** columns and relationships of "household_status" */
export type ApiHouseholdStatus = {
  __typename?: 'household_status';
  description?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "household_status" */
export type ApiHouseholdStatusAggregate = {
  __typename?: 'household_status_aggregate';
  aggregate?: Maybe<ApiHouseholdStatusAggregateFields>;
  nodes: Array<ApiHouseholdStatus>;
};

/** aggregate fields of "household_status" */
export type ApiHouseholdStatusAggregateFields = {
  __typename?: 'household_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHouseholdStatusMaxFields>;
  min?: Maybe<ApiHouseholdStatusMinFields>;
};


/** aggregate fields of "household_status" */
export type ApiHouseholdStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholdStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "household_status". All fields are combined with a logical 'AND'. */
export type ApiHouseholdStatusBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholdStatusBoolExp>>;
  _not?: InputMaybe<ApiHouseholdStatusBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholdStatusBoolExp>>;
  description?: InputMaybe<ApiStringComparisonExp>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "household_status" */
export enum ApiHouseholdStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  HouseholdStatusPkey = 'household_status_pkey'
}

export enum HouseholdStatusEnum {
  Completed = 'Completed',
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "household_status_enum". All fields are combined with logical 'AND'. */
export type HouseholdStatusEnumComparisonExp = {
  _eq?: InputMaybe<HouseholdStatusEnum>;
  _in?: InputMaybe<Array<HouseholdStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<HouseholdStatusEnum>;
  _nin?: InputMaybe<Array<HouseholdStatusEnum>>;
};

/** input type for inserting data into table "household_status" */
export type ApiHouseholdStatusInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiHouseholdStatusMaxFields = {
  __typename?: 'household_status_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiHouseholdStatusMinFields = {
  __typename?: 'household_status_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "household_status" */
export type ApiHouseholdStatusMutationResponse = {
  __typename?: 'household_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHouseholdStatus>;
};

/** on_conflict condition type for table "household_status" */
export type ApiHouseholdStatusOnConflict = {
  constraint: ApiHouseholdStatusConstraint;
  update_columns?: Array<ApiHouseholdStatusUpdateColumn>;
  where?: InputMaybe<ApiHouseholdStatusBoolExp>;
};

/** Ordering options when selecting data from "household_status". */
export type ApiHouseholdStatusOrderBy = {
  description?: InputMaybe<ApiOrderBy>;
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: household_status */
export type ApiHouseholdStatusPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "household_status" */
export enum ApiHouseholdStatusSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "household_status" */
export type ApiHouseholdStatusSetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "household_status" */
export type ApiHouseholdStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiHouseholdStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiHouseholdStatusStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "household_status" */
export enum ApiHouseholdStatusUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type ApiHouseholdStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHouseholdStatusSetInput>;
  /** filter the rows which have to be updated */
  where: ApiHouseholdStatusBoolExp;
};

/** aggregate stddev on columns */
export type ApiHouseholdStddevFields = {
  __typename?: 'household_stddev_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ApiHouseholdStddevPopFields = {
  __typename?: 'household_stddev_pop_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ApiHouseholdStddevSampFields = {
  __typename?: 'household_stddev_samp_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "household" */
export type ApiHouseholdStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiHouseholdStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiHouseholdStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  db_code?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<HouseholdSeverityEnum>;
  status?: InputMaybe<HouseholdStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type ApiHouseholdSumFields = {
  __typename?: 'household_sum_fields';
  db_code?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "household" */
export enum ApiHouseholdUpdateColumn {
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

export type ApiHouseholdUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ApiHouseholdIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHouseholdSetInput>;
  /** filter the rows which have to be updated */
  where: ApiHouseholdBoolExp;
};

/** aggregate var_pop on columns */
export type ApiHouseholdVarPopFields = {
  __typename?: 'household_var_pop_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ApiHouseholdVarSampFields = {
  __typename?: 'household_var_samp_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ApiHouseholdVarianceFields = {
  __typename?: 'household_variance_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "householder" */
export type ApiHouseholder = {
  __typename?: 'householder';
  city?: Maybe<CityEnum>;
  created_at: Scalars['timestamptz']['output'];
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<GenderEnum>;
  household_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  national_id?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<NationalityEnum>;
  religion?: Maybe<ReligionEnum>;
  /** A computed field, executes function "get_householder_status" */
  status?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHouseholderMaxFields>;
  min?: Maybe<ApiHouseholderMinFields>;
};


/** aggregate fields of "householder" */
export type ApiHouseholderAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "householder". All fields are combined with a logical 'AND'. */
export type ApiHouseholderBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholderBoolExp>>;
  _not?: InputMaybe<ApiHouseholderBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholderBoolExp>>;
  city?: InputMaybe<CityEnumComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  dob?: InputMaybe<ApiDateComparisonExp>;
  father_name?: InputMaybe<ApiStringComparisonExp>;
  gender?: InputMaybe<GenderEnumComparisonExp>;
  household_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  national_id?: InputMaybe<ApiStringComparisonExp>;
  nationality?: InputMaybe<NationalityEnumComparisonExp>;
  religion?: InputMaybe<ReligionEnumComparisonExp>;
  status?: InputMaybe<ApiStringComparisonExp>;
  surname?: InputMaybe<ApiStringComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "householder" */
export enum ApiHouseholderConstraint {
  /** unique or primary key constraint on columns "household_id" */
  HouseholderHouseholdIdKey = 'householder_household_id_key',
  /** unique or primary key constraint on columns "id" */
  HouseholderIdKey = 'householder_id_key',
  /** unique or primary key constraint on columns "household_id" */
  HouseholderPkey = 'householder_pkey'
}

/** input type for inserting data into table "householder" */
export type ApiHouseholderInsertInput = {
  city?: InputMaybe<CityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  religion?: InputMaybe<ReligionEnum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ApiHouseholderMaxFields = {
  __typename?: 'householder_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_id?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ApiHouseholderMinFields = {
  __typename?: 'householder_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_id?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "householder" */
export type ApiHouseholderMutationResponse = {
  __typename?: 'householder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  father_name?: InputMaybe<ApiOrderBy>;
  gender?: InputMaybe<ApiOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
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
  household_id: Scalars['uuid']['input'];
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
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HouseholdId = 'household_id',
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
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "householder" */
export type ApiHouseholderSetInput = {
  city?: InputMaybe<CityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  religion?: InputMaybe<ReligionEnum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "householder" */
export type ApiHouseholderStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiHouseholderStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiHouseholderStreamCursorValueInput = {
  city?: InputMaybe<CityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  religion?: InputMaybe<ReligionEnum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "householder" */
export enum ApiHouseholderUpdateColumn {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HouseholdId = 'household_id',
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
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ApiHouseholderUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHouseholderSetInput>;
  /** filter the rows which have to be updated */
  where: ApiHouseholderBoolExp;
};

/** columns and relationships of "member" */
export type ApiMember = {
  __typename?: 'member';
  created_at: Scalars['timestamptz']['output'];
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<GenderEnum>;
  /** An object relationship */
  household: ApiHousehold;
  household_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  national_id?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<NationalityEnum>;
  religion?: Maybe<ReligionEnum>;
  /** A computed field, executes function "get_member_status" */
  status?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiMemberMaxFields>;
  min?: Maybe<ApiMemberMinFields>;
};


/** aggregate fields of "member" */
export type ApiMemberAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiMemberSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type ApiMemberBoolExp = {
  _and?: InputMaybe<Array<ApiMemberBoolExp>>;
  _not?: InputMaybe<ApiMemberBoolExp>;
  _or?: InputMaybe<Array<ApiMemberBoolExp>>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  dob?: InputMaybe<ApiDateComparisonExp>;
  father_name?: InputMaybe<ApiStringComparisonExp>;
  gender?: InputMaybe<GenderEnumComparisonExp>;
  household?: InputMaybe<ApiHouseholdBoolExp>;
  household_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  national_id?: InputMaybe<ApiStringComparisonExp>;
  nationality?: InputMaybe<NationalityEnumComparisonExp>;
  religion?: InputMaybe<ReligionEnumComparisonExp>;
  status?: InputMaybe<ApiStringComparisonExp>;
  surname?: InputMaybe<ApiStringComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "member" */
export enum ApiMemberConstraint {
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** input type for inserting data into table "member" */
export type ApiMemberInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  household?: InputMaybe<ApiHouseholdObjRelInsertInput>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  religion?: InputMaybe<ReligionEnum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ApiMemberMaxFields = {
  __typename?: 'member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_id?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ApiMemberMinFields = {
  __typename?: 'member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_id?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "member" */
export type ApiMemberMutationResponse = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  father_name?: InputMaybe<ApiOrderBy>;
  gender?: InputMaybe<ApiOrderBy>;
  household?: InputMaybe<ApiHouseholdOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
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
  id: Scalars['uuid']['input'];
};

/** select columns of table "member" */
export enum ApiMemberSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HouseholdId = 'household_id',
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
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "member" */
export type ApiMemberSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  religion?: InputMaybe<ReligionEnum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "member" */
export type ApiMemberStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiMemberStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiMemberStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  religion?: InputMaybe<ReligionEnum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "member" */
export enum ApiMemberUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dob = 'dob',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HouseholdId = 'household_id',
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
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ApiMemberUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiMemberSetInput>;
  /** filter the rows which have to be updated */
  where: ApiMemberBoolExp;
};

/** mutation root */
export type ApiMutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "city" */
  delete_city?: Maybe<ApiCityMutationResponse>;
  /** delete single row from the table: "city" */
  delete_city_by_pk?: Maybe<ApiCity>;
  /** delete data from the table: "gender" */
  delete_gender?: Maybe<ApiGenderMutationResponse>;
  /** delete single row from the table: "gender" */
  delete_gender_by_pk?: Maybe<ApiGender>;
  /** delete data from the table: "household" */
  delete_household?: Maybe<ApiHouseholdMutationResponse>;
  /** delete single row from the table: "household" */
  delete_household_by_pk?: Maybe<ApiHousehold>;
  /** delete data from the table: "household_project" */
  delete_household_project?: Maybe<ApiHouseholdProjectMutationResponse>;
  /** delete single row from the table: "household_project" */
  delete_household_project_by_pk?: Maybe<ApiHouseholdProject>;
  /** delete data from the table: "household_severity" */
  delete_household_severity?: Maybe<ApiHouseholdSeverityMutationResponse>;
  /** delete single row from the table: "household_severity" */
  delete_household_severity_by_pk?: Maybe<ApiHouseholdSeverity>;
  /** delete data from the table: "household_status" */
  delete_household_status?: Maybe<ApiHouseholdStatusMutationResponse>;
  /** delete single row from the table: "household_status" */
  delete_household_status_by_pk?: Maybe<ApiHouseholdStatus>;
  /** delete data from the table: "householder" */
  delete_householder?: Maybe<ApiHouseholderMutationResponse>;
  /** delete single row from the table: "householder" */
  delete_householder_by_pk?: Maybe<ApiHouseholder>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<ApiMemberMutationResponse>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<ApiMember>;
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
  /** insert data into the table: "gender" */
  insert_gender?: Maybe<ApiGenderMutationResponse>;
  /** insert a single row into the table: "gender" */
  insert_gender_one?: Maybe<ApiGender>;
  /** insert data into the table: "household" */
  insert_household?: Maybe<ApiHouseholdMutationResponse>;
  /** insert a single row into the table: "household" */
  insert_household_one?: Maybe<ApiHousehold>;
  /** insert data into the table: "household_project" */
  insert_household_project?: Maybe<ApiHouseholdProjectMutationResponse>;
  /** insert a single row into the table: "household_project" */
  insert_household_project_one?: Maybe<ApiHouseholdProject>;
  /** insert data into the table: "household_severity" */
  insert_household_severity?: Maybe<ApiHouseholdSeverityMutationResponse>;
  /** insert a single row into the table: "household_severity" */
  insert_household_severity_one?: Maybe<ApiHouseholdSeverity>;
  /** insert data into the table: "household_status" */
  insert_household_status?: Maybe<ApiHouseholdStatusMutationResponse>;
  /** insert a single row into the table: "household_status" */
  insert_household_status_one?: Maybe<ApiHouseholdStatus>;
  /** insert data into the table: "householder" */
  insert_householder?: Maybe<ApiHouseholderMutationResponse>;
  /** insert a single row into the table: "householder" */
  insert_householder_one?: Maybe<ApiHouseholder>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<ApiMemberMutationResponse>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<ApiMember>;
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
  /** update multiples rows of table: "city" */
  update_city_many?: Maybe<Array<Maybe<ApiCityMutationResponse>>>;
  /** update data of the table: "gender" */
  update_gender?: Maybe<ApiGenderMutationResponse>;
  /** update single row of the table: "gender" */
  update_gender_by_pk?: Maybe<ApiGender>;
  /** update multiples rows of table: "gender" */
  update_gender_many?: Maybe<Array<Maybe<ApiGenderMutationResponse>>>;
  /** update data of the table: "household" */
  update_household?: Maybe<ApiHouseholdMutationResponse>;
  /** update single row of the table: "household" */
  update_household_by_pk?: Maybe<ApiHousehold>;
  /** update multiples rows of table: "household" */
  update_household_many?: Maybe<Array<Maybe<ApiHouseholdMutationResponse>>>;
  /** update data of the table: "household_project" */
  update_household_project?: Maybe<ApiHouseholdProjectMutationResponse>;
  /** update single row of the table: "household_project" */
  update_household_project_by_pk?: Maybe<ApiHouseholdProject>;
  /** update multiples rows of table: "household_project" */
  update_household_project_many?: Maybe<Array<Maybe<ApiHouseholdProjectMutationResponse>>>;
  /** update data of the table: "household_severity" */
  update_household_severity?: Maybe<ApiHouseholdSeverityMutationResponse>;
  /** update single row of the table: "household_severity" */
  update_household_severity_by_pk?: Maybe<ApiHouseholdSeverity>;
  /** update multiples rows of table: "household_severity" */
  update_household_severity_many?: Maybe<Array<Maybe<ApiHouseholdSeverityMutationResponse>>>;
  /** update data of the table: "household_status" */
  update_household_status?: Maybe<ApiHouseholdStatusMutationResponse>;
  /** update single row of the table: "household_status" */
  update_household_status_by_pk?: Maybe<ApiHouseholdStatus>;
  /** update multiples rows of table: "household_status" */
  update_household_status_many?: Maybe<Array<Maybe<ApiHouseholdStatusMutationResponse>>>;
  /** update data of the table: "householder" */
  update_householder?: Maybe<ApiHouseholderMutationResponse>;
  /** update single row of the table: "householder" */
  update_householder_by_pk?: Maybe<ApiHouseholder>;
  /** update multiples rows of table: "householder" */
  update_householder_many?: Maybe<Array<Maybe<ApiHouseholderMutationResponse>>>;
  /** update data of the table: "member" */
  update_member?: Maybe<ApiMemberMutationResponse>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<ApiMember>;
  /** update multiples rows of table: "member" */
  update_member_many?: Maybe<Array<Maybe<ApiMemberMutationResponse>>>;
  /** update data of the table: "nationality" */
  update_nationality?: Maybe<ApiNationalityMutationResponse>;
  /** update single row of the table: "nationality" */
  update_nationality_by_pk?: Maybe<ApiNationality>;
  /** update multiples rows of table: "nationality" */
  update_nationality_many?: Maybe<Array<Maybe<ApiNationalityMutationResponse>>>;
  /** update data of the table: "project" */
  update_project?: Maybe<ApiProjectMutationResponse>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<ApiProject>;
  /** update multiples rows of table: "project" */
  update_project_many?: Maybe<Array<Maybe<ApiProjectMutationResponse>>>;
  /** update data of the table: "project_status" */
  update_project_status?: Maybe<ApiProjectStatusMutationResponse>;
  /** update single row of the table: "project_status" */
  update_project_status_by_pk?: Maybe<ApiProjectStatus>;
  /** update multiples rows of table: "project_status" */
  update_project_status_many?: Maybe<Array<Maybe<ApiProjectStatusMutationResponse>>>;
  /** update data of the table: "religion" */
  update_religion?: Maybe<ApiReligionMutationResponse>;
  /** update single row of the table: "religion" */
  update_religion_by_pk?: Maybe<ApiReligion>;
  /** update multiples rows of table: "religion" */
  update_religion_many?: Maybe<Array<Maybe<ApiReligionMutationResponse>>>;
};


/** mutation root */
export type ApiMutationRootApiDeleteCityArgs = {
  where: ApiCityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteCityByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteGenderArgs = {
  where: ApiGenderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteGenderByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdArgs = {
  where: ApiHouseholdBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdProjectArgs = {
  where: ApiHouseholdProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdProjectByPkArgs = {
  household_id: Scalars['uuid']['input'];
  project_id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdSeverityArgs = {
  where: ApiHouseholdSeverityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdSeverityByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdStatusArgs = {
  where: ApiHouseholdStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholdStatusByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholderArgs = {
  where: ApiHouseholderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHouseholderByPkArgs = {
  household_id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteMemberArgs = {
  where: ApiMemberBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteMemberByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteNationalityArgs = {
  where: ApiNationalityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteNationalityByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectArgs = {
  where: ApiProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectStatusArgs = {
  where: ApiProjectStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteProjectStatusByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteReligionArgs = {
  where: ApiReligionBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteReligionByPkArgs = {
  value: Scalars['String']['input'];
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
export type ApiMutationRootApiInsertHouseholdArgs = {
  objects: Array<ApiHouseholdInsertInput>;
  on_conflict?: InputMaybe<ApiHouseholdOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdOneArgs = {
  object: ApiHouseholdInsertInput;
  on_conflict?: InputMaybe<ApiHouseholdOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdProjectArgs = {
  objects: Array<ApiHouseholdProjectInsertInput>;
  on_conflict?: InputMaybe<ApiHouseholdProjectOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdProjectOneArgs = {
  object: ApiHouseholdProjectInsertInput;
  on_conflict?: InputMaybe<ApiHouseholdProjectOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdSeverityArgs = {
  objects: Array<ApiHouseholdSeverityInsertInput>;
  on_conflict?: InputMaybe<ApiHouseholdSeverityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdSeverityOneArgs = {
  object: ApiHouseholdSeverityInsertInput;
  on_conflict?: InputMaybe<ApiHouseholdSeverityOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdStatusArgs = {
  objects: Array<ApiHouseholdStatusInsertInput>;
  on_conflict?: InputMaybe<ApiHouseholdStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHouseholdStatusOneArgs = {
  object: ApiHouseholdStatusInsertInput;
  on_conflict?: InputMaybe<ApiHouseholdStatusOnConflict>;
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
export type ApiMutationRootApiUpdateCityManyArgs = {
  updates: Array<ApiCityUpdates>;
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
export type ApiMutationRootApiUpdateGenderManyArgs = {
  updates: Array<ApiGenderUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdArgs = {
  _inc?: InputMaybe<ApiHouseholdIncInput>;
  _set?: InputMaybe<ApiHouseholdSetInput>;
  where: ApiHouseholdBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdByPkArgs = {
  _inc?: InputMaybe<ApiHouseholdIncInput>;
  _set?: InputMaybe<ApiHouseholdSetInput>;
  pk_columns: ApiHouseholdPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdManyArgs = {
  updates: Array<ApiHouseholdUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdProjectArgs = {
  _inc?: InputMaybe<ApiHouseholdProjectIncInput>;
  _set?: InputMaybe<ApiHouseholdProjectSetInput>;
  where: ApiHouseholdProjectBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdProjectByPkArgs = {
  _inc?: InputMaybe<ApiHouseholdProjectIncInput>;
  _set?: InputMaybe<ApiHouseholdProjectSetInput>;
  pk_columns: ApiHouseholdProjectPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdProjectManyArgs = {
  updates: Array<ApiHouseholdProjectUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdSeverityArgs = {
  _set?: InputMaybe<ApiHouseholdSeveritySetInput>;
  where: ApiHouseholdSeverityBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdSeverityByPkArgs = {
  _set?: InputMaybe<ApiHouseholdSeveritySetInput>;
  pk_columns: ApiHouseholdSeverityPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdSeverityManyArgs = {
  updates: Array<ApiHouseholdSeverityUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdStatusArgs = {
  _set?: InputMaybe<ApiHouseholdStatusSetInput>;
  where: ApiHouseholdStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdStatusByPkArgs = {
  _set?: InputMaybe<ApiHouseholdStatusSetInput>;
  pk_columns: ApiHouseholdStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholdStatusManyArgs = {
  updates: Array<ApiHouseholdStatusUpdates>;
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
export type ApiMutationRootApiUpdateHouseholderManyArgs = {
  updates: Array<ApiHouseholderUpdates>;
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
export type ApiMutationRootApiUpdateMemberManyArgs = {
  updates: Array<ApiMemberUpdates>;
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
export type ApiMutationRootApiUpdateNationalityManyArgs = {
  updates: Array<ApiNationalityUpdates>;
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
export type ApiMutationRootApiUpdateProjectManyArgs = {
  updates: Array<ApiProjectUpdates>;
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
export type ApiMutationRootApiUpdateProjectStatusManyArgs = {
  updates: Array<ApiProjectStatusUpdates>;
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


/** mutation root */
export type ApiMutationRootApiUpdateReligionManyArgs = {
  updates: Array<ApiReligionUpdates>;
};

/** columns and relationships of "nationality" */
export type ApiNationality = {
  __typename?: 'nationality';
  value: Scalars['String']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiNationalityMaxFields>;
  min?: Maybe<ApiNationalityMinFields>;
};


/** aggregate fields of "nationality" */
export type ApiNationalityAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "value" */
  NationalityPkey = 'nationality_pkey'
}

export enum NationalityEnum {
  Ir = 'ir',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "nationality_enum". All fields are combined with logical 'AND'. */
export type NationalityEnumComparisonExp = {
  _eq?: InputMaybe<NationalityEnum>;
  _in?: InputMaybe<Array<NationalityEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<NationalityEnum>;
  _nin?: InputMaybe<Array<NationalityEnum>>;
};

/** input type for inserting data into table "nationality" */
export type ApiNationalityInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiNationalityMaxFields = {
  __typename?: 'nationality_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiNationalityMinFields = {
  __typename?: 'nationality_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "nationality" */
export type ApiNationalityMutationResponse = {
  __typename?: 'nationality_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  value: Scalars['String']['input'];
};

/** select columns of table "nationality" */
export enum ApiNationalitySelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "nationality" */
export type ApiNationalitySetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "nationality" */
export type ApiNationalityStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiNationalityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiNationalityStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "nationality" */
export enum ApiNationalityUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiNationalityUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiNationalitySetInput>;
  /** filter the rows which have to be updated */
  where: ApiNationalityBoolExp;
};

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
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  households: Array<ApiHouseholdProject>;
  /** An aggregate relationship */
  households_aggregate: ApiHouseholdProjectAggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  start_date?: Maybe<Scalars['date']['output']>;
  status: ProjectStatusEnum;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "project" */
export type ApiProjectApiHouseholdsArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdProjectOrderBy>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};


/** columns and relationships of "project" */
export type ApiProjectApiHouseholdsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdProjectOrderBy>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiProjectMaxFields>;
  min?: Maybe<ApiProjectMinFields>;
};


/** aggregate fields of "project" */
export type ApiProjectAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type ApiProjectBoolExp = {
  _and?: InputMaybe<Array<ApiProjectBoolExp>>;
  _not?: InputMaybe<ApiProjectBoolExp>;
  _or?: InputMaybe<Array<ApiProjectBoolExp>>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  description?: InputMaybe<ApiStringComparisonExp>;
  due_date?: InputMaybe<ApiDateComparisonExp>;
  households?: InputMaybe<ApiHouseholdProjectBoolExp>;
  households_aggregate?: InputMaybe<ApiHouseholdProjectAggregateBoolExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  start_date?: InputMaybe<ApiDateComparisonExp>;
  status?: InputMaybe<ProjectStatusEnumComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "project" */
export enum ApiProjectConstraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'project_pkey'
}

/** input type for inserting data into table "project" */
export type ApiProjectInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['date']['input']>;
  households?: InputMaybe<ApiHouseholdProjectArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<ProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ApiProjectMaxFields = {
  __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ApiProjectMinFields = {
  __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "project" */
export type ApiProjectMutationResponse = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  households_aggregate?: InputMaybe<ApiHouseholdProjectAggregateOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  start_date?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: project */
export type ApiProjectPkColumnsInput = {
  id: Scalars['uuid']['input'];
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<ProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "project_status" */
export type ApiProjectStatus = {
  __typename?: 'project_status';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiProjectStatusMaxFields>;
  min?: Maybe<ApiProjectStatusMinFields>;
};


/** aggregate fields of "project_status" */
export type ApiProjectStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "value" */
  ProjectStatusPkey = 'project_status_pkey'
}

export enum ProjectStatusEnum {
  Closed = 'Closed',
  Done = 'Done',
  InProgress = 'InProgress',
  Planning = 'Planning',
  Suspended = 'Suspended'
}

/** Boolean expression to compare columns of type "project_status_enum". All fields are combined with logical 'AND'. */
export type ProjectStatusEnumComparisonExp = {
  _eq?: InputMaybe<ProjectStatusEnum>;
  _in?: InputMaybe<Array<ProjectStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<ProjectStatusEnum>;
  _nin?: InputMaybe<Array<ProjectStatusEnum>>;
};

/** input type for inserting data into table "project_status" */
export type ApiProjectStatusInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiProjectStatusMaxFields = {
  __typename?: 'project_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiProjectStatusMinFields = {
  __typename?: 'project_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "project_status" */
export type ApiProjectStatusMutationResponse = {
  __typename?: 'project_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  value: Scalars['String']['input'];
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
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "project_status" */
export type ApiProjectStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiProjectStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiProjectStatusStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "project_status" */
export enum ApiProjectStatusUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type ApiProjectStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiProjectStatusSetInput>;
  /** filter the rows which have to be updated */
  where: ApiProjectStatusBoolExp;
};

/** Streaming cursor of the table "project" */
export type ApiProjectStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiProjectStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiProjectStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<ProjectStatusEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

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

export type ApiProjectUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiProjectSetInput>;
  /** filter the rows which have to be updated */
  where: ApiProjectBoolExp;
};

export type ApiQueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "city" */
  city: Array<ApiCity>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: ApiCityAggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<ApiCity>;
  /** fetch data from the table: "gender" */
  gender: Array<ApiGender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: ApiGenderAggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<ApiGender>;
  /** fetch data from the table: "household" */
  household: Array<ApiHousehold>;
  /** fetch aggregated fields from the table: "household" */
  household_aggregate: ApiHouseholdAggregate;
  /** fetch data from the table: "household" using primary key columns */
  household_by_pk?: Maybe<ApiHousehold>;
  /** fetch data from the table: "household_project" */
  household_project: Array<ApiHouseholdProject>;
  /** fetch aggregated fields from the table: "household_project" */
  household_project_aggregate: ApiHouseholdProjectAggregate;
  /** fetch data from the table: "household_project" using primary key columns */
  household_project_by_pk?: Maybe<ApiHouseholdProject>;
  /** fetch data from the table: "household_severity" */
  household_severity: Array<ApiHouseholdSeverity>;
  /** fetch aggregated fields from the table: "household_severity" */
  household_severity_aggregate: ApiHouseholdSeverityAggregate;
  /** fetch data from the table: "household_severity" using primary key columns */
  household_severity_by_pk?: Maybe<ApiHouseholdSeverity>;
  /** fetch data from the table: "household_status" */
  household_status: Array<ApiHouseholdStatus>;
  /** fetch aggregated fields from the table: "household_status" */
  household_status_aggregate: ApiHouseholdStatusAggregate;
  /** fetch data from the table: "household_status" using primary key columns */
  household_status_by_pk?: Maybe<ApiHouseholdStatus>;
  /** fetch data from the table: "householder" */
  householder: Array<ApiHouseholder>;
  /** fetch aggregated fields from the table: "householder" */
  householder_aggregate: ApiHouseholderAggregate;
  /** fetch data from the table: "householder" using primary key columns */
  householder_by_pk?: Maybe<ApiHouseholder>;
  /** fetch data from the table: "member" */
  member: Array<ApiMember>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: ApiMemberAggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<ApiMember>;
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
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiQueryRootApiCityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiQueryRootApiCityByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiGenderArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiQueryRootApiGenderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiQueryRootApiGenderByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiHouseholdArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdOrderBy>>;
  where?: InputMaybe<ApiHouseholdBoolExp>;
};


export type ApiQueryRootApiHouseholdAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdOrderBy>>;
  where?: InputMaybe<ApiHouseholdBoolExp>;
};


export type ApiQueryRootApiHouseholdByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiHouseholdProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdProjectOrderBy>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};


export type ApiQueryRootApiHouseholdProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdProjectOrderBy>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};


export type ApiQueryRootApiHouseholdProjectByPkArgs = {
  household_id: Scalars['uuid']['input'];
  project_id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiHouseholdSeverityArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdSeverityOrderBy>>;
  where?: InputMaybe<ApiHouseholdSeverityBoolExp>;
};


export type ApiQueryRootApiHouseholdSeverityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdSeverityOrderBy>>;
  where?: InputMaybe<ApiHouseholdSeverityBoolExp>;
};


export type ApiQueryRootApiHouseholdSeverityByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiHouseholdStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholdStatusBoolExp>;
};


export type ApiQueryRootApiHouseholdStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholdStatusBoolExp>;
};


export type ApiQueryRootApiHouseholdStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiHouseholderArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiQueryRootApiHouseholderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiQueryRootApiHouseholderByPkArgs = {
  household_id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiMemberArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiQueryRootApiMemberAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiQueryRootApiMemberByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiNationalityArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiQueryRootApiNationalityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiQueryRootApiNationalityByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiQueryRootApiProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiQueryRootApiProjectByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiProjectStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiQueryRootApiProjectStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiQueryRootApiProjectStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiReligionArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiQueryRootApiReligionAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiQueryRootApiReligionByPkArgs = {
  value: Scalars['String']['input'];
};

/** columns and relationships of "religion" */
export type ApiReligion = {
  __typename?: 'religion';
  value: Scalars['String']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<ApiReligionMaxFields>;
  min?: Maybe<ApiReligionMinFields>;
};


/** aggregate fields of "religion" */
export type ApiReligionAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiReligionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "value" */
  ReligionPkey = 'religion_pkey'
}

export enum ReligionEnum {
  Islam = 'islam',
  Unknown = 'unknown'
}

/** Boolean expression to compare columns of type "religion_enum". All fields are combined with logical 'AND'. */
export type ReligionEnumComparisonExp = {
  _eq?: InputMaybe<ReligionEnum>;
  _in?: InputMaybe<Array<ReligionEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<ReligionEnum>;
  _nin?: InputMaybe<Array<ReligionEnum>>;
};

/** input type for inserting data into table "religion" */
export type ApiReligionInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiReligionMaxFields = {
  __typename?: 'religion_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiReligionMinFields = {
  __typename?: 'religion_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "religion" */
export type ApiReligionMutationResponse = {
  __typename?: 'religion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  value: Scalars['String']['input'];
};

/** select columns of table "religion" */
export enum ApiReligionSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "religion" */
export type ApiReligionSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "religion" */
export type ApiReligionStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiReligionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiReligionStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "religion" */
export enum ApiReligionUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiReligionUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiReligionSetInput>;
  /** filter the rows which have to be updated */
  where: ApiReligionBoolExp;
};

export type ApiSubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "city" */
  city: Array<ApiCity>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: ApiCityAggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<ApiCity>;
  /** fetch data from the table in a streaming manner: "city" */
  city_stream: Array<ApiCity>;
  /** fetch data from the table: "gender" */
  gender: Array<ApiGender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: ApiGenderAggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<ApiGender>;
  /** fetch data from the table in a streaming manner: "gender" */
  gender_stream: Array<ApiGender>;
  /** fetch data from the table: "household" */
  household: Array<ApiHousehold>;
  /** fetch aggregated fields from the table: "household" */
  household_aggregate: ApiHouseholdAggregate;
  /** fetch data from the table: "household" using primary key columns */
  household_by_pk?: Maybe<ApiHousehold>;
  /** fetch data from the table: "household_project" */
  household_project: Array<ApiHouseholdProject>;
  /** fetch aggregated fields from the table: "household_project" */
  household_project_aggregate: ApiHouseholdProjectAggregate;
  /** fetch data from the table: "household_project" using primary key columns */
  household_project_by_pk?: Maybe<ApiHouseholdProject>;
  /** fetch data from the table in a streaming manner: "household_project" */
  household_project_stream: Array<ApiHouseholdProject>;
  /** fetch data from the table: "household_severity" */
  household_severity: Array<ApiHouseholdSeverity>;
  /** fetch aggregated fields from the table: "household_severity" */
  household_severity_aggregate: ApiHouseholdSeverityAggregate;
  /** fetch data from the table: "household_severity" using primary key columns */
  household_severity_by_pk?: Maybe<ApiHouseholdSeverity>;
  /** fetch data from the table in a streaming manner: "household_severity" */
  household_severity_stream: Array<ApiHouseholdSeverity>;
  /** fetch data from the table: "household_status" */
  household_status: Array<ApiHouseholdStatus>;
  /** fetch aggregated fields from the table: "household_status" */
  household_status_aggregate: ApiHouseholdStatusAggregate;
  /** fetch data from the table: "household_status" using primary key columns */
  household_status_by_pk?: Maybe<ApiHouseholdStatus>;
  /** fetch data from the table in a streaming manner: "household_status" */
  household_status_stream: Array<ApiHouseholdStatus>;
  /** fetch data from the table in a streaming manner: "household" */
  household_stream: Array<ApiHousehold>;
  /** fetch data from the table: "householder" */
  householder: Array<ApiHouseholder>;
  /** fetch aggregated fields from the table: "householder" */
  householder_aggregate: ApiHouseholderAggregate;
  /** fetch data from the table: "householder" using primary key columns */
  householder_by_pk?: Maybe<ApiHouseholder>;
  /** fetch data from the table in a streaming manner: "householder" */
  householder_stream: Array<ApiHouseholder>;
  /** fetch data from the table: "member" */
  member: Array<ApiMember>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: ApiMemberAggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<ApiMember>;
  /** fetch data from the table in a streaming manner: "member" */
  member_stream: Array<ApiMember>;
  /** fetch data from the table: "nationality" */
  nationality: Array<ApiNationality>;
  /** fetch aggregated fields from the table: "nationality" */
  nationality_aggregate: ApiNationalityAggregate;
  /** fetch data from the table: "nationality" using primary key columns */
  nationality_by_pk?: Maybe<ApiNationality>;
  /** fetch data from the table in a streaming manner: "nationality" */
  nationality_stream: Array<ApiNationality>;
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
  /** fetch data from the table in a streaming manner: "project_status" */
  project_status_stream: Array<ApiProjectStatus>;
  /** fetch data from the table in a streaming manner: "project" */
  project_stream: Array<ApiProject>;
  /** fetch data from the table: "religion" */
  religion: Array<ApiReligion>;
  /** fetch aggregated fields from the table: "religion" */
  religion_aggregate: ApiReligionAggregate;
  /** fetch data from the table: "religion" using primary key columns */
  religion_by_pk?: Maybe<ApiReligion>;
  /** fetch data from the table in a streaming manner: "religion" */
  religion_stream: Array<ApiReligion>;
};


export type ApiSubscriptionRootApiCityArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiSubscriptionRootApiCityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiCitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiCityOrderBy>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiSubscriptionRootApiCityByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiCityStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiCityStreamCursorInput>>;
  where?: InputMaybe<ApiCityBoolExp>;
};


export type ApiSubscriptionRootApiGenderArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiSubscriptionRootApiGenderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiGenderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiGenderOrderBy>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiSubscriptionRootApiGenderByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiGenderStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiGenderStreamCursorInput>>;
  where?: InputMaybe<ApiGenderBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdOrderBy>>;
  where?: InputMaybe<ApiHouseholdBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdOrderBy>>;
  where?: InputMaybe<ApiHouseholdBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiHouseholdProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdProjectOrderBy>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdProjectOrderBy>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdProjectByPkArgs = {
  household_id: Scalars['uuid']['input'];
  project_id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiHouseholdProjectStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiHouseholdProjectStreamCursorInput>>;
  where?: InputMaybe<ApiHouseholdProjectBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdSeverityArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdSeverityOrderBy>>;
  where?: InputMaybe<ApiHouseholdSeverityBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdSeverityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdSeveritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdSeverityOrderBy>>;
  where?: InputMaybe<ApiHouseholdSeverityBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdSeverityByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiHouseholdSeverityStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiHouseholdSeverityStreamCursorInput>>;
  where?: InputMaybe<ApiHouseholdSeverityBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholdStatusBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholdStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholdStatusOrderBy>>;
  where?: InputMaybe<ApiHouseholdStatusBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiHouseholdStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiHouseholdStatusStreamCursorInput>>;
  where?: InputMaybe<ApiHouseholdStatusBoolExp>;
};


export type ApiSubscriptionRootApiHouseholdStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiHouseholdStreamCursorInput>>;
  where?: InputMaybe<ApiHouseholdBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHouseholderOrderBy>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiSubscriptionRootApiHouseholderByPkArgs = {
  household_id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiHouseholderStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiHouseholderStreamCursorInput>>;
  where?: InputMaybe<ApiHouseholderBoolExp>;
};


export type ApiSubscriptionRootApiMemberArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiSubscriptionRootApiMemberAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiMemberSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiMemberOrderBy>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiSubscriptionRootApiMemberByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiMemberStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiMemberStreamCursorInput>>;
  where?: InputMaybe<ApiMemberBoolExp>;
};


export type ApiSubscriptionRootApiNationalityArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiSubscriptionRootApiNationalityAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiNationalitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNationalityOrderBy>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiSubscriptionRootApiNationalityByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiNationalityStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiNationalityStreamCursorInput>>;
  where?: InputMaybe<ApiNationalityBoolExp>;
};


export type ApiSubscriptionRootApiProjectArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiSubscriptionRootApiProjectAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectOrderBy>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiSubscriptionRootApiProjectByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiProjectStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiSubscriptionRootApiProjectStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiProjectStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiProjectStatusOrderBy>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiSubscriptionRootApiProjectStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiProjectStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiProjectStatusStreamCursorInput>>;
  where?: InputMaybe<ApiProjectStatusBoolExp>;
};


export type ApiSubscriptionRootApiProjectStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiProjectStreamCursorInput>>;
  where?: InputMaybe<ApiProjectBoolExp>;
};


export type ApiSubscriptionRootApiReligionArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiSubscriptionRootApiReligionAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiReligionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiReligionOrderBy>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};


export type ApiSubscriptionRootApiReligionByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiReligionStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiReligionStreamCursorInput>>;
  where?: InputMaybe<ApiReligionBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type ApiTimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type ApiUuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
