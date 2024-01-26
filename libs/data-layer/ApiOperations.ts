/* This file is generated, do not edit! */
/* eslint-disable */
/* cspell:disable */
import type * as SchemaTypes from '@camp/domain';

export type ApiHouseholdKeysFragment = { __typename?: 'household', id: string };

export type ApiHouseholdDetailFragment = { __typename?: 'household', name: string, status: SchemaTypes.HouseholdStatusEnum, severity: SchemaTypes.HouseholdSeverityEnum, code?: string | null, created_at: string, updated_at: string, members_count?: number | null };

export type ApiHouseholdListItemFragment = { __typename?: 'household', name: string, severity: SchemaTypes.HouseholdSeverityEnum, status: SchemaTypes.HouseholdStatusEnum };

export type ApiHouseholderKeysFragment = { __typename?: 'householder', id: string };

export type ApiHouseholderIdentityFragment = { __typename?: 'householder', name: string, father_name?: string | null, surname?: string | null, nationality?: SchemaTypes.NationalityEnum | null, religion?: SchemaTypes.ReligionEnum | null, city?: SchemaTypes.CityEnum | null, gender?: SchemaTypes.GenderEnum | null, status?: string | null, national_id?: string | null, dob?: string | null };

export type ApiMemberKeysFragment = { __typename?: 'member', id: string, household_id: string };

export type ApiMemberListItemFragment = { __typename?: 'member', dob?: string | null, father_name?: string | null, gender?: SchemaTypes.GenderEnum | null, name: string, national_id?: string | null, nationality?: SchemaTypes.NationalityEnum | null, religion?: SchemaTypes.ReligionEnum | null, surname?: string | null, status?: string | null };

export type ApiProjectKeysFragment = { __typename?: 'project', id: string };

export type ApiProjectDetailFragment = { __typename?: 'project', name: string, description?: string | null, status: SchemaTypes.ProjectStatusEnum, start_date?: string | null, due_date?: string | null, created_at: string, updated_at: string };

export type ApiProjectListItemFragment = { __typename?: 'project', name: string, description?: string | null, start_date?: string | null, due_date?: string | null, status: SchemaTypes.ProjectStatusEnum, created_at: string, updated_at: string };

export type ApiVisitKeysFragment = { __typename?: 'visit', id: string, household_id: string };

export type ApiVisitFragment = { __typename?: 'visit', name: string, visitor?: string | null, date: string, description?: string | null, status: SchemaTypes.VisitStatusEnum, documents: Array<{ __typename?: 'document', url: string, id: string, storage_id: string }> };

export type ApiVisitListItemFragment = { __typename?: 'visit', date: string, description?: string | null, documents: Array<{ __typename?: 'document', url: string, id: string, storage_id: string }> };

export type ApiCompleteHouseholdMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiCompleteHouseholdMutation = { __typename?: 'mutation_root', update_household_by_pk?: { __typename?: 'household', id: string, name: string, severity: SchemaTypes.HouseholdSeverityEnum, status: SchemaTypes.HouseholdStatusEnum } | null };

export type ApiCreateHouseholdMutationVariables = SchemaTypes.Exact<{
  name: SchemaTypes.Scalars['String']['input'];
}>;


export type ApiCreateHouseholdMutation = { __typename?: 'mutation_root', insert_household_one?: { __typename?: 'household', id: string, name: string, severity: SchemaTypes.HouseholdSeverityEnum, status: SchemaTypes.HouseholdStatusEnum } | null };

export type ApiNewHouseholdFragment = { __typename?: 'household', id: string, name: string, severity: SchemaTypes.HouseholdSeverityEnum, status: SchemaTypes.HouseholdStatusEnum };

export type ApiCreateProjectMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ApiProjectInsertInput;
}>;


export type ApiCreateProjectMutation = { __typename?: 'mutation_root', insert_project_one?: { __typename?: 'project', id: string, name: string, description?: string | null, start_date?: string | null, due_date?: string | null, status: SchemaTypes.ProjectStatusEnum, created_at: string, updated_at: string } | null };

export type ApiCreateVisitMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ApiVisitInsertInput;
}>;


export type ApiCreateVisitMutation = { __typename?: 'mutation_root', insert_visit_one?: { __typename?: 'visit', id: string, household_id: string, date: string, description?: string | null, documents: Array<{ __typename?: 'document', url: string, id: string, storage_id: string }> } | null };

export type ApiNewVisitFragment = { __typename?: 'visit', id: string, household_id: string, date: string, description?: string | null, documents: Array<{ __typename?: 'document', url: string, id: string, storage_id: string }> };

export type ApiDeleteHouseholdMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiDeleteHouseholdMutation = { __typename?: 'mutation_root', delete_household_by_pk?: { __typename?: 'household', name: string, id: string } | null };

export type ApiDeleteMemberMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiDeleteMemberMutation = { __typename?: 'mutation_root', delete_member_by_pk?: { __typename?: 'member', name: string, id: string, household_id: string } | null };

export type ApiDeleteVisitMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiDeleteVisitMutation = { __typename?: 'mutation_root', delete_visit_by_pk?: { __typename?: 'visit', name: string, id: string, household_id: string } | null };

export type ApiEditHouseholdMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
  update: SchemaTypes.ApiHouseholdSetInput;
}>;


export type ApiEditHouseholdMutation = { __typename?: 'mutation_root', update_household_by_pk?: { __typename?: 'household', id: string, name: string, severity: SchemaTypes.HouseholdSeverityEnum, status: SchemaTypes.HouseholdStatusEnum } | null };

