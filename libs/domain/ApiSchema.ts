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
  money: { input: any; output: any; }
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

/** columns and relationships of "accommodation_type" */
export type ApiAccommodationType = {
  __typename?: 'accommodation_type';
  value: Scalars['String']['output'];
};

/** aggregated selection of "accommodation_type" */
export type ApiAccommodationTypeAggregate = {
  __typename?: 'accommodation_type_aggregate';
  aggregate?: Maybe<ApiAccommodationTypeAggregateFields>;
  nodes: Array<ApiAccommodationType>;
};

/** aggregate fields of "accommodation_type" */
export type ApiAccommodationTypeAggregateFields = {
  __typename?: 'accommodation_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiAccommodationTypeMaxFields>;
  min?: Maybe<ApiAccommodationTypeMinFields>;
};


/** aggregate fields of "accommodation_type" */
export type ApiAccommodationTypeAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiAccommodationTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "accommodation_type". All fields are combined with a logical 'AND'. */
export type ApiAccommodationTypeBoolExp = {
  _and?: InputMaybe<Array<ApiAccommodationTypeBoolExp>>;
  _not?: InputMaybe<ApiAccommodationTypeBoolExp>;
  _or?: InputMaybe<Array<ApiAccommodationTypeBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "accommodation_type" */
export enum ApiAccommodationTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  AccommodationTypePkey = 'accommodation_type_pkey'
}

export enum AccommodationTypeEnum {
  Owner = 'Owner',
  Rent = 'Rent'
}

/** Boolean expression to compare columns of type "accommodation_type_enum". All fields are combined with logical 'AND'. */
export type AccommodationTypeEnumComparisonExp = {
  _eq?: InputMaybe<AccommodationTypeEnum>;
  _in?: InputMaybe<Array<AccommodationTypeEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AccommodationTypeEnum>;
  _nin?: InputMaybe<Array<AccommodationTypeEnum>>;
};

/** input type for inserting data into table "accommodation_type" */
export type ApiAccommodationTypeInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiAccommodationTypeMaxFields = {
  __typename?: 'accommodation_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiAccommodationTypeMinFields = {
  __typename?: 'accommodation_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "accommodation_type" */
export type ApiAccommodationTypeMutationResponse = {
  __typename?: 'accommodation_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiAccommodationType>;
};

/** on_conflict condition type for table "accommodation_type" */
export type ApiAccommodationTypeOnConflict = {
  constraint: ApiAccommodationTypeConstraint;
  update_columns?: Array<ApiAccommodationTypeUpdateColumn>;
  where?: InputMaybe<ApiAccommodationTypeBoolExp>;
};

/** Ordering options when selecting data from "accommodation_type". */
export type ApiAccommodationTypeOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: accommodation_type */
export type ApiAccommodationTypePkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "accommodation_type" */
export enum ApiAccommodationTypeSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "accommodation_type" */
export type ApiAccommodationTypeSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "accommodation_type" */
export type ApiAccommodationTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiAccommodationTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiAccommodationTypeStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "accommodation_type" */
export enum ApiAccommodationTypeUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiAccommodationTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiAccommodationTypeSetInput>;
  /** filter the rows which have to be updated */
  where: ApiAccommodationTypeBoolExp;
};

/** columns and relationships of "addiction_status" */
export type ApiAddictionStatus = {
  __typename?: 'addiction_status';
  value: Scalars['String']['output'];
};

/** aggregated selection of "addiction_status" */
export type ApiAddictionStatusAggregate = {
  __typename?: 'addiction_status_aggregate';
  aggregate?: Maybe<ApiAddictionStatusAggregateFields>;
  nodes: Array<ApiAddictionStatus>;
};

/** aggregate fields of "addiction_status" */
export type ApiAddictionStatusAggregateFields = {
  __typename?: 'addiction_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiAddictionStatusMaxFields>;
  min?: Maybe<ApiAddictionStatusMinFields>;
};


/** aggregate fields of "addiction_status" */
export type ApiAddictionStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiAddictionStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "addiction_status". All fields are combined with a logical 'AND'. */
export type ApiAddictionStatusBoolExp = {
  _and?: InputMaybe<Array<ApiAddictionStatusBoolExp>>;
  _not?: InputMaybe<ApiAddictionStatusBoolExp>;
  _or?: InputMaybe<Array<ApiAddictionStatusBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "addiction_status" */
export enum ApiAddictionStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  AddictionStatusPkey = 'addiction_status_pkey'
}

export enum AddictionStatusEnum {
  CurrentlyAddicted = 'CurrentlyAddicted',
  FormerlyAddicted = 'FormerlyAddicted',
  NeverAddicted = 'NeverAddicted'
}

/** Boolean expression to compare columns of type "addiction_status_enum". All fields are combined with logical 'AND'. */
export type AddictionStatusEnumComparisonExp = {
  _eq?: InputMaybe<AddictionStatusEnum>;
  _in?: InputMaybe<Array<AddictionStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AddictionStatusEnum>;
  _nin?: InputMaybe<Array<AddictionStatusEnum>>;
};

/** input type for inserting data into table "addiction_status" */
export type ApiAddictionStatusInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiAddictionStatusMaxFields = {
  __typename?: 'addiction_status_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiAddictionStatusMinFields = {
  __typename?: 'addiction_status_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "addiction_status" */
export type ApiAddictionStatusMutationResponse = {
  __typename?: 'addiction_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiAddictionStatus>;
};

/** on_conflict condition type for table "addiction_status" */
export type ApiAddictionStatusOnConflict = {
  constraint: ApiAddictionStatusConstraint;
  update_columns?: Array<ApiAddictionStatusUpdateColumn>;
  where?: InputMaybe<ApiAddictionStatusBoolExp>;
};

/** Ordering options when selecting data from "addiction_status". */
export type ApiAddictionStatusOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: addiction_status */
export type ApiAddictionStatusPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "addiction_status" */
export enum ApiAddictionStatusSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "addiction_status" */
export type ApiAddictionStatusSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "addiction_status" */
export type ApiAddictionStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiAddictionStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiAddictionStatusStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "addiction_status" */
export enum ApiAddictionStatusUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiAddictionStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiAddictionStatusSetInput>;
  /** filter the rows which have to be updated */
  where: ApiAddictionStatusBoolExp;
};

/** columns and relationships of "bank_account" */
export type ApiBankAccount = {
  __typename?: 'bank_account';
  account_number: Scalars['String']['output'];
  bank_name: Scalars['String']['output'];
  card_name: Scalars['String']['output'];
  householder_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "bank_account" */
export type ApiBankAccountAggregate = {
  __typename?: 'bank_account_aggregate';
  aggregate?: Maybe<ApiBankAccountAggregateFields>;
  nodes: Array<ApiBankAccount>;
};

export type ApiBankAccountAggregateBoolExp = {
  count?: InputMaybe<ApiBankAccountAggregateBoolExpCount>;
};

export type ApiBankAccountAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiBankAccountBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "bank_account" */
export type ApiBankAccountAggregateFields = {
  __typename?: 'bank_account_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiBankAccountMaxFields>;
  min?: Maybe<ApiBankAccountMinFields>;
};


/** aggregate fields of "bank_account" */
export type ApiBankAccountAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "bank_account" */
export type ApiBankAccountAggregateOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiBankAccountMaxOrderBy>;
  min?: InputMaybe<ApiBankAccountMinOrderBy>;
};

/** input type for inserting array relation for remote table "bank_account" */
export type ApiBankAccountArrRelInsertInput = {
  data: Array<ApiBankAccountInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiBankAccountOnConflict>;
};

/** Boolean expression to filter rows from the table "bank_account". All fields are combined with a logical 'AND'. */
export type ApiBankAccountBoolExp = {
  _and?: InputMaybe<Array<ApiBankAccountBoolExp>>;
  _not?: InputMaybe<ApiBankAccountBoolExp>;
  _or?: InputMaybe<Array<ApiBankAccountBoolExp>>;
  account_number?: InputMaybe<ApiStringComparisonExp>;
  bank_name?: InputMaybe<ApiStringComparisonExp>;
  card_name?: InputMaybe<ApiStringComparisonExp>;
  householder_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
};

/** unique or primary key constraints on table "bank_account" */
export enum ApiBankAccountConstraint {
  /** unique or primary key constraint on columns "id" */
  BankAccountIdKey = 'bank_account_id_key',
  /** unique or primary key constraint on columns "id" */
  BankAccountPkey = 'bank_account_pkey'
}

/** input type for inserting data into table "bank_account" */
export type ApiBankAccountInsertInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ApiBankAccountMaxFields = {
  __typename?: 'bank_account_max_fields';
  account_number?: Maybe<Scalars['String']['output']>;
  bank_name?: Maybe<Scalars['String']['output']>;
  card_name?: Maybe<Scalars['String']['output']>;
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "bank_account" */
export type ApiBankAccountMaxOrderBy = {
  account_number?: InputMaybe<ApiOrderBy>;
  bank_name?: InputMaybe<ApiOrderBy>;
  card_name?: InputMaybe<ApiOrderBy>;
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiBankAccountMinFields = {
  __typename?: 'bank_account_min_fields';
  account_number?: Maybe<Scalars['String']['output']>;
  bank_name?: Maybe<Scalars['String']['output']>;
  card_name?: Maybe<Scalars['String']['output']>;
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "bank_account" */
export type ApiBankAccountMinOrderBy = {
  account_number?: InputMaybe<ApiOrderBy>;
  bank_name?: InputMaybe<ApiOrderBy>;
  card_name?: InputMaybe<ApiOrderBy>;
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "bank_account" */
export type ApiBankAccountMutationResponse = {
  __typename?: 'bank_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiBankAccount>;
};

/** on_conflict condition type for table "bank_account" */
export type ApiBankAccountOnConflict = {
  constraint: ApiBankAccountConstraint;
  update_columns?: Array<ApiBankAccountUpdateColumn>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};

/** Ordering options when selecting data from "bank_account". */
export type ApiBankAccountOrderBy = {
  account_number?: InputMaybe<ApiOrderBy>;
  bank_name?: InputMaybe<ApiOrderBy>;
  card_name?: InputMaybe<ApiOrderBy>;
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: bank_account */
export type ApiBankAccountPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "bank_account" */
export enum ApiBankAccountSelectColumn {
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  BankName = 'bank_name',
  /** column name */
  CardName = 'card_name',
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "bank_account" */
export type ApiBankAccountSetInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "bank_account" */
export type ApiBankAccountStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiBankAccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiBankAccountStreamCursorValueInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  card_name?: InputMaybe<Scalars['String']['input']>;
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "bank_account" */
export enum ApiBankAccountUpdateColumn {
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  BankName = 'bank_name',
  /** column name */
  CardName = 'card_name',
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id'
}

export type ApiBankAccountUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiBankAccountSetInput>;
  /** filter the rows which have to be updated */
  where: ApiBankAccountBoolExp;
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
  Tehran = 'Tehran',
  Unknown = 'Unknown'
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

/** columns and relationships of "disability_status" */
export type ApiDisabilityStatus = {
  __typename?: 'disability_status';
  value: Scalars['String']['output'];
};

/** aggregated selection of "disability_status" */
export type ApiDisabilityStatusAggregate = {
  __typename?: 'disability_status_aggregate';
  aggregate?: Maybe<ApiDisabilityStatusAggregateFields>;
  nodes: Array<ApiDisabilityStatus>;
};

/** aggregate fields of "disability_status" */
export type ApiDisabilityStatusAggregateFields = {
  __typename?: 'disability_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiDisabilityStatusMaxFields>;
  min?: Maybe<ApiDisabilityStatusMinFields>;
};


/** aggregate fields of "disability_status" */
export type ApiDisabilityStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiDisabilityStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "disability_status". All fields are combined with a logical 'AND'. */
export type ApiDisabilityStatusBoolExp = {
  _and?: InputMaybe<Array<ApiDisabilityStatusBoolExp>>;
  _not?: InputMaybe<ApiDisabilityStatusBoolExp>;
  _or?: InputMaybe<Array<ApiDisabilityStatusBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "disability_status" */
export enum ApiDisabilityStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  DisabilityStatusPkey = 'disability_status_pkey'
}

export enum DisabilityStatusEnum {
  BothPhysicalAndMental = 'BothPhysicalAndMental',
  MentalDisability = 'MentalDisability',
  NoDisability = 'NoDisability',
  PhysicalDisability = 'PhysicalDisability'
}

/** Boolean expression to compare columns of type "disability_status_enum". All fields are combined with logical 'AND'. */
export type DisabilityStatusEnumComparisonExp = {
  _eq?: InputMaybe<DisabilityStatusEnum>;
  _in?: InputMaybe<Array<DisabilityStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<DisabilityStatusEnum>;
  _nin?: InputMaybe<Array<DisabilityStatusEnum>>;
};

/** input type for inserting data into table "disability_status" */
export type ApiDisabilityStatusInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiDisabilityStatusMaxFields = {
  __typename?: 'disability_status_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiDisabilityStatusMinFields = {
  __typename?: 'disability_status_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "disability_status" */
export type ApiDisabilityStatusMutationResponse = {
  __typename?: 'disability_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiDisabilityStatus>;
};

/** on_conflict condition type for table "disability_status" */
export type ApiDisabilityStatusOnConflict = {
  constraint: ApiDisabilityStatusConstraint;
  update_columns?: Array<ApiDisabilityStatusUpdateColumn>;
  where?: InputMaybe<ApiDisabilityStatusBoolExp>;
};

/** Ordering options when selecting data from "disability_status". */
export type ApiDisabilityStatusOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: disability_status */
export type ApiDisabilityStatusPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "disability_status" */
export enum ApiDisabilityStatusSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "disability_status" */
export type ApiDisabilityStatusSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "disability_status" */
export type ApiDisabilityStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiDisabilityStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiDisabilityStatusStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "disability_status" */
export enum ApiDisabilityStatusUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiDisabilityStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiDisabilityStatusSetInput>;
  /** filter the rows which have to be updated */
  where: ApiDisabilityStatusBoolExp;
};

/** columns and relationships of "document" */
export type ApiDocument = {
  __typename?: 'document';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  url: Scalars['String']['output'];
  visit_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "document" */
export type ApiDocumentAggregate = {
  __typename?: 'document_aggregate';
  aggregate?: Maybe<ApiDocumentAggregateFields>;
  nodes: Array<ApiDocument>;
};

export type ApiDocumentAggregateBoolExp = {
  count?: InputMaybe<ApiDocumentAggregateBoolExpCount>;
};

export type ApiDocumentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiDocumentBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "document" */
export type ApiDocumentAggregateFields = {
  __typename?: 'document_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiDocumentMaxFields>;
  min?: Maybe<ApiDocumentMinFields>;
};


/** aggregate fields of "document" */
export type ApiDocumentAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "document" */
export type ApiDocumentAggregateOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiDocumentMaxOrderBy>;
  min?: InputMaybe<ApiDocumentMinOrderBy>;
};

/** input type for inserting array relation for remote table "document" */
export type ApiDocumentArrRelInsertInput = {
  data: Array<ApiDocumentInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiDocumentOnConflict>;
};

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export type ApiDocumentBoolExp = {
  _and?: InputMaybe<Array<ApiDocumentBoolExp>>;
  _not?: InputMaybe<ApiDocumentBoolExp>;
  _or?: InputMaybe<Array<ApiDocumentBoolExp>>;
  householder_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  url?: InputMaybe<ApiStringComparisonExp>;
  visit_id?: InputMaybe<ApiUuidComparisonExp>;
};

/** unique or primary key constraints on table "document" */
export enum ApiDocumentConstraint {
  /** unique or primary key constraint on columns "id" */
  DocumentPkey = 'document_pkey'
}

/** input type for inserting data into table "document" */
export type ApiDocumentInsertInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visit_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ApiDocumentMaxFields = {
  __typename?: 'document_max_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  visit_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "document" */
export type ApiDocumentMaxOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  url?: InputMaybe<ApiOrderBy>;
  visit_id?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiDocumentMinFields = {
  __typename?: 'document_min_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  visit_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "document" */
export type ApiDocumentMinOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  url?: InputMaybe<ApiOrderBy>;
  visit_id?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "document" */
export type ApiDocumentMutationResponse = {
  __typename?: 'document_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiDocument>;
};

/** on_conflict condition type for table "document" */
export type ApiDocumentOnConflict = {
  constraint: ApiDocumentConstraint;
  update_columns?: Array<ApiDocumentUpdateColumn>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};

/** Ordering options when selecting data from "document". */
export type ApiDocumentOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  url?: InputMaybe<ApiOrderBy>;
  visit_id?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: document */
export type ApiDocumentPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "document" */
export enum ApiDocumentSelectColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url',
  /** column name */
  VisitId = 'visit_id'
}

/** input type for updating data in table "document" */
export type ApiDocumentSetInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visit_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "document" */
export type ApiDocumentStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiDocumentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiDocumentStreamCursorValueInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visit_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "document" */
export enum ApiDocumentUpdateColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url',
  /** column name */
  VisitId = 'visit_id'
}

export type ApiDocumentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiDocumentSetInput>;
  /** filter the rows which have to be updated */
  where: ApiDocumentBoolExp;
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
  Unknown = 'Unknown'
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

/** columns and relationships of "health_status" */
export type ApiHealthStatus = {
  __typename?: 'health_status';
  value: Scalars['String']['output'];
};

/** aggregated selection of "health_status" */
export type ApiHealthStatusAggregate = {
  __typename?: 'health_status_aggregate';
  aggregate?: Maybe<ApiHealthStatusAggregateFields>;
  nodes: Array<ApiHealthStatus>;
};

/** aggregate fields of "health_status" */
export type ApiHealthStatusAggregateFields = {
  __typename?: 'health_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHealthStatusMaxFields>;
  min?: Maybe<ApiHealthStatusMinFields>;
};


/** aggregate fields of "health_status" */
export type ApiHealthStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHealthStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "health_status". All fields are combined with a logical 'AND'. */
export type ApiHealthStatusBoolExp = {
  _and?: InputMaybe<Array<ApiHealthStatusBoolExp>>;
  _not?: InputMaybe<ApiHealthStatusBoolExp>;
  _or?: InputMaybe<Array<ApiHealthStatusBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "health_status" */
export enum ApiHealthStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  HealthStatusPkey = 'health_status_pkey'
}

export enum HealthStatusEnum {
  Healthy = 'Healthy',
  Sick = 'Sick'
}

/** Boolean expression to compare columns of type "health_status_enum". All fields are combined with logical 'AND'. */
export type HealthStatusEnumComparisonExp = {
  _eq?: InputMaybe<HealthStatusEnum>;
  _in?: InputMaybe<Array<HealthStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<HealthStatusEnum>;
  _nin?: InputMaybe<Array<HealthStatusEnum>>;
};

/** input type for inserting data into table "health_status" */
export type ApiHealthStatusInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiHealthStatusMaxFields = {
  __typename?: 'health_status_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiHealthStatusMinFields = {
  __typename?: 'health_status_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "health_status" */
export type ApiHealthStatusMutationResponse = {
  __typename?: 'health_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiHealthStatus>;
};

/** on_conflict condition type for table "health_status" */
export type ApiHealthStatusOnConflict = {
  constraint: ApiHealthStatusConstraint;
  update_columns?: Array<ApiHealthStatusUpdateColumn>;
  where?: InputMaybe<ApiHealthStatusBoolExp>;
};

/** Ordering options when selecting data from "health_status". */
export type ApiHealthStatusOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: health_status */
export type ApiHealthStatusPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "health_status" */
export enum ApiHealthStatusSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "health_status" */
export type ApiHealthStatusSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "health_status" */
export type ApiHealthStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiHealthStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiHealthStatusStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "health_status" */
export enum ApiHealthStatusUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiHealthStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHealthStatusSetInput>;
  /** filter the rows which have to be updated */
  where: ApiHealthStatusBoolExp;
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
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
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
  /** A computed field, executes function "format_code" */
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  db_code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ApiHouseholdMinFields = {
  __typename?: 'household_min_fields';
  /** A computed field, executes function "format_code" */
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  db_code?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
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
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_pop on columns */
export type ApiHouseholdStddevPopFields = {
  __typename?: 'household_stddev_pop_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_samp on columns */
export type ApiHouseholdStddevSampFields = {
  __typename?: 'household_stddev_samp_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
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
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
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
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_samp on columns */
export type ApiHouseholdVarSampFields = {
  __typename?: 'household_var_samp_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate variance on columns */
export type ApiHouseholdVarianceFields = {
  __typename?: 'household_variance_fields';
  db_code?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "count_members" */
  members_count?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "householder" */
export type ApiHouseholder = {
  __typename?: 'householder';
  accommodation_type?: Maybe<AccommodationTypeEnum>;
  addiction_status?: Maybe<AddictionStatusEnum>;
  address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  bank_accounts: Array<ApiBankAccount>;
  /** An aggregate relationship */
  bank_accounts_aggregate: ApiBankAccountAggregate;
  city?: Maybe<CityEnum>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  disability_description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  disability_documents: Array<ApiDocument>;
  /** An aggregate relationship */
  disability_documents_aggregate: ApiDocumentAggregate;
  disability_status?: Maybe<DisabilityStatusEnum>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  financial_comment?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<GenderEnum>;
  health_comment?: Maybe<Scalars['String']['output']>;
  health_description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  health_documents: Array<ApiDocument>;
  /** An aggregate relationship */
  health_documents_aggregate: ApiDocumentAggregate;
  health_status?: Maybe<HealthStatusEnum>;
  household_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  income?: Maybe<Scalars['money']['output']>;
  /** An array relationship */
  insurances: Array<ApiInsurance>;
  /** An aggregate relationship */
  insurances_aggregate: ApiInsuranceAggregate;
  /** An array relationship */
  jobs: Array<ApiJob>;
  /** An aggregate relationship */
  jobs_aggregate: ApiJobAggregate;
  name: Scalars['String']['output'];
  national_id?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<NationalityEnum>;
  neighborhood?: Maybe<Scalars['String']['output']>;
  prior_accommodation_address?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  religion?: Maybe<ReligionEnum>;
  rent?: Maybe<Scalars['money']['output']>;
  /** An array relationship */
  skills: Array<ApiSkill>;
  /** An aggregate relationship */
  skills_aggregate: ApiSkillAggregate;
  /** A computed field, executes function "get_householder_status" */
  status?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  subsidies: Array<ApiSubsidy>;
  /** An aggregate relationship */
  subsidies_aggregate: ApiSubsidyAggregate;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  zip_code?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiBankAccountsArgs = {
  distinct_on?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiBankAccountOrderBy>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiBankAccountsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiBankAccountOrderBy>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiDisabilityDocumentsArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiDisabilityDocumentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiHealthDocumentsArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiHealthDocumentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiInsurancesArgs = {
  distinct_on?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiInsuranceOrderBy>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiInsurancesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiInsuranceOrderBy>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiJobsArgs = {
  distinct_on?: InputMaybe<Array<ApiJobSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiJobOrderBy>>;
  where?: InputMaybe<ApiJobBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiJobsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiJobSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiJobOrderBy>>;
  where?: InputMaybe<ApiJobBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiSkillsArgs = {
  distinct_on?: InputMaybe<Array<ApiSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSkillOrderBy>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiSkillsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSkillOrderBy>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiSubsidiesArgs = {
  distinct_on?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSubsidyOrderBy>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};


/** columns and relationships of "householder" */
export type ApiHouseholderApiSubsidiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSubsidyOrderBy>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
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
  avg?: Maybe<ApiHouseholderAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ApiHouseholderMaxFields>;
  min?: Maybe<ApiHouseholderMinFields>;
  stddev?: Maybe<ApiHouseholderStddevFields>;
  stddev_pop?: Maybe<ApiHouseholderStddevPopFields>;
  stddev_samp?: Maybe<ApiHouseholderStddevSampFields>;
  sum?: Maybe<ApiHouseholderSumFields>;
  var_pop?: Maybe<ApiHouseholderVarPopFields>;
  var_samp?: Maybe<ApiHouseholderVarSampFields>;
  variance?: Maybe<ApiHouseholderVarianceFields>;
};


/** aggregate fields of "householder" */
export type ApiHouseholderAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiHouseholderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ApiHouseholderAvgFields = {
  __typename?: 'householder_avg_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "householder". All fields are combined with a logical 'AND'. */
export type ApiHouseholderBoolExp = {
  _and?: InputMaybe<Array<ApiHouseholderBoolExp>>;
  _not?: InputMaybe<ApiHouseholderBoolExp>;
  _or?: InputMaybe<Array<ApiHouseholderBoolExp>>;
  accommodation_type?: InputMaybe<AccommodationTypeEnumComparisonExp>;
  addiction_status?: InputMaybe<AddictionStatusEnumComparisonExp>;
  address?: InputMaybe<ApiStringComparisonExp>;
  bank_accounts?: InputMaybe<ApiBankAccountBoolExp>;
  bank_accounts_aggregate?: InputMaybe<ApiBankAccountAggregateBoolExp>;
  city?: InputMaybe<CityEnumComparisonExp>;
  created_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  description?: InputMaybe<ApiStringComparisonExp>;
  disability_description?: InputMaybe<ApiStringComparisonExp>;
  disability_documents?: InputMaybe<ApiDocumentBoolExp>;
  disability_documents_aggregate?: InputMaybe<ApiDocumentAggregateBoolExp>;
  disability_status?: InputMaybe<DisabilityStatusEnumComparisonExp>;
  dob?: InputMaybe<ApiDateComparisonExp>;
  father_name?: InputMaybe<ApiStringComparisonExp>;
  financial_comment?: InputMaybe<ApiStringComparisonExp>;
  gender?: InputMaybe<GenderEnumComparisonExp>;
  health_comment?: InputMaybe<ApiStringComparisonExp>;
  health_description?: InputMaybe<ApiStringComparisonExp>;
  health_documents?: InputMaybe<ApiDocumentBoolExp>;
  health_documents_aggregate?: InputMaybe<ApiDocumentAggregateBoolExp>;
  health_status?: InputMaybe<HealthStatusEnumComparisonExp>;
  household_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  income?: InputMaybe<ApiMoneyComparisonExp>;
  insurances?: InputMaybe<ApiInsuranceBoolExp>;
  insurances_aggregate?: InputMaybe<ApiInsuranceAggregateBoolExp>;
  jobs?: InputMaybe<ApiJobBoolExp>;
  jobs_aggregate?: InputMaybe<ApiJobAggregateBoolExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  national_id?: InputMaybe<ApiStringComparisonExp>;
  nationality?: InputMaybe<NationalityEnumComparisonExp>;
  neighborhood?: InputMaybe<ApiStringComparisonExp>;
  prior_accommodation_address?: InputMaybe<ApiStringComparisonExp>;
  province?: InputMaybe<ApiStringComparisonExp>;
  religion?: InputMaybe<ReligionEnumComparisonExp>;
  rent?: InputMaybe<ApiMoneyComparisonExp>;
  skills?: InputMaybe<ApiSkillBoolExp>;
  skills_aggregate?: InputMaybe<ApiSkillAggregateBoolExp>;
  status?: InputMaybe<ApiStringComparisonExp>;
  subsidies?: InputMaybe<ApiSubsidyBoolExp>;
  subsidies_aggregate?: InputMaybe<ApiSubsidyAggregateBoolExp>;
  surname?: InputMaybe<ApiStringComparisonExp>;
  updated_at?: InputMaybe<ApiTimestamptzComparisonExp>;
  zip_code?: InputMaybe<ApiStringComparisonExp>;
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

/** input type for incrementing numeric columns in table "householder" */
export type ApiHouseholderIncInput = {
  income?: InputMaybe<Scalars['money']['input']>;
  rent?: InputMaybe<Scalars['money']['input']>;
};

/** input type for inserting data into table "householder" */
export type ApiHouseholderInsertInput = {
  accommodation_type?: InputMaybe<AccommodationTypeEnum>;
  addiction_status?: InputMaybe<AddictionStatusEnum>;
  address?: InputMaybe<Scalars['String']['input']>;
  bank_accounts?: InputMaybe<ApiBankAccountArrRelInsertInput>;
  city?: InputMaybe<CityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disability_description?: InputMaybe<Scalars['String']['input']>;
  disability_documents?: InputMaybe<ApiDocumentArrRelInsertInput>;
  disability_status?: InputMaybe<DisabilityStatusEnum>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  financial_comment?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  health_comment?: InputMaybe<Scalars['String']['input']>;
  health_description?: InputMaybe<Scalars['String']['input']>;
  health_documents?: InputMaybe<ApiDocumentArrRelInsertInput>;
  health_status?: InputMaybe<HealthStatusEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  income?: InputMaybe<Scalars['money']['input']>;
  insurances?: InputMaybe<ApiInsuranceArrRelInsertInput>;
  jobs?: InputMaybe<ApiJobArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  prior_accommodation_address?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  religion?: InputMaybe<ReligionEnum>;
  rent?: InputMaybe<Scalars['money']['input']>;
  skills?: InputMaybe<ApiSkillArrRelInsertInput>;
  subsidies?: InputMaybe<ApiSubsidyArrRelInsertInput>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiHouseholderMaxFields = {
  __typename?: 'householder_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disability_description?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  financial_comment?: Maybe<Scalars['String']['output']>;
  health_comment?: Maybe<Scalars['String']['output']>;
  health_description?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  income?: Maybe<Scalars['money']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_id?: Maybe<Scalars['String']['output']>;
  neighborhood?: Maybe<Scalars['String']['output']>;
  prior_accommodation_address?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  rent?: Maybe<Scalars['money']['output']>;
  /** A computed field, executes function "get_householder_status" */
  status?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiHouseholderMinFields = {
  __typename?: 'householder_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disability_description?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['date']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  financial_comment?: Maybe<Scalars['String']['output']>;
  health_comment?: Maybe<Scalars['String']['output']>;
  health_description?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  income?: Maybe<Scalars['money']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_id?: Maybe<Scalars['String']['output']>;
  neighborhood?: Maybe<Scalars['String']['output']>;
  prior_accommodation_address?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  rent?: Maybe<Scalars['money']['output']>;
  /** A computed field, executes function "get_householder_status" */
  status?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
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
  accommodation_type?: InputMaybe<ApiOrderBy>;
  addiction_status?: InputMaybe<ApiOrderBy>;
  address?: InputMaybe<ApiOrderBy>;
  bank_accounts_aggregate?: InputMaybe<ApiBankAccountAggregateOrderBy>;
  city?: InputMaybe<ApiOrderBy>;
  created_at?: InputMaybe<ApiOrderBy>;
  description?: InputMaybe<ApiOrderBy>;
  disability_description?: InputMaybe<ApiOrderBy>;
  disability_documents_aggregate?: InputMaybe<ApiDocumentAggregateOrderBy>;
  disability_status?: InputMaybe<ApiOrderBy>;
  dob?: InputMaybe<ApiOrderBy>;
  father_name?: InputMaybe<ApiOrderBy>;
  financial_comment?: InputMaybe<ApiOrderBy>;
  gender?: InputMaybe<ApiOrderBy>;
  health_comment?: InputMaybe<ApiOrderBy>;
  health_description?: InputMaybe<ApiOrderBy>;
  health_documents_aggregate?: InputMaybe<ApiDocumentAggregateOrderBy>;
  health_status?: InputMaybe<ApiOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  income?: InputMaybe<ApiOrderBy>;
  insurances_aggregate?: InputMaybe<ApiInsuranceAggregateOrderBy>;
  jobs_aggregate?: InputMaybe<ApiJobAggregateOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  national_id?: InputMaybe<ApiOrderBy>;
  nationality?: InputMaybe<ApiOrderBy>;
  neighborhood?: InputMaybe<ApiOrderBy>;
  prior_accommodation_address?: InputMaybe<ApiOrderBy>;
  province?: InputMaybe<ApiOrderBy>;
  religion?: InputMaybe<ApiOrderBy>;
  rent?: InputMaybe<ApiOrderBy>;
  skills_aggregate?: InputMaybe<ApiSkillAggregateOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  subsidies_aggregate?: InputMaybe<ApiSubsidyAggregateOrderBy>;
  surname?: InputMaybe<ApiOrderBy>;
  updated_at?: InputMaybe<ApiOrderBy>;
  zip_code?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: householder */
export type ApiHouseholderPkColumnsInput = {
  household_id: Scalars['uuid']['input'];
};

/** select columns of table "householder" */
export enum ApiHouseholderSelectColumn {
  /** column name */
  AccommodationType = 'accommodation_type',
  /** column name */
  AddictionStatus = 'addiction_status',
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DisabilityDescription = 'disability_description',
  /** column name */
  DisabilityStatus = 'disability_status',
  /** column name */
  Dob = 'dob',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  FinancialComment = 'financial_comment',
  /** column name */
  Gender = 'gender',
  /** column name */
  HealthComment = 'health_comment',
  /** column name */
  HealthDescription = 'health_description',
  /** column name */
  HealthStatus = 'health_status',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  Income = 'income',
  /** column name */
  Name = 'name',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Neighborhood = 'neighborhood',
  /** column name */
  PriorAccommodationAddress = 'prior_accommodation_address',
  /** column name */
  Province = 'province',
  /** column name */
  Religion = 'religion',
  /** column name */
  Rent = 'rent',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "householder" */
export type ApiHouseholderSetInput = {
  accommodation_type?: InputMaybe<AccommodationTypeEnum>;
  addiction_status?: InputMaybe<AddictionStatusEnum>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<CityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disability_description?: InputMaybe<Scalars['String']['input']>;
  disability_status?: InputMaybe<DisabilityStatusEnum>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  financial_comment?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  health_comment?: InputMaybe<Scalars['String']['input']>;
  health_description?: InputMaybe<Scalars['String']['input']>;
  health_status?: InputMaybe<HealthStatusEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  income?: InputMaybe<Scalars['money']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  prior_accommodation_address?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  religion?: InputMaybe<ReligionEnum>;
  rent?: InputMaybe<Scalars['money']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type ApiHouseholderStddevFields = {
  __typename?: 'householder_stddev_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ApiHouseholderStddevPopFields = {
  __typename?: 'householder_stddev_pop_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ApiHouseholderStddevSampFields = {
  __typename?: 'householder_stddev_samp_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
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
  accommodation_type?: InputMaybe<AccommodationTypeEnum>;
  addiction_status?: InputMaybe<AddictionStatusEnum>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<CityEnum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disability_description?: InputMaybe<Scalars['String']['input']>;
  disability_status?: InputMaybe<DisabilityStatusEnum>;
  dob?: InputMaybe<Scalars['date']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  financial_comment?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  health_comment?: InputMaybe<Scalars['String']['input']>;
  health_description?: InputMaybe<Scalars['String']['input']>;
  health_status?: InputMaybe<HealthStatusEnum>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  income?: InputMaybe<Scalars['money']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  national_id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityEnum>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  prior_accommodation_address?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  religion?: InputMaybe<ReligionEnum>;
  rent?: InputMaybe<Scalars['money']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type ApiHouseholderSumFields = {
  __typename?: 'householder_sum_fields';
  income?: Maybe<Scalars['money']['output']>;
  rent?: Maybe<Scalars['money']['output']>;
};

/** update columns of table "householder" */
export enum ApiHouseholderUpdateColumn {
  /** column name */
  AccommodationType = 'accommodation_type',
  /** column name */
  AddictionStatus = 'addiction_status',
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DisabilityDescription = 'disability_description',
  /** column name */
  DisabilityStatus = 'disability_status',
  /** column name */
  Dob = 'dob',
  /** column name */
  FatherName = 'father_name',
  /** column name */
  FinancialComment = 'financial_comment',
  /** column name */
  Gender = 'gender',
  /** column name */
  HealthComment = 'health_comment',
  /** column name */
  HealthDescription = 'health_description',
  /** column name */
  HealthStatus = 'health_status',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  Income = 'income',
  /** column name */
  Name = 'name',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  Nationality = 'nationality',
  /** column name */
  Neighborhood = 'neighborhood',
  /** column name */
  PriorAccommodationAddress = 'prior_accommodation_address',
  /** column name */
  Province = 'province',
  /** column name */
  Religion = 'religion',
  /** column name */
  Rent = 'rent',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code'
}

export type ApiHouseholderUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ApiHouseholderIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiHouseholderSetInput>;
  /** filter the rows which have to be updated */
  where: ApiHouseholderBoolExp;
};

/** aggregate var_pop on columns */
export type ApiHouseholderVarPopFields = {
  __typename?: 'householder_var_pop_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ApiHouseholderVarSampFields = {
  __typename?: 'householder_var_samp_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ApiHouseholderVarianceFields = {
  __typename?: 'householder_variance_fields';
  income?: Maybe<Scalars['Float']['output']>;
  rent?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "insurance" */
export type ApiInsurance = {
  __typename?: 'insurance';
  householder_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "insurance" */
export type ApiInsuranceAggregate = {
  __typename?: 'insurance_aggregate';
  aggregate?: Maybe<ApiInsuranceAggregateFields>;
  nodes: Array<ApiInsurance>;
};

export type ApiInsuranceAggregateBoolExp = {
  count?: InputMaybe<ApiInsuranceAggregateBoolExpCount>;
};

export type ApiInsuranceAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiInsuranceBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "insurance" */
export type ApiInsuranceAggregateFields = {
  __typename?: 'insurance_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiInsuranceMaxFields>;
  min?: Maybe<ApiInsuranceMinFields>;
};


/** aggregate fields of "insurance" */
export type ApiInsuranceAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "insurance" */
export type ApiInsuranceAggregateOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiInsuranceMaxOrderBy>;
  min?: InputMaybe<ApiInsuranceMinOrderBy>;
};

/** input type for inserting array relation for remote table "insurance" */
export type ApiInsuranceArrRelInsertInput = {
  data: Array<ApiInsuranceInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiInsuranceOnConflict>;
};

/** Boolean expression to filter rows from the table "insurance". All fields are combined with a logical 'AND'. */
export type ApiInsuranceBoolExp = {
  _and?: InputMaybe<Array<ApiInsuranceBoolExp>>;
  _not?: InputMaybe<ApiInsuranceBoolExp>;
  _or?: InputMaybe<Array<ApiInsuranceBoolExp>>;
  householder_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "insurance" */
export enum ApiInsuranceConstraint {
  /** unique or primary key constraint on columns "id" */
  InsuranceIdKey = 'insurance_id_key',
  /** unique or primary key constraint on columns "id" */
  InsurancePkey = 'insurance_pkey'
}

/** input type for inserting data into table "insurance" */
export type ApiInsuranceInsertInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiInsuranceMaxFields = {
  __typename?: 'insurance_max_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "insurance" */
export type ApiInsuranceMaxOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiInsuranceMinFields = {
  __typename?: 'insurance_min_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "insurance" */
export type ApiInsuranceMinOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "insurance" */
export type ApiInsuranceMutationResponse = {
  __typename?: 'insurance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiInsurance>;
};

/** on_conflict condition type for table "insurance" */
export type ApiInsuranceOnConflict = {
  constraint: ApiInsuranceConstraint;
  update_columns?: Array<ApiInsuranceUpdateColumn>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};

/** Ordering options when selecting data from "insurance". */
export type ApiInsuranceOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: insurance */
export type ApiInsurancePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "insurance" */
export enum ApiInsuranceSelectColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "insurance" */
export type ApiInsuranceSetInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "insurance" */
export type ApiInsuranceStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiInsuranceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiInsuranceStreamCursorValueInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "insurance" */
export enum ApiInsuranceUpdateColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type ApiInsuranceUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiInsuranceSetInput>;
  /** filter the rows which have to be updated */
  where: ApiInsuranceBoolExp;
};

/** columns and relationships of "job" */
export type ApiJob = {
  __typename?: 'job';
  householder_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "job" */
export type ApiJobAggregate = {
  __typename?: 'job_aggregate';
  aggregate?: Maybe<ApiJobAggregateFields>;
  nodes: Array<ApiJob>;
};

export type ApiJobAggregateBoolExp = {
  count?: InputMaybe<ApiJobAggregateBoolExpCount>;
};

export type ApiJobAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiJobSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiJobBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "job" */
export type ApiJobAggregateFields = {
  __typename?: 'job_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiJobMaxFields>;
  min?: Maybe<ApiJobMinFields>;
};


/** aggregate fields of "job" */
export type ApiJobAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiJobSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "job" */
export type ApiJobAggregateOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiJobMaxOrderBy>;
  min?: InputMaybe<ApiJobMinOrderBy>;
};

/** input type for inserting array relation for remote table "job" */
export type ApiJobArrRelInsertInput = {
  data: Array<ApiJobInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiJobOnConflict>;
};

/** Boolean expression to filter rows from the table "job". All fields are combined with a logical 'AND'. */
export type ApiJobBoolExp = {
  _and?: InputMaybe<Array<ApiJobBoolExp>>;
  _not?: InputMaybe<ApiJobBoolExp>;
  _or?: InputMaybe<Array<ApiJobBoolExp>>;
  householder_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  title?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "job" */
export enum ApiJobConstraint {
  /** unique or primary key constraint on columns "id" */
  JobIdKey = 'job_id_key',
  /** unique or primary key constraint on columns "id" */
  JobPkey = 'job_pkey'
}

/** input type for inserting data into table "job" */
export type ApiJobInsertInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiJobMaxFields = {
  __typename?: 'job_max_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "job" */
export type ApiJobMaxOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  title?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiJobMinFields = {
  __typename?: 'job_min_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "job" */
export type ApiJobMinOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  title?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "job" */
export type ApiJobMutationResponse = {
  __typename?: 'job_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiJob>;
};

/** on_conflict condition type for table "job" */
export type ApiJobOnConflict = {
  constraint: ApiJobConstraint;
  update_columns?: Array<ApiJobUpdateColumn>;
  where?: InputMaybe<ApiJobBoolExp>;
};

/** Ordering options when selecting data from "job". */
export type ApiJobOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  title?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: job */
export type ApiJobPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "job" */
export enum ApiJobSelectColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "job" */
export type ApiJobSetInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "job" */
export type ApiJobStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiJobStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiJobStreamCursorValueInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "job" */
export enum ApiJobUpdateColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type ApiJobUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiJobSetInput>;
  /** filter the rows which have to be updated */
  where: ApiJobBoolExp;
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
  /** A computed field, executes function "get_member_status" */
  status?: Maybe<Scalars['String']['output']>;
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
  /** A computed field, executes function "get_member_status" */
  status?: Maybe<Scalars['String']['output']>;
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

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type ApiMoneyComparisonExp = {
  _eq?: InputMaybe<Scalars['money']['input']>;
  _gt?: InputMaybe<Scalars['money']['input']>;
  _gte?: InputMaybe<Scalars['money']['input']>;
  _in?: InputMaybe<Array<Scalars['money']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['money']['input']>;
  _lte?: InputMaybe<Scalars['money']['input']>;
  _neq?: InputMaybe<Scalars['money']['input']>;
  _nin?: InputMaybe<Array<Scalars['money']['input']>>;
};

/** mutation root */
export type ApiMutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accommodation_type" */
  delete_accommodation_type?: Maybe<ApiAccommodationTypeMutationResponse>;
  /** delete single row from the table: "accommodation_type" */
  delete_accommodation_type_by_pk?: Maybe<ApiAccommodationType>;
  /** delete data from the table: "addiction_status" */
  delete_addiction_status?: Maybe<ApiAddictionStatusMutationResponse>;
  /** delete single row from the table: "addiction_status" */
  delete_addiction_status_by_pk?: Maybe<ApiAddictionStatus>;
  /** delete data from the table: "bank_account" */
  delete_bank_account?: Maybe<ApiBankAccountMutationResponse>;
  /** delete single row from the table: "bank_account" */
  delete_bank_account_by_pk?: Maybe<ApiBankAccount>;
  /** delete data from the table: "city" */
  delete_city?: Maybe<ApiCityMutationResponse>;
  /** delete single row from the table: "city" */
  delete_city_by_pk?: Maybe<ApiCity>;
  /** delete data from the table: "disability_status" */
  delete_disability_status?: Maybe<ApiDisabilityStatusMutationResponse>;
  /** delete single row from the table: "disability_status" */
  delete_disability_status_by_pk?: Maybe<ApiDisabilityStatus>;
  /** delete data from the table: "document" */
  delete_document?: Maybe<ApiDocumentMutationResponse>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<ApiDocument>;
  /** delete data from the table: "gender" */
  delete_gender?: Maybe<ApiGenderMutationResponse>;
  /** delete single row from the table: "gender" */
  delete_gender_by_pk?: Maybe<ApiGender>;
  /** delete data from the table: "health_status" */
  delete_health_status?: Maybe<ApiHealthStatusMutationResponse>;
  /** delete single row from the table: "health_status" */
  delete_health_status_by_pk?: Maybe<ApiHealthStatus>;
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
  /** delete data from the table: "insurance" */
  delete_insurance?: Maybe<ApiInsuranceMutationResponse>;
  /** delete single row from the table: "insurance" */
  delete_insurance_by_pk?: Maybe<ApiInsurance>;
  /** delete data from the table: "job" */
  delete_job?: Maybe<ApiJobMutationResponse>;
  /** delete single row from the table: "job" */
  delete_job_by_pk?: Maybe<ApiJob>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<ApiMemberMutationResponse>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<ApiMember>;
  /** delete data from the table: "nationality" */
  delete_nationality?: Maybe<ApiNationalityMutationResponse>;
  /** delete single row from the table: "nationality" */
  delete_nationality_by_pk?: Maybe<ApiNationality>;
  /** delete data from the table: "neighborhood" */
  delete_neighborhood?: Maybe<ApiNeighborhoodMutationResponse>;
  /** delete single row from the table: "neighborhood" */
  delete_neighborhood_by_pk?: Maybe<ApiNeighborhood>;
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
  /** delete data from the table: "skill" */
  delete_skill?: Maybe<ApiSkillMutationResponse>;
  /** delete single row from the table: "skill" */
  delete_skill_by_pk?: Maybe<ApiSkill>;
  /** delete data from the table: "subsidy" */
  delete_subsidy?: Maybe<ApiSubsidyMutationResponse>;
  /** delete single row from the table: "subsidy" */
  delete_subsidy_by_pk?: Maybe<ApiSubsidy>;
  /** delete data from the table: "visit" */
  delete_visit?: Maybe<ApiVisitMutationResponse>;
  /** delete single row from the table: "visit" */
  delete_visit_by_pk?: Maybe<ApiVisit>;
  /** delete data from the table: "visit_status" */
  delete_visit_status?: Maybe<ApiVisitStatusMutationResponse>;
  /** delete single row from the table: "visit_status" */
  delete_visit_status_by_pk?: Maybe<ApiVisitStatus>;
  /** insert data into the table: "accommodation_type" */
  insert_accommodation_type?: Maybe<ApiAccommodationTypeMutationResponse>;
  /** insert a single row into the table: "accommodation_type" */
  insert_accommodation_type_one?: Maybe<ApiAccommodationType>;
  /** insert data into the table: "addiction_status" */
  insert_addiction_status?: Maybe<ApiAddictionStatusMutationResponse>;
  /** insert a single row into the table: "addiction_status" */
  insert_addiction_status_one?: Maybe<ApiAddictionStatus>;
  /** insert data into the table: "bank_account" */
  insert_bank_account?: Maybe<ApiBankAccountMutationResponse>;
  /** insert a single row into the table: "bank_account" */
  insert_bank_account_one?: Maybe<ApiBankAccount>;
  /** insert data into the table: "city" */
  insert_city?: Maybe<ApiCityMutationResponse>;
  /** insert a single row into the table: "city" */
  insert_city_one?: Maybe<ApiCity>;
  /** insert data into the table: "disability_status" */
  insert_disability_status?: Maybe<ApiDisabilityStatusMutationResponse>;
  /** insert a single row into the table: "disability_status" */
  insert_disability_status_one?: Maybe<ApiDisabilityStatus>;
  /** insert data into the table: "document" */
  insert_document?: Maybe<ApiDocumentMutationResponse>;
  /** insert a single row into the table: "document" */
  insert_document_one?: Maybe<ApiDocument>;
  /** insert data into the table: "gender" */
  insert_gender?: Maybe<ApiGenderMutationResponse>;
  /** insert a single row into the table: "gender" */
  insert_gender_one?: Maybe<ApiGender>;
  /** insert data into the table: "health_status" */
  insert_health_status?: Maybe<ApiHealthStatusMutationResponse>;
  /** insert a single row into the table: "health_status" */
  insert_health_status_one?: Maybe<ApiHealthStatus>;
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
  /** insert data into the table: "insurance" */
  insert_insurance?: Maybe<ApiInsuranceMutationResponse>;
  /** insert a single row into the table: "insurance" */
  insert_insurance_one?: Maybe<ApiInsurance>;
  /** insert data into the table: "job" */
  insert_job?: Maybe<ApiJobMutationResponse>;
  /** insert a single row into the table: "job" */
  insert_job_one?: Maybe<ApiJob>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<ApiMemberMutationResponse>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<ApiMember>;
  /** insert data into the table: "nationality" */
  insert_nationality?: Maybe<ApiNationalityMutationResponse>;
  /** insert a single row into the table: "nationality" */
  insert_nationality_one?: Maybe<ApiNationality>;
  /** insert data into the table: "neighborhood" */
  insert_neighborhood?: Maybe<ApiNeighborhoodMutationResponse>;
  /** insert a single row into the table: "neighborhood" */
  insert_neighborhood_one?: Maybe<ApiNeighborhood>;
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
  /** insert data into the table: "skill" */
  insert_skill?: Maybe<ApiSkillMutationResponse>;
  /** insert a single row into the table: "skill" */
  insert_skill_one?: Maybe<ApiSkill>;
  /** insert data into the table: "subsidy" */
  insert_subsidy?: Maybe<ApiSubsidyMutationResponse>;
  /** insert a single row into the table: "subsidy" */
  insert_subsidy_one?: Maybe<ApiSubsidy>;
  /** insert data into the table: "visit" */
  insert_visit?: Maybe<ApiVisitMutationResponse>;
  /** insert a single row into the table: "visit" */
  insert_visit_one?: Maybe<ApiVisit>;
  /** insert data into the table: "visit_status" */
  insert_visit_status?: Maybe<ApiVisitStatusMutationResponse>;
  /** insert a single row into the table: "visit_status" */
  insert_visit_status_one?: Maybe<ApiVisitStatus>;
  /** update data of the table: "accommodation_type" */
  update_accommodation_type?: Maybe<ApiAccommodationTypeMutationResponse>;
  /** update single row of the table: "accommodation_type" */
  update_accommodation_type_by_pk?: Maybe<ApiAccommodationType>;
  /** update multiples rows of table: "accommodation_type" */
  update_accommodation_type_many?: Maybe<Array<Maybe<ApiAccommodationTypeMutationResponse>>>;
  /** update data of the table: "addiction_status" */
  update_addiction_status?: Maybe<ApiAddictionStatusMutationResponse>;
  /** update single row of the table: "addiction_status" */
  update_addiction_status_by_pk?: Maybe<ApiAddictionStatus>;
  /** update multiples rows of table: "addiction_status" */
  update_addiction_status_many?: Maybe<Array<Maybe<ApiAddictionStatusMutationResponse>>>;
  /** update data of the table: "bank_account" */
  update_bank_account?: Maybe<ApiBankAccountMutationResponse>;
  /** update single row of the table: "bank_account" */
  update_bank_account_by_pk?: Maybe<ApiBankAccount>;
  /** update multiples rows of table: "bank_account" */
  update_bank_account_many?: Maybe<Array<Maybe<ApiBankAccountMutationResponse>>>;
  /** update data of the table: "city" */
  update_city?: Maybe<ApiCityMutationResponse>;
  /** update single row of the table: "city" */
  update_city_by_pk?: Maybe<ApiCity>;
  /** update multiples rows of table: "city" */
  update_city_many?: Maybe<Array<Maybe<ApiCityMutationResponse>>>;
  /** update data of the table: "disability_status" */
  update_disability_status?: Maybe<ApiDisabilityStatusMutationResponse>;
  /** update single row of the table: "disability_status" */
  update_disability_status_by_pk?: Maybe<ApiDisabilityStatus>;
  /** update multiples rows of table: "disability_status" */
  update_disability_status_many?: Maybe<Array<Maybe<ApiDisabilityStatusMutationResponse>>>;
  /** update data of the table: "document" */
  update_document?: Maybe<ApiDocumentMutationResponse>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<ApiDocument>;
  /** update multiples rows of table: "document" */
  update_document_many?: Maybe<Array<Maybe<ApiDocumentMutationResponse>>>;
  /** update data of the table: "gender" */
  update_gender?: Maybe<ApiGenderMutationResponse>;
  /** update single row of the table: "gender" */
  update_gender_by_pk?: Maybe<ApiGender>;
  /** update multiples rows of table: "gender" */
  update_gender_many?: Maybe<Array<Maybe<ApiGenderMutationResponse>>>;
  /** update data of the table: "health_status" */
  update_health_status?: Maybe<ApiHealthStatusMutationResponse>;
  /** update single row of the table: "health_status" */
  update_health_status_by_pk?: Maybe<ApiHealthStatus>;
  /** update multiples rows of table: "health_status" */
  update_health_status_many?: Maybe<Array<Maybe<ApiHealthStatusMutationResponse>>>;
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
  /** update data of the table: "insurance" */
  update_insurance?: Maybe<ApiInsuranceMutationResponse>;
  /** update single row of the table: "insurance" */
  update_insurance_by_pk?: Maybe<ApiInsurance>;
  /** update multiples rows of table: "insurance" */
  update_insurance_many?: Maybe<Array<Maybe<ApiInsuranceMutationResponse>>>;
  /** update data of the table: "job" */
  update_job?: Maybe<ApiJobMutationResponse>;
  /** update single row of the table: "job" */
  update_job_by_pk?: Maybe<ApiJob>;
  /** update multiples rows of table: "job" */
  update_job_many?: Maybe<Array<Maybe<ApiJobMutationResponse>>>;
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
  /** update data of the table: "neighborhood" */
  update_neighborhood?: Maybe<ApiNeighborhoodMutationResponse>;
  /** update single row of the table: "neighborhood" */
  update_neighborhood_by_pk?: Maybe<ApiNeighborhood>;
  /** update multiples rows of table: "neighborhood" */
  update_neighborhood_many?: Maybe<Array<Maybe<ApiNeighborhoodMutationResponse>>>;
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
  /** update data of the table: "skill" */
  update_skill?: Maybe<ApiSkillMutationResponse>;
  /** update single row of the table: "skill" */
  update_skill_by_pk?: Maybe<ApiSkill>;
  /** update multiples rows of table: "skill" */
  update_skill_many?: Maybe<Array<Maybe<ApiSkillMutationResponse>>>;
  /** update data of the table: "subsidy" */
  update_subsidy?: Maybe<ApiSubsidyMutationResponse>;
  /** update single row of the table: "subsidy" */
  update_subsidy_by_pk?: Maybe<ApiSubsidy>;
  /** update multiples rows of table: "subsidy" */
  update_subsidy_many?: Maybe<Array<Maybe<ApiSubsidyMutationResponse>>>;
  /** update data of the table: "visit" */
  update_visit?: Maybe<ApiVisitMutationResponse>;
  /** update single row of the table: "visit" */
  update_visit_by_pk?: Maybe<ApiVisit>;
  /** update multiples rows of table: "visit" */
  update_visit_many?: Maybe<Array<Maybe<ApiVisitMutationResponse>>>;
  /** update data of the table: "visit_status" */
  update_visit_status?: Maybe<ApiVisitStatusMutationResponse>;
  /** update single row of the table: "visit_status" */
  update_visit_status_by_pk?: Maybe<ApiVisitStatus>;
  /** update multiples rows of table: "visit_status" */
  update_visit_status_many?: Maybe<Array<Maybe<ApiVisitStatusMutationResponse>>>;
};


/** mutation root */
export type ApiMutationRootApiDeleteAccommodationTypeArgs = {
  where: ApiAccommodationTypeBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteAccommodationTypeByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteAddictionStatusArgs = {
  where: ApiAddictionStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteAddictionStatusByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteBankAccountArgs = {
  where: ApiBankAccountBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteBankAccountByPkArgs = {
  id: Scalars['uuid']['input'];
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
export type ApiMutationRootApiDeleteDisabilityStatusArgs = {
  where: ApiDisabilityStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteDisabilityStatusByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteDocumentArgs = {
  where: ApiDocumentBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteDocumentByPkArgs = {
  id: Scalars['uuid']['input'];
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
export type ApiMutationRootApiDeleteHealthStatusArgs = {
  where: ApiHealthStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteHealthStatusByPkArgs = {
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
export type ApiMutationRootApiDeleteInsuranceArgs = {
  where: ApiInsuranceBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteInsuranceByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteJobArgs = {
  where: ApiJobBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteJobByPkArgs = {
  id: Scalars['uuid']['input'];
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
export type ApiMutationRootApiDeleteNeighborhoodArgs = {
  where: ApiNeighborhoodBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteNeighborhoodByPkArgs = {
  name: Scalars['String']['input'];
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
export type ApiMutationRootApiDeleteSkillArgs = {
  where: ApiSkillBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteSkillByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteSubsidyArgs = {
  where: ApiSubsidyBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteSubsidyByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteVisitArgs = {
  where: ApiVisitBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteVisitByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type ApiMutationRootApiDeleteVisitStatusArgs = {
  where: ApiVisitStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiDeleteVisitStatusByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type ApiMutationRootApiInsertAccommodationTypeArgs = {
  objects: Array<ApiAccommodationTypeInsertInput>;
  on_conflict?: InputMaybe<ApiAccommodationTypeOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertAccommodationTypeOneArgs = {
  object: ApiAccommodationTypeInsertInput;
  on_conflict?: InputMaybe<ApiAccommodationTypeOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertAddictionStatusArgs = {
  objects: Array<ApiAddictionStatusInsertInput>;
  on_conflict?: InputMaybe<ApiAddictionStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertAddictionStatusOneArgs = {
  object: ApiAddictionStatusInsertInput;
  on_conflict?: InputMaybe<ApiAddictionStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertBankAccountArgs = {
  objects: Array<ApiBankAccountInsertInput>;
  on_conflict?: InputMaybe<ApiBankAccountOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertBankAccountOneArgs = {
  object: ApiBankAccountInsertInput;
  on_conflict?: InputMaybe<ApiBankAccountOnConflict>;
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
export type ApiMutationRootApiInsertDisabilityStatusArgs = {
  objects: Array<ApiDisabilityStatusInsertInput>;
  on_conflict?: InputMaybe<ApiDisabilityStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertDisabilityStatusOneArgs = {
  object: ApiDisabilityStatusInsertInput;
  on_conflict?: InputMaybe<ApiDisabilityStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertDocumentArgs = {
  objects: Array<ApiDocumentInsertInput>;
  on_conflict?: InputMaybe<ApiDocumentOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertDocumentOneArgs = {
  object: ApiDocumentInsertInput;
  on_conflict?: InputMaybe<ApiDocumentOnConflict>;
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
export type ApiMutationRootApiInsertHealthStatusArgs = {
  objects: Array<ApiHealthStatusInsertInput>;
  on_conflict?: InputMaybe<ApiHealthStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertHealthStatusOneArgs = {
  object: ApiHealthStatusInsertInput;
  on_conflict?: InputMaybe<ApiHealthStatusOnConflict>;
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
export type ApiMutationRootApiInsertInsuranceArgs = {
  objects: Array<ApiInsuranceInsertInput>;
  on_conflict?: InputMaybe<ApiInsuranceOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertInsuranceOneArgs = {
  object: ApiInsuranceInsertInput;
  on_conflict?: InputMaybe<ApiInsuranceOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertJobArgs = {
  objects: Array<ApiJobInsertInput>;
  on_conflict?: InputMaybe<ApiJobOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertJobOneArgs = {
  object: ApiJobInsertInput;
  on_conflict?: InputMaybe<ApiJobOnConflict>;
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
export type ApiMutationRootApiInsertNeighborhoodArgs = {
  objects: Array<ApiNeighborhoodInsertInput>;
  on_conflict?: InputMaybe<ApiNeighborhoodOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertNeighborhoodOneArgs = {
  object: ApiNeighborhoodInsertInput;
  on_conflict?: InputMaybe<ApiNeighborhoodOnConflict>;
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
export type ApiMutationRootApiInsertSkillArgs = {
  objects: Array<ApiSkillInsertInput>;
  on_conflict?: InputMaybe<ApiSkillOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertSkillOneArgs = {
  object: ApiSkillInsertInput;
  on_conflict?: InputMaybe<ApiSkillOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertSubsidyArgs = {
  objects: Array<ApiSubsidyInsertInput>;
  on_conflict?: InputMaybe<ApiSubsidyOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertSubsidyOneArgs = {
  object: ApiSubsidyInsertInput;
  on_conflict?: InputMaybe<ApiSubsidyOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertVisitArgs = {
  objects: Array<ApiVisitInsertInput>;
  on_conflict?: InputMaybe<ApiVisitOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertVisitOneArgs = {
  object: ApiVisitInsertInput;
  on_conflict?: InputMaybe<ApiVisitOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertVisitStatusArgs = {
  objects: Array<ApiVisitStatusInsertInput>;
  on_conflict?: InputMaybe<ApiVisitStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiInsertVisitStatusOneArgs = {
  object: ApiVisitStatusInsertInput;
  on_conflict?: InputMaybe<ApiVisitStatusOnConflict>;
};


/** mutation root */
export type ApiMutationRootApiUpdateAccommodationTypeArgs = {
  _set?: InputMaybe<ApiAccommodationTypeSetInput>;
  where: ApiAccommodationTypeBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateAccommodationTypeByPkArgs = {
  _set?: InputMaybe<ApiAccommodationTypeSetInput>;
  pk_columns: ApiAccommodationTypePkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateAccommodationTypeManyArgs = {
  updates: Array<ApiAccommodationTypeUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateAddictionStatusArgs = {
  _set?: InputMaybe<ApiAddictionStatusSetInput>;
  where: ApiAddictionStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateAddictionStatusByPkArgs = {
  _set?: InputMaybe<ApiAddictionStatusSetInput>;
  pk_columns: ApiAddictionStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateAddictionStatusManyArgs = {
  updates: Array<ApiAddictionStatusUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateBankAccountArgs = {
  _set?: InputMaybe<ApiBankAccountSetInput>;
  where: ApiBankAccountBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateBankAccountByPkArgs = {
  _set?: InputMaybe<ApiBankAccountSetInput>;
  pk_columns: ApiBankAccountPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateBankAccountManyArgs = {
  updates: Array<ApiBankAccountUpdates>;
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
export type ApiMutationRootApiUpdateDisabilityStatusArgs = {
  _set?: InputMaybe<ApiDisabilityStatusSetInput>;
  where: ApiDisabilityStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateDisabilityStatusByPkArgs = {
  _set?: InputMaybe<ApiDisabilityStatusSetInput>;
  pk_columns: ApiDisabilityStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateDisabilityStatusManyArgs = {
  updates: Array<ApiDisabilityStatusUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateDocumentArgs = {
  _set?: InputMaybe<ApiDocumentSetInput>;
  where: ApiDocumentBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateDocumentByPkArgs = {
  _set?: InputMaybe<ApiDocumentSetInput>;
  pk_columns: ApiDocumentPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateDocumentManyArgs = {
  updates: Array<ApiDocumentUpdates>;
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
export type ApiMutationRootApiUpdateHealthStatusArgs = {
  _set?: InputMaybe<ApiHealthStatusSetInput>;
  where: ApiHealthStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHealthStatusByPkArgs = {
  _set?: InputMaybe<ApiHealthStatusSetInput>;
  pk_columns: ApiHealthStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHealthStatusManyArgs = {
  updates: Array<ApiHealthStatusUpdates>;
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
  _inc?: InputMaybe<ApiHouseholderIncInput>;
  _set?: InputMaybe<ApiHouseholderSetInput>;
  where: ApiHouseholderBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholderByPkArgs = {
  _inc?: InputMaybe<ApiHouseholderIncInput>;
  _set?: InputMaybe<ApiHouseholderSetInput>;
  pk_columns: ApiHouseholderPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateHouseholderManyArgs = {
  updates: Array<ApiHouseholderUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateInsuranceArgs = {
  _set?: InputMaybe<ApiInsuranceSetInput>;
  where: ApiInsuranceBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateInsuranceByPkArgs = {
  _set?: InputMaybe<ApiInsuranceSetInput>;
  pk_columns: ApiInsurancePkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateInsuranceManyArgs = {
  updates: Array<ApiInsuranceUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateJobArgs = {
  _set?: InputMaybe<ApiJobSetInput>;
  where: ApiJobBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateJobByPkArgs = {
  _set?: InputMaybe<ApiJobSetInput>;
  pk_columns: ApiJobPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateJobManyArgs = {
  updates: Array<ApiJobUpdates>;
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
export type ApiMutationRootApiUpdateNeighborhoodArgs = {
  _set?: InputMaybe<ApiNeighborhoodSetInput>;
  where: ApiNeighborhoodBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateNeighborhoodByPkArgs = {
  _set?: InputMaybe<ApiNeighborhoodSetInput>;
  pk_columns: ApiNeighborhoodPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateNeighborhoodManyArgs = {
  updates: Array<ApiNeighborhoodUpdates>;
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


/** mutation root */
export type ApiMutationRootApiUpdateSkillArgs = {
  _set?: InputMaybe<ApiSkillSetInput>;
  where: ApiSkillBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateSkillByPkArgs = {
  _set?: InputMaybe<ApiSkillSetInput>;
  pk_columns: ApiSkillPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateSkillManyArgs = {
  updates: Array<ApiSkillUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateSubsidyArgs = {
  _set?: InputMaybe<ApiSubsidySetInput>;
  where: ApiSubsidyBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateSubsidyByPkArgs = {
  _set?: InputMaybe<ApiSubsidySetInput>;
  pk_columns: ApiSubsidyPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateSubsidyManyArgs = {
  updates: Array<ApiSubsidyUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateVisitArgs = {
  _set?: InputMaybe<ApiVisitSetInput>;
  where: ApiVisitBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateVisitByPkArgs = {
  _set?: InputMaybe<ApiVisitSetInput>;
  pk_columns: ApiVisitPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateVisitManyArgs = {
  updates: Array<ApiVisitUpdates>;
};


/** mutation root */
export type ApiMutationRootApiUpdateVisitStatusArgs = {
  _set?: InputMaybe<ApiVisitStatusSetInput>;
  where: ApiVisitStatusBoolExp;
};


/** mutation root */
export type ApiMutationRootApiUpdateVisitStatusByPkArgs = {
  _set?: InputMaybe<ApiVisitStatusSetInput>;
  pk_columns: ApiVisitStatusPkColumnsInput;
};


/** mutation root */
export type ApiMutationRootApiUpdateVisitStatusManyArgs = {
  updates: Array<ApiVisitStatusUpdates>;
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
  Ir = 'Ir',
  Unknown = 'Unknown'
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

/** columns and relationships of "neighborhood" */
export type ApiNeighborhood = {
  __typename?: 'neighborhood';
  city: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "neighborhood" */
export type ApiNeighborhoodAggregate = {
  __typename?: 'neighborhood_aggregate';
  aggregate?: Maybe<ApiNeighborhoodAggregateFields>;
  nodes: Array<ApiNeighborhood>;
};

/** aggregate fields of "neighborhood" */
export type ApiNeighborhoodAggregateFields = {
  __typename?: 'neighborhood_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiNeighborhoodMaxFields>;
  min?: Maybe<ApiNeighborhoodMinFields>;
};


/** aggregate fields of "neighborhood" */
export type ApiNeighborhoodAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiNeighborhoodSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "neighborhood". All fields are combined with a logical 'AND'. */
export type ApiNeighborhoodBoolExp = {
  _and?: InputMaybe<Array<ApiNeighborhoodBoolExp>>;
  _not?: InputMaybe<ApiNeighborhoodBoolExp>;
  _or?: InputMaybe<Array<ApiNeighborhoodBoolExp>>;
  city?: InputMaybe<ApiStringComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "neighborhood" */
export enum ApiNeighborhoodConstraint {
  /** unique or primary key constraint on columns "name" */
  NeighborhoodPkey = 'neighborhood_pkey'
}

/** input type for inserting data into table "neighborhood" */
export type ApiNeighborhoodInsertInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiNeighborhoodMaxFields = {
  __typename?: 'neighborhood_max_fields';
  city?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiNeighborhoodMinFields = {
  __typename?: 'neighborhood_min_fields';
  city?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "neighborhood" */
export type ApiNeighborhoodMutationResponse = {
  __typename?: 'neighborhood_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiNeighborhood>;
};

/** on_conflict condition type for table "neighborhood" */
export type ApiNeighborhoodOnConflict = {
  constraint: ApiNeighborhoodConstraint;
  update_columns?: Array<ApiNeighborhoodUpdateColumn>;
  where?: InputMaybe<ApiNeighborhoodBoolExp>;
};

/** Ordering options when selecting data from "neighborhood". */
export type ApiNeighborhoodOrderBy = {
  city?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: neighborhood */
export type ApiNeighborhoodPkColumnsInput = {
  name: Scalars['String']['input'];
};

/** select columns of table "neighborhood" */
export enum ApiNeighborhoodSelectColumn {
  /** column name */
  City = 'city',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "neighborhood" */
export type ApiNeighborhoodSetInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "neighborhood" */
export type ApiNeighborhoodStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiNeighborhoodStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiNeighborhoodStreamCursorValueInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "neighborhood" */
export enum ApiNeighborhoodUpdateColumn {
  /** column name */
  City = 'city',
  /** column name */
  Name = 'name'
}

export type ApiNeighborhoodUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiNeighborhoodSetInput>;
  /** filter the rows which have to be updated */
  where: ApiNeighborhoodBoolExp;
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
  /** fetch data from the table: "accommodation_type" */
  accommodation_type: Array<ApiAccommodationType>;
  /** fetch aggregated fields from the table: "accommodation_type" */
  accommodation_type_aggregate: ApiAccommodationTypeAggregate;
  /** fetch data from the table: "accommodation_type" using primary key columns */
  accommodation_type_by_pk?: Maybe<ApiAccommodationType>;
  /** fetch data from the table: "addiction_status" */
  addiction_status: Array<ApiAddictionStatus>;
  /** fetch aggregated fields from the table: "addiction_status" */
  addiction_status_aggregate: ApiAddictionStatusAggregate;
  /** fetch data from the table: "addiction_status" using primary key columns */
  addiction_status_by_pk?: Maybe<ApiAddictionStatus>;
  /** fetch data from the table: "bank_account" */
  bank_account: Array<ApiBankAccount>;
  /** fetch aggregated fields from the table: "bank_account" */
  bank_account_aggregate: ApiBankAccountAggregate;
  /** fetch data from the table: "bank_account" using primary key columns */
  bank_account_by_pk?: Maybe<ApiBankAccount>;
  /** fetch data from the table: "city" */
  city: Array<ApiCity>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: ApiCityAggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<ApiCity>;
  /** fetch data from the table: "disability_status" */
  disability_status: Array<ApiDisabilityStatus>;
  /** fetch aggregated fields from the table: "disability_status" */
  disability_status_aggregate: ApiDisabilityStatusAggregate;
  /** fetch data from the table: "disability_status" using primary key columns */
  disability_status_by_pk?: Maybe<ApiDisabilityStatus>;
  /** fetch data from the table: "document" */
  document: Array<ApiDocument>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: ApiDocumentAggregate;
  /** fetch data from the table: "document" using primary key columns */
  document_by_pk?: Maybe<ApiDocument>;
  /** fetch data from the table: "gender" */
  gender: Array<ApiGender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: ApiGenderAggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<ApiGender>;
  /** fetch data from the table: "health_status" */
  health_status: Array<ApiHealthStatus>;
  /** fetch aggregated fields from the table: "health_status" */
  health_status_aggregate: ApiHealthStatusAggregate;
  /** fetch data from the table: "health_status" using primary key columns */
  health_status_by_pk?: Maybe<ApiHealthStatus>;
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
  /** fetch data from the table: "insurance" */
  insurance: Array<ApiInsurance>;
  /** fetch aggregated fields from the table: "insurance" */
  insurance_aggregate: ApiInsuranceAggregate;
  /** fetch data from the table: "insurance" using primary key columns */
  insurance_by_pk?: Maybe<ApiInsurance>;
  /** fetch data from the table: "job" */
  job: Array<ApiJob>;
  /** fetch aggregated fields from the table: "job" */
  job_aggregate: ApiJobAggregate;
  /** fetch data from the table: "job" using primary key columns */
  job_by_pk?: Maybe<ApiJob>;
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
  /** fetch data from the table: "neighborhood" */
  neighborhood: Array<ApiNeighborhood>;
  /** fetch aggregated fields from the table: "neighborhood" */
  neighborhood_aggregate: ApiNeighborhoodAggregate;
  /** fetch data from the table: "neighborhood" using primary key columns */
  neighborhood_by_pk?: Maybe<ApiNeighborhood>;
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
  /** fetch data from the table: "skill" */
  skill: Array<ApiSkill>;
  /** fetch aggregated fields from the table: "skill" */
  skill_aggregate: ApiSkillAggregate;
  /** fetch data from the table: "skill" using primary key columns */
  skill_by_pk?: Maybe<ApiSkill>;
  /** fetch data from the table: "subsidy" */
  subsidy: Array<ApiSubsidy>;
  /** fetch aggregated fields from the table: "subsidy" */
  subsidy_aggregate: ApiSubsidyAggregate;
  /** fetch data from the table: "subsidy" using primary key columns */
  subsidy_by_pk?: Maybe<ApiSubsidy>;
  /** fetch data from the table: "visit" */
  visit: Array<ApiVisit>;
  /** fetch aggregated fields from the table: "visit" */
  visit_aggregate: ApiVisitAggregate;
  /** fetch data from the table: "visit" using primary key columns */
  visit_by_pk?: Maybe<ApiVisit>;
  /** fetch data from the table: "visit_status" */
  visit_status: Array<ApiVisitStatus>;
  /** fetch aggregated fields from the table: "visit_status" */
  visit_status_aggregate: ApiVisitStatusAggregate;
  /** fetch data from the table: "visit_status" using primary key columns */
  visit_status_by_pk?: Maybe<ApiVisitStatus>;
};


export type ApiQueryRootApiAccommodationTypeArgs = {
  distinct_on?: InputMaybe<Array<ApiAccommodationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAccommodationTypeOrderBy>>;
  where?: InputMaybe<ApiAccommodationTypeBoolExp>;
};


export type ApiQueryRootApiAccommodationTypeAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiAccommodationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAccommodationTypeOrderBy>>;
  where?: InputMaybe<ApiAccommodationTypeBoolExp>;
};


export type ApiQueryRootApiAccommodationTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiAddictionStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiAddictionStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAddictionStatusOrderBy>>;
  where?: InputMaybe<ApiAddictionStatusBoolExp>;
};


export type ApiQueryRootApiAddictionStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiAddictionStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAddictionStatusOrderBy>>;
  where?: InputMaybe<ApiAddictionStatusBoolExp>;
};


export type ApiQueryRootApiAddictionStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiBankAccountArgs = {
  distinct_on?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiBankAccountOrderBy>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};


export type ApiQueryRootApiBankAccountAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiBankAccountOrderBy>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};


export type ApiQueryRootApiBankAccountByPkArgs = {
  id: Scalars['uuid']['input'];
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


export type ApiQueryRootApiDisabilityStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiDisabilityStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDisabilityStatusOrderBy>>;
  where?: InputMaybe<ApiDisabilityStatusBoolExp>;
};


export type ApiQueryRootApiDisabilityStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDisabilityStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDisabilityStatusOrderBy>>;
  where?: InputMaybe<ApiDisabilityStatusBoolExp>;
};


export type ApiQueryRootApiDisabilityStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiQueryRootApiDocumentArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


export type ApiQueryRootApiDocumentAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


export type ApiQueryRootApiDocumentByPkArgs = {
  id: Scalars['uuid']['input'];
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


export type ApiQueryRootApiHealthStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiHealthStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHealthStatusOrderBy>>;
  where?: InputMaybe<ApiHealthStatusBoolExp>;
};


export type ApiQueryRootApiHealthStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHealthStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHealthStatusOrderBy>>;
  where?: InputMaybe<ApiHealthStatusBoolExp>;
};


export type ApiQueryRootApiHealthStatusByPkArgs = {
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


export type ApiQueryRootApiInsuranceArgs = {
  distinct_on?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiInsuranceOrderBy>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


export type ApiQueryRootApiInsuranceAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiInsuranceOrderBy>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


export type ApiQueryRootApiInsuranceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiJobArgs = {
  distinct_on?: InputMaybe<Array<ApiJobSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiJobOrderBy>>;
  where?: InputMaybe<ApiJobBoolExp>;
};


export type ApiQueryRootApiJobAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiJobSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiJobOrderBy>>;
  where?: InputMaybe<ApiJobBoolExp>;
};


export type ApiQueryRootApiJobByPkArgs = {
  id: Scalars['uuid']['input'];
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


export type ApiQueryRootApiNeighborhoodArgs = {
  distinct_on?: InputMaybe<Array<ApiNeighborhoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNeighborhoodOrderBy>>;
  where?: InputMaybe<ApiNeighborhoodBoolExp>;
};


export type ApiQueryRootApiNeighborhoodAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiNeighborhoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNeighborhoodOrderBy>>;
  where?: InputMaybe<ApiNeighborhoodBoolExp>;
};


export type ApiQueryRootApiNeighborhoodByPkArgs = {
  name: Scalars['String']['input'];
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


export type ApiQueryRootApiSkillArgs = {
  distinct_on?: InputMaybe<Array<ApiSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSkillOrderBy>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


export type ApiQueryRootApiSkillAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSkillOrderBy>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


export type ApiQueryRootApiSkillByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiSubsidyArgs = {
  distinct_on?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSubsidyOrderBy>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};


export type ApiQueryRootApiSubsidyAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSubsidyOrderBy>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};


export type ApiQueryRootApiSubsidyByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiVisitArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitOrderBy>>;
  where?: InputMaybe<ApiVisitBoolExp>;
};


export type ApiQueryRootApiVisitAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitOrderBy>>;
  where?: InputMaybe<ApiVisitBoolExp>;
};


export type ApiQueryRootApiVisitByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiQueryRootApiVisitStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitStatusOrderBy>>;
  where?: InputMaybe<ApiVisitStatusBoolExp>;
};


export type ApiQueryRootApiVisitStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitStatusOrderBy>>;
  where?: InputMaybe<ApiVisitStatusBoolExp>;
};


export type ApiQueryRootApiVisitStatusByPkArgs = {
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
  Islam = 'Islam',
  Unknown = 'Unknown'
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

/** columns and relationships of "skill" */
export type ApiSkill = {
  __typename?: 'skill';
  householder_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "skill" */
export type ApiSkillAggregate = {
  __typename?: 'skill_aggregate';
  aggregate?: Maybe<ApiSkillAggregateFields>;
  nodes: Array<ApiSkill>;
};

export type ApiSkillAggregateBoolExp = {
  count?: InputMaybe<ApiSkillAggregateBoolExpCount>;
};

export type ApiSkillAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiSkillSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiSkillBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "skill" */
export type ApiSkillAggregateFields = {
  __typename?: 'skill_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiSkillMaxFields>;
  min?: Maybe<ApiSkillMinFields>;
};


/** aggregate fields of "skill" */
export type ApiSkillAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiSkillSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "skill" */
export type ApiSkillAggregateOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiSkillMaxOrderBy>;
  min?: InputMaybe<ApiSkillMinOrderBy>;
};

/** input type for inserting array relation for remote table "skill" */
export type ApiSkillArrRelInsertInput = {
  data: Array<ApiSkillInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiSkillOnConflict>;
};

/** Boolean expression to filter rows from the table "skill". All fields are combined with a logical 'AND'. */
export type ApiSkillBoolExp = {
  _and?: InputMaybe<Array<ApiSkillBoolExp>>;
  _not?: InputMaybe<ApiSkillBoolExp>;
  _or?: InputMaybe<Array<ApiSkillBoolExp>>;
  householder_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "skill" */
export enum ApiSkillConstraint {
  /** unique or primary key constraint on columns "id" */
  SkillIdKey = 'skill_id_key',
  /** unique or primary key constraint on columns "id" */
  SkillPkey = 'skill_pkey'
}

/** input type for inserting data into table "skill" */
export type ApiSkillInsertInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiSkillMaxFields = {
  __typename?: 'skill_max_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "skill" */
export type ApiSkillMaxOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiSkillMinFields = {
  __typename?: 'skill_min_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "skill" */
export type ApiSkillMinOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "skill" */
export type ApiSkillMutationResponse = {
  __typename?: 'skill_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiSkill>;
};

/** on_conflict condition type for table "skill" */
export type ApiSkillOnConflict = {
  constraint: ApiSkillConstraint;
  update_columns?: Array<ApiSkillUpdateColumn>;
  where?: InputMaybe<ApiSkillBoolExp>;
};

/** Ordering options when selecting data from "skill". */
export type ApiSkillOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: skill */
export type ApiSkillPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "skill" */
export enum ApiSkillSelectColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "skill" */
export type ApiSkillSetInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "skill" */
export type ApiSkillStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiSkillStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiSkillStreamCursorValueInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "skill" */
export enum ApiSkillUpdateColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type ApiSkillUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiSkillSetInput>;
  /** filter the rows which have to be updated */
  where: ApiSkillBoolExp;
};

export type ApiSubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accommodation_type" */
  accommodation_type: Array<ApiAccommodationType>;
  /** fetch aggregated fields from the table: "accommodation_type" */
  accommodation_type_aggregate: ApiAccommodationTypeAggregate;
  /** fetch data from the table: "accommodation_type" using primary key columns */
  accommodation_type_by_pk?: Maybe<ApiAccommodationType>;
  /** fetch data from the table in a streaming manner: "accommodation_type" */
  accommodation_type_stream: Array<ApiAccommodationType>;
  /** fetch data from the table: "addiction_status" */
  addiction_status: Array<ApiAddictionStatus>;
  /** fetch aggregated fields from the table: "addiction_status" */
  addiction_status_aggregate: ApiAddictionStatusAggregate;
  /** fetch data from the table: "addiction_status" using primary key columns */
  addiction_status_by_pk?: Maybe<ApiAddictionStatus>;
  /** fetch data from the table in a streaming manner: "addiction_status" */
  addiction_status_stream: Array<ApiAddictionStatus>;
  /** fetch data from the table: "bank_account" */
  bank_account: Array<ApiBankAccount>;
  /** fetch aggregated fields from the table: "bank_account" */
  bank_account_aggregate: ApiBankAccountAggregate;
  /** fetch data from the table: "bank_account" using primary key columns */
  bank_account_by_pk?: Maybe<ApiBankAccount>;
  /** fetch data from the table in a streaming manner: "bank_account" */
  bank_account_stream: Array<ApiBankAccount>;
  /** fetch data from the table: "city" */
  city: Array<ApiCity>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: ApiCityAggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<ApiCity>;
  /** fetch data from the table in a streaming manner: "city" */
  city_stream: Array<ApiCity>;
  /** fetch data from the table: "disability_status" */
  disability_status: Array<ApiDisabilityStatus>;
  /** fetch aggregated fields from the table: "disability_status" */
  disability_status_aggregate: ApiDisabilityStatusAggregate;
  /** fetch data from the table: "disability_status" using primary key columns */
  disability_status_by_pk?: Maybe<ApiDisabilityStatus>;
  /** fetch data from the table in a streaming manner: "disability_status" */
  disability_status_stream: Array<ApiDisabilityStatus>;
  /** fetch data from the table: "document" */
  document: Array<ApiDocument>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: ApiDocumentAggregate;
  /** fetch data from the table: "document" using primary key columns */
  document_by_pk?: Maybe<ApiDocument>;
  /** fetch data from the table in a streaming manner: "document" */
  document_stream: Array<ApiDocument>;
  /** fetch data from the table: "gender" */
  gender: Array<ApiGender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: ApiGenderAggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<ApiGender>;
  /** fetch data from the table in a streaming manner: "gender" */
  gender_stream: Array<ApiGender>;
  /** fetch data from the table: "health_status" */
  health_status: Array<ApiHealthStatus>;
  /** fetch aggregated fields from the table: "health_status" */
  health_status_aggregate: ApiHealthStatusAggregate;
  /** fetch data from the table: "health_status" using primary key columns */
  health_status_by_pk?: Maybe<ApiHealthStatus>;
  /** fetch data from the table in a streaming manner: "health_status" */
  health_status_stream: Array<ApiHealthStatus>;
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
  /** fetch data from the table: "insurance" */
  insurance: Array<ApiInsurance>;
  /** fetch aggregated fields from the table: "insurance" */
  insurance_aggregate: ApiInsuranceAggregate;
  /** fetch data from the table: "insurance" using primary key columns */
  insurance_by_pk?: Maybe<ApiInsurance>;
  /** fetch data from the table in a streaming manner: "insurance" */
  insurance_stream: Array<ApiInsurance>;
  /** fetch data from the table: "job" */
  job: Array<ApiJob>;
  /** fetch aggregated fields from the table: "job" */
  job_aggregate: ApiJobAggregate;
  /** fetch data from the table: "job" using primary key columns */
  job_by_pk?: Maybe<ApiJob>;
  /** fetch data from the table in a streaming manner: "job" */
  job_stream: Array<ApiJob>;
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
  /** fetch data from the table: "neighborhood" */
  neighborhood: Array<ApiNeighborhood>;
  /** fetch aggregated fields from the table: "neighborhood" */
  neighborhood_aggregate: ApiNeighborhoodAggregate;
  /** fetch data from the table: "neighborhood" using primary key columns */
  neighborhood_by_pk?: Maybe<ApiNeighborhood>;
  /** fetch data from the table in a streaming manner: "neighborhood" */
  neighborhood_stream: Array<ApiNeighborhood>;
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
  /** fetch data from the table: "skill" */
  skill: Array<ApiSkill>;
  /** fetch aggregated fields from the table: "skill" */
  skill_aggregate: ApiSkillAggregate;
  /** fetch data from the table: "skill" using primary key columns */
  skill_by_pk?: Maybe<ApiSkill>;
  /** fetch data from the table in a streaming manner: "skill" */
  skill_stream: Array<ApiSkill>;
  /** fetch data from the table: "subsidy" */
  subsidy: Array<ApiSubsidy>;
  /** fetch aggregated fields from the table: "subsidy" */
  subsidy_aggregate: ApiSubsidyAggregate;
  /** fetch data from the table: "subsidy" using primary key columns */
  subsidy_by_pk?: Maybe<ApiSubsidy>;
  /** fetch data from the table in a streaming manner: "subsidy" */
  subsidy_stream: Array<ApiSubsidy>;
  /** fetch data from the table: "visit" */
  visit: Array<ApiVisit>;
  /** fetch aggregated fields from the table: "visit" */
  visit_aggregate: ApiVisitAggregate;
  /** fetch data from the table: "visit" using primary key columns */
  visit_by_pk?: Maybe<ApiVisit>;
  /** fetch data from the table: "visit_status" */
  visit_status: Array<ApiVisitStatus>;
  /** fetch aggregated fields from the table: "visit_status" */
  visit_status_aggregate: ApiVisitStatusAggregate;
  /** fetch data from the table: "visit_status" using primary key columns */
  visit_status_by_pk?: Maybe<ApiVisitStatus>;
  /** fetch data from the table in a streaming manner: "visit_status" */
  visit_status_stream: Array<ApiVisitStatus>;
  /** fetch data from the table in a streaming manner: "visit" */
  visit_stream: Array<ApiVisit>;
};


export type ApiSubscriptionRootApiAccommodationTypeArgs = {
  distinct_on?: InputMaybe<Array<ApiAccommodationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAccommodationTypeOrderBy>>;
  where?: InputMaybe<ApiAccommodationTypeBoolExp>;
};


export type ApiSubscriptionRootApiAccommodationTypeAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiAccommodationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAccommodationTypeOrderBy>>;
  where?: InputMaybe<ApiAccommodationTypeBoolExp>;
};


export type ApiSubscriptionRootApiAccommodationTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiAccommodationTypeStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiAccommodationTypeStreamCursorInput>>;
  where?: InputMaybe<ApiAccommodationTypeBoolExp>;
};


export type ApiSubscriptionRootApiAddictionStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiAddictionStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAddictionStatusOrderBy>>;
  where?: InputMaybe<ApiAddictionStatusBoolExp>;
};


export type ApiSubscriptionRootApiAddictionStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiAddictionStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiAddictionStatusOrderBy>>;
  where?: InputMaybe<ApiAddictionStatusBoolExp>;
};


export type ApiSubscriptionRootApiAddictionStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiAddictionStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiAddictionStatusStreamCursorInput>>;
  where?: InputMaybe<ApiAddictionStatusBoolExp>;
};


export type ApiSubscriptionRootApiBankAccountArgs = {
  distinct_on?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiBankAccountOrderBy>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};


export type ApiSubscriptionRootApiBankAccountAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiBankAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiBankAccountOrderBy>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
};


export type ApiSubscriptionRootApiBankAccountByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiBankAccountStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiBankAccountStreamCursorInput>>;
  where?: InputMaybe<ApiBankAccountBoolExp>;
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


export type ApiSubscriptionRootApiDisabilityStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiDisabilityStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDisabilityStatusOrderBy>>;
  where?: InputMaybe<ApiDisabilityStatusBoolExp>;
};


export type ApiSubscriptionRootApiDisabilityStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDisabilityStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDisabilityStatusOrderBy>>;
  where?: InputMaybe<ApiDisabilityStatusBoolExp>;
};


export type ApiSubscriptionRootApiDisabilityStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiDisabilityStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiDisabilityStatusStreamCursorInput>>;
  where?: InputMaybe<ApiDisabilityStatusBoolExp>;
};


export type ApiSubscriptionRootApiDocumentArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


export type ApiSubscriptionRootApiDocumentAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


export type ApiSubscriptionRootApiDocumentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiDocumentStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiDocumentStreamCursorInput>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
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


export type ApiSubscriptionRootApiHealthStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiHealthStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHealthStatusOrderBy>>;
  where?: InputMaybe<ApiHealthStatusBoolExp>;
};


export type ApiSubscriptionRootApiHealthStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiHealthStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiHealthStatusOrderBy>>;
  where?: InputMaybe<ApiHealthStatusBoolExp>;
};


export type ApiSubscriptionRootApiHealthStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiHealthStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiHealthStatusStreamCursorInput>>;
  where?: InputMaybe<ApiHealthStatusBoolExp>;
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


export type ApiSubscriptionRootApiInsuranceArgs = {
  distinct_on?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiInsuranceOrderBy>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


export type ApiSubscriptionRootApiInsuranceAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiInsuranceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiInsuranceOrderBy>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


export type ApiSubscriptionRootApiInsuranceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiInsuranceStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiInsuranceStreamCursorInput>>;
  where?: InputMaybe<ApiInsuranceBoolExp>;
};


export type ApiSubscriptionRootApiJobArgs = {
  distinct_on?: InputMaybe<Array<ApiJobSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiJobOrderBy>>;
  where?: InputMaybe<ApiJobBoolExp>;
};


export type ApiSubscriptionRootApiJobAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiJobSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiJobOrderBy>>;
  where?: InputMaybe<ApiJobBoolExp>;
};


export type ApiSubscriptionRootApiJobByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiJobStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiJobStreamCursorInput>>;
  where?: InputMaybe<ApiJobBoolExp>;
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


export type ApiSubscriptionRootApiNeighborhoodArgs = {
  distinct_on?: InputMaybe<Array<ApiNeighborhoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNeighborhoodOrderBy>>;
  where?: InputMaybe<ApiNeighborhoodBoolExp>;
};


export type ApiSubscriptionRootApiNeighborhoodAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiNeighborhoodSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiNeighborhoodOrderBy>>;
  where?: InputMaybe<ApiNeighborhoodBoolExp>;
};


export type ApiSubscriptionRootApiNeighborhoodByPkArgs = {
  name: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiNeighborhoodStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiNeighborhoodStreamCursorInput>>;
  where?: InputMaybe<ApiNeighborhoodBoolExp>;
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


export type ApiSubscriptionRootApiSkillArgs = {
  distinct_on?: InputMaybe<Array<ApiSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSkillOrderBy>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


export type ApiSubscriptionRootApiSkillAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiSkillSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSkillOrderBy>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


export type ApiSubscriptionRootApiSkillByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiSkillStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiSkillStreamCursorInput>>;
  where?: InputMaybe<ApiSkillBoolExp>;
};


export type ApiSubscriptionRootApiSubsidyArgs = {
  distinct_on?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSubsidyOrderBy>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};


export type ApiSubscriptionRootApiSubsidyAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiSubsidyOrderBy>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};


export type ApiSubscriptionRootApiSubsidyByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiSubsidyStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiSubsidyStreamCursorInput>>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};


export type ApiSubscriptionRootApiVisitArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitOrderBy>>;
  where?: InputMaybe<ApiVisitBoolExp>;
};


export type ApiSubscriptionRootApiVisitAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitOrderBy>>;
  where?: InputMaybe<ApiVisitBoolExp>;
};


export type ApiSubscriptionRootApiVisitByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type ApiSubscriptionRootApiVisitStatusArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitStatusOrderBy>>;
  where?: InputMaybe<ApiVisitStatusBoolExp>;
};


export type ApiSubscriptionRootApiVisitStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiVisitStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiVisitStatusOrderBy>>;
  where?: InputMaybe<ApiVisitStatusBoolExp>;
};


export type ApiSubscriptionRootApiVisitStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type ApiSubscriptionRootApiVisitStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiVisitStatusStreamCursorInput>>;
  where?: InputMaybe<ApiVisitStatusBoolExp>;
};


export type ApiSubscriptionRootApiVisitStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApiVisitStreamCursorInput>>;
  where?: InputMaybe<ApiVisitBoolExp>;
};

/** columns and relationships of "subsidy" */
export type ApiSubsidy = {
  __typename?: 'subsidy';
  householder_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "subsidy" */
export type ApiSubsidyAggregate = {
  __typename?: 'subsidy_aggregate';
  aggregate?: Maybe<ApiSubsidyAggregateFields>;
  nodes: Array<ApiSubsidy>;
};

export type ApiSubsidyAggregateBoolExp = {
  count?: InputMaybe<ApiSubsidyAggregateBoolExpCount>;
};

export type ApiSubsidyAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiSubsidyBoolExp>;
  predicate: ApiIntComparisonExp;
};

/** aggregate fields of "subsidy" */
export type ApiSubsidyAggregateFields = {
  __typename?: 'subsidy_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiSubsidyMaxFields>;
  min?: Maybe<ApiSubsidyMinFields>;
};


/** aggregate fields of "subsidy" */
export type ApiSubsidyAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiSubsidySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subsidy" */
export type ApiSubsidyAggregateOrderBy = {
  count?: InputMaybe<ApiOrderBy>;
  max?: InputMaybe<ApiSubsidyMaxOrderBy>;
  min?: InputMaybe<ApiSubsidyMinOrderBy>;
};

/** input type for inserting array relation for remote table "subsidy" */
export type ApiSubsidyArrRelInsertInput = {
  data: Array<ApiSubsidyInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApiSubsidyOnConflict>;
};

/** Boolean expression to filter rows from the table "subsidy". All fields are combined with a logical 'AND'. */
export type ApiSubsidyBoolExp = {
  _and?: InputMaybe<Array<ApiSubsidyBoolExp>>;
  _not?: InputMaybe<ApiSubsidyBoolExp>;
  _or?: InputMaybe<Array<ApiSubsidyBoolExp>>;
  householder_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "subsidy" */
export enum ApiSubsidyConstraint {
  /** unique or primary key constraint on columns "id" */
  SubsidyIdKey = 'subsidy_id_key',
  /** unique or primary key constraint on columns "id" */
  SubsidyPkey = 'subsidy_pkey'
}

/** input type for inserting data into table "subsidy" */
export type ApiSubsidyInsertInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiSubsidyMaxFields = {
  __typename?: 'subsidy_max_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "subsidy" */
export type ApiSubsidyMaxOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** aggregate min on columns */
export type ApiSubsidyMinFields = {
  __typename?: 'subsidy_min_fields';
  householder_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "subsidy" */
export type ApiSubsidyMinOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** response of any mutation on the table "subsidy" */
export type ApiSubsidyMutationResponse = {
  __typename?: 'subsidy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiSubsidy>;
};

/** on_conflict condition type for table "subsidy" */
export type ApiSubsidyOnConflict = {
  constraint: ApiSubsidyConstraint;
  update_columns?: Array<ApiSubsidyUpdateColumn>;
  where?: InputMaybe<ApiSubsidyBoolExp>;
};

/** Ordering options when selecting data from "subsidy". */
export type ApiSubsidyOrderBy = {
  householder_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: subsidy */
export type ApiSubsidyPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "subsidy" */
export enum ApiSubsidySelectColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "subsidy" */
export type ApiSubsidySetInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "subsidy" */
export type ApiSubsidyStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiSubsidyStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiSubsidyStreamCursorValueInput = {
  householder_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "subsidy" */
export enum ApiSubsidyUpdateColumn {
  /** column name */
  HouseholderId = 'householder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type ApiSubsidyUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiSubsidySetInput>;
  /** filter the rows which have to be updated */
  where: ApiSubsidyBoolExp;
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

/** columns and relationships of "visit" */
export type ApiVisit = {
  __typename?: 'visit';
  date: Scalars['date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  documents: Array<ApiDocument>;
  /** An aggregate relationship */
  documents_aggregate: ApiDocumentAggregate;
  household_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  status: VisitStatusEnum;
  vistor: Scalars['String']['output'];
};


/** columns and relationships of "visit" */
export type ApiVisitApiDocumentsArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};


/** columns and relationships of "visit" */
export type ApiVisitApiDocumentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApiDocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApiDocumentOrderBy>>;
  where?: InputMaybe<ApiDocumentBoolExp>;
};

/** aggregated selection of "visit" */
export type ApiVisitAggregate = {
  __typename?: 'visit_aggregate';
  aggregate?: Maybe<ApiVisitAggregateFields>;
  nodes: Array<ApiVisit>;
};

/** aggregate fields of "visit" */
export type ApiVisitAggregateFields = {
  __typename?: 'visit_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiVisitMaxFields>;
  min?: Maybe<ApiVisitMinFields>;
};


/** aggregate fields of "visit" */
export type ApiVisitAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiVisitSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "visit". All fields are combined with a logical 'AND'. */
export type ApiVisitBoolExp = {
  _and?: InputMaybe<Array<ApiVisitBoolExp>>;
  _not?: InputMaybe<ApiVisitBoolExp>;
  _or?: InputMaybe<Array<ApiVisitBoolExp>>;
  date?: InputMaybe<ApiDateComparisonExp>;
  description?: InputMaybe<ApiStringComparisonExp>;
  documents?: InputMaybe<ApiDocumentBoolExp>;
  documents_aggregate?: InputMaybe<ApiDocumentAggregateBoolExp>;
  household_id?: InputMaybe<ApiUuidComparisonExp>;
  id?: InputMaybe<ApiUuidComparisonExp>;
  name?: InputMaybe<ApiStringComparisonExp>;
  status?: InputMaybe<VisitStatusEnumComparisonExp>;
  vistor?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "visit" */
export enum ApiVisitConstraint {
  /** unique or primary key constraint on columns "id" */
  VisitPkey = 'visit_pkey'
}

/** input type for inserting data into table "visit" */
export type ApiVisitInsertInput = {
  date?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<ApiDocumentArrRelInsertInput>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<VisitStatusEnum>;
  vistor?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiVisitMaxFields = {
  __typename?: 'visit_max_fields';
  date?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  vistor?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiVisitMinFields = {
  __typename?: 'visit_min_fields';
  date?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  vistor?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "visit" */
export type ApiVisitMutationResponse = {
  __typename?: 'visit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiVisit>;
};

/** on_conflict condition type for table "visit" */
export type ApiVisitOnConflict = {
  constraint: ApiVisitConstraint;
  update_columns?: Array<ApiVisitUpdateColumn>;
  where?: InputMaybe<ApiVisitBoolExp>;
};

/** Ordering options when selecting data from "visit". */
export type ApiVisitOrderBy = {
  date?: InputMaybe<ApiOrderBy>;
  description?: InputMaybe<ApiOrderBy>;
  documents_aggregate?: InputMaybe<ApiDocumentAggregateOrderBy>;
  household_id?: InputMaybe<ApiOrderBy>;
  id?: InputMaybe<ApiOrderBy>;
  name?: InputMaybe<ApiOrderBy>;
  status?: InputMaybe<ApiOrderBy>;
  vistor?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: visit */
export type ApiVisitPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "visit" */
export enum ApiVisitSelectColumn {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  Vistor = 'vistor'
}

/** input type for updating data in table "visit" */
export type ApiVisitSetInput = {
  date?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<VisitStatusEnum>;
  vistor?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "visit_status" */
export type ApiVisitStatus = {
  __typename?: 'visit_status';
  value: Scalars['String']['output'];
};

/** aggregated selection of "visit_status" */
export type ApiVisitStatusAggregate = {
  __typename?: 'visit_status_aggregate';
  aggregate?: Maybe<ApiVisitStatusAggregateFields>;
  nodes: Array<ApiVisitStatus>;
};

/** aggregate fields of "visit_status" */
export type ApiVisitStatusAggregateFields = {
  __typename?: 'visit_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApiVisitStatusMaxFields>;
  min?: Maybe<ApiVisitStatusMinFields>;
};


/** aggregate fields of "visit_status" */
export type ApiVisitStatusAggregateFieldsApiCountArgs = {
  columns?: InputMaybe<Array<ApiVisitStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "visit_status". All fields are combined with a logical 'AND'. */
export type ApiVisitStatusBoolExp = {
  _and?: InputMaybe<Array<ApiVisitStatusBoolExp>>;
  _not?: InputMaybe<ApiVisitStatusBoolExp>;
  _or?: InputMaybe<Array<ApiVisitStatusBoolExp>>;
  value?: InputMaybe<ApiStringComparisonExp>;
};

/** unique or primary key constraints on table "visit_status" */
export enum ApiVisitStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  VisitStatusPkey = 'visit_status_pkey'
}

export enum VisitStatusEnum {
  Done = 'done',
  Scheduled = 'scheduled'
}

/** Boolean expression to compare columns of type "visit_status_enum". All fields are combined with logical 'AND'. */
export type VisitStatusEnumComparisonExp = {
  _eq?: InputMaybe<VisitStatusEnum>;
  _in?: InputMaybe<Array<VisitStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<VisitStatusEnum>;
  _nin?: InputMaybe<Array<VisitStatusEnum>>;
};

/** input type for inserting data into table "visit_status" */
export type ApiVisitStatusInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApiVisitStatusMaxFields = {
  __typename?: 'visit_status_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApiVisitStatusMinFields = {
  __typename?: 'visit_status_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "visit_status" */
export type ApiVisitStatusMutationResponse = {
  __typename?: 'visit_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApiVisitStatus>;
};

/** on_conflict condition type for table "visit_status" */
export type ApiVisitStatusOnConflict = {
  constraint: ApiVisitStatusConstraint;
  update_columns?: Array<ApiVisitStatusUpdateColumn>;
  where?: InputMaybe<ApiVisitStatusBoolExp>;
};

/** Ordering options when selecting data from "visit_status". */
export type ApiVisitStatusOrderBy = {
  value?: InputMaybe<ApiOrderBy>;
};

/** primary key columns input for table: visit_status */
export type ApiVisitStatusPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "visit_status" */
export enum ApiVisitStatusSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "visit_status" */
export type ApiVisitStatusSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "visit_status" */
export type ApiVisitStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiVisitStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiVisitStatusStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "visit_status" */
export enum ApiVisitStatusUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ApiVisitStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiVisitStatusSetInput>;
  /** filter the rows which have to be updated */
  where: ApiVisitStatusBoolExp;
};

/** Streaming cursor of the table "visit" */
export type ApiVisitStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ApiVisitStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ApiCursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApiVisitStreamCursorValueInput = {
  date?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  household_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<VisitStatusEnum>;
  vistor?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "visit" */
export enum ApiVisitUpdateColumn {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  Vistor = 'vistor'
}

export type ApiVisitUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApiVisitSetInput>;
  /** filter the rows which have to be updated */
  where: ApiVisitBoolExp;
};