export type ApiUpsertHouseholderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ApiHouseholderInsertInput;
}>;


export type ApiUpsertHouseholderMutation = { __typename?: 'mutation_root', insert_householder_one?: { __typename?: 'householder', id: string, name: string, father_name?: string | null, surname?: string | null, nationality?: SchemaTypes.NationalityEnum | null, religion?: SchemaTypes.ReligionEnum | null, city?: SchemaTypes.CityEnum | null, gender?: SchemaTypes.GenderEnum | null, status?: string | null, national_id?: string | null, dob?: string | null } | null };

export type ApiUpsertMemberMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ApiMemberInsertInput;
}>;


export type ApiUpsertMemberMutation = { __typename?: 'mutation_root', insert_member_one?: { __typename?: 'member', id: string, household_id: string, dob?: string | null, father_name?: string | null, gender?: SchemaTypes.GenderEnum | null, name: string, national_id?: string | null, nationality?: SchemaTypes.NationalityEnum | null, religion?: SchemaTypes.ReligionEnum | null, surname?: string | null, status?: string | null, household: { __typename?: 'household', id: string, name: string, status: SchemaTypes.HouseholdStatusEnum, severity: SchemaTypes.HouseholdSeverityEnum, code?: string | null, created_at: string, updated_at: string, members_count?: number | null } } | null };

export type ApiHouseholdListQueryVariables = SchemaTypes.Exact<{
  order_by?: SchemaTypes.InputMaybe<Array<SchemaTypes.ApiHouseholdOrderBy> | SchemaTypes.ApiHouseholdOrderBy>;
  limit?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']['input']>;
  offset?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']['input']>;
}>;


export type ApiHouseholdListQuery = { __typename?: 'query_root', household: Array<{ __typename?: 'household', id: string, name: string, severity: SchemaTypes.HouseholdSeverityEnum, status: SchemaTypes.HouseholdStatusEnum }>, household_aggregate: { __typename?: 'household_aggregate', aggregate?: { __typename?: 'household_aggregate_fields', count: number } | null } };

export type ApiHouseholdQueryVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiHouseholdQuery = { __typename?: 'query_root', household_by_pk?: { __typename?: 'household', id: string, name: string, status: SchemaTypes.HouseholdStatusEnum, severity: SchemaTypes.HouseholdSeverityEnum, code?: string | null, created_at: string, updated_at: string, members_count?: number | null } | null };

export type ApiHouseholderQueryVariables = SchemaTypes.Exact<{
  household_id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiHouseholderQuery = { __typename?: 'query_root', householder_by_pk?: { __typename?: 'householder', id: string, name: string, father_name?: string | null, surname?: string | null, nationality?: SchemaTypes.NationalityEnum | null, religion?: SchemaTypes.ReligionEnum | null, city?: SchemaTypes.CityEnum | null, gender?: SchemaTypes.GenderEnum | null, status?: string | null, national_id?: string | null, dob?: string | null } | null };

export type ApiVisitsQueryVariables = SchemaTypes.Exact<{
  order_by?: SchemaTypes.InputMaybe<Array<SchemaTypes.ApiVisitOrderBy> | SchemaTypes.ApiVisitOrderBy>;
  limit?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']['input']>;
  offset?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']['input']>;
}>;


export type ApiVisitsQuery = { __typename?: 'query_root', visit: Array<{ __typename?: 'visit', id: string, household_id: string, date: string, description?: string | null, documents: Array<{ __typename?: 'document', url: string, id: string, storage_id: string }> }>, visit_aggregate: { __typename?: 'visit_aggregate', aggregate?: { __typename?: 'visit_aggregate_fields', count: number } | null } };

export type ApiMemberListQueryVariables = SchemaTypes.Exact<{
  household_id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiMemberListQuery = { __typename?: 'query_root', member: Array<{ __typename?: 'member', id: string, household_id: string, dob?: string | null, father_name?: string | null, gender?: SchemaTypes.GenderEnum | null, name: string, national_id?: string | null, nationality?: SchemaTypes.NationalityEnum | null, religion?: SchemaTypes.ReligionEnum | null, surname?: string | null, status?: string | null, household: { __typename?: 'household', id: string, name: string, status: SchemaTypes.HouseholdStatusEnum, severity: SchemaTypes.HouseholdSeverityEnum, code?: string | null, created_at: string, updated_at: string, members_count?: number | null } }> };

export type ApiProjectListQueryVariables = SchemaTypes.Exact<{
  offset?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']['input']>;
  limit?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']['input']>;
}>;


export type ApiProjectListQuery = { __typename?: 'query_root', project_aggregate: { __typename?: 'project_aggregate', nodes: Array<{ __typename?: 'project', id: string, name: string, description?: string | null, start_date?: string | null, due_date?: string | null, status: SchemaTypes.ProjectStatusEnum, created_at: string, updated_at: string }> } };

export type ApiProjectQueryVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['uuid']['input'];
}>;


export type ApiProjectQuery = { __typename?: 'query_root', project_by_pk?: { __typename?: 'project', id: string, name: string, description?: string | null, status: SchemaTypes.ProjectStatusEnum, start_date?: string | null, due_date?: string | null, created_at: string, updated_at: string, households: Array<{ __typename?: 'household_project', household: { __typename?: 'household', id: string, name: string, status: SchemaTypes.HouseholdStatusEnum, severity: SchemaTypes.HouseholdSeverityEnum, code?: string | null, created_at: string, updated_at: string, members_count?: number | null } }> } | null };
