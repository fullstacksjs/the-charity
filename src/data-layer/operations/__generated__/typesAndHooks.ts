/* This file is generated, do not edit! */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  IBAN: any;
  Money: any;
};

/** accommodation type of the householder */
export enum AccommodationType {
  /** householder is owner of the house */
  Owner = 'Owner',
  /** householder rents house for specific range of time */
  Rent = 'Rent',
}

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  plaque: Scalars['String'];
  street: Scalars['String'];
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type BankAccount = {
  __typename?: 'BankAccount';
  accountNumber: Scalars['String'];
  bankName: Scalars['String'];
  cardNumber: Scalars['String'];
  iban: Scalars['IBAN'];
};

export type CompleteHouseholder = Member & {
  __typename?: 'CompleteHouseholder';
  accommodationType: AccommodationType;
  addicted: Scalars['Boolean'];
  bankAccounts: Array<BankAccount>;
  cityOfBirth?: Maybe<Scalars['DateTime']>;
  contacts: Array<Contact>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  dependent: Array<Dependent>;
  dependents: Array<Dependent>;
  description: Scalars['String'];
  disabilityDescription: Scalars['String'];
  disabilityDocuments: Array<Document>;
  disabilityStatus: DisabilityStatus;
  educationStatus: EducationStatus;
  family: Family;
  fatherName?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  hasBeenAddicted: Scalars['Boolean'];
  healthDescription: Scalars['String'];
  healthDocuments: Array<Document>;
  healthStatus: HealthStatus;
  id: Scalars['ID'];
  identityDocument: Array<Document>;
  insurance: Array<Insurance>;
  isAddicted: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['DateTime']>;
  jobs: Array<Job>;
  lastDiploma: Diploma;
  lastName?: Maybe<Scalars['String']>;
  maritalStatus: MaritalStatus;
  nationalId?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  nearbyMosqueAddress: Scalars['String'];
  nearbySupermarketAddress: Scalars['String'];
  personalPhoto: Document;
  possessions: Array<Possession>;
  priorAccommodationAddress: Scalars['String'];
  religion?: Maybe<Religion>;
  rent: Scalars['Money'];
  secondHouseholderProblem: SecondHouseholderProblem;
  skills: Array<Skill>;
  ssn?: Maybe<Scalars['String']>;
  subsidies: Array<Subsidy>;
};

export type CompletedFamily = {
  __typename?: 'CompletedFamily';
  archived: Scalars['Boolean'];
  code: Scalars['String'];
  completedDate: Scalars['DateTime'];
  dependents: Array<Dependent>;
  draftDate: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  projects: Array<Project>;
  referrerCode: Scalars['String'];
  severity: FamilySeverity;
  status: FamilyStatus;
};

export type Contact = {
  __typename?: 'Contact';
  address: Address;
  mobilePhoneNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type CreateFamilyInput = {
  name: Scalars['String'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Death = {
  __typename?: 'Death';
  cause: Scalars['String'];
  date: Scalars['DateTime'];
  relation: Scalars['String'];
};

export type Dependent = Member & {
  __typename?: 'Dependent';
  cityOfBirth?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  family: Family;
  fatherName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  identityDocument: Array<Document>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  nationalId?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  religion?: Maybe<Religion>;
  ssn?: Maybe<Scalars['String']>;
};

/** religion of the members */
export enum Diploma {
  /** bachelor */
  Bachelor = 'Bachelor',
  /** highschool */
  Highschool = 'Highschool',
  /** master */
  Master = 'Master',
  /** none */
  None = 'None',
}

/** disability status */
export enum DisabilityStatus {
  Sth = 'Sth',
}

export type Divorced = {
  __typename?: 'Divorced';
  cause: Scalars['String'];
  currentCareTaker: Scalars['String'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  mehrie: Scalars['String'];
  mehrieDescription: Scalars['String'];
  mehrieStatus: Scalars['String'];
};

export type Document = {
  __typename?: 'Document';
  url: Scalars['String'];
};

export type DraftFamily = {
  __typename?: 'DraftFamily';
  archived?: Maybe<Scalars['Boolean']>;
  code: Scalars['String'];
  dependents: Array<Dependent>;
  draftDate: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projects: Array<Project>;
  referrerCode?: Maybe<Scalars['String']>;
  severity: FamilySeverity;
  status: FamilyStatus;
};

export type DraftHouseholder = Member & {
  __typename?: 'DraftHouseholder';
  accommodationType?: Maybe<AccommodationType>;
  addicted?: Maybe<Scalars['Boolean']>;
  bankAccounts?: Maybe<Array<BankAccount>>;
  cityOfBirth?: Maybe<Scalars['DateTime']>;
  contacts?: Maybe<Array<Contact>>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  dependent: Array<Dependent>;
  description?: Maybe<Scalars['String']>;
  disabilityDescription?: Maybe<Scalars['String']>;
  disabilityDocuments?: Maybe<Array<Document>>;
  disabilityStatus?: Maybe<DisabilityStatus>;
  educationStatus?: Maybe<EducationStatus>;
  family: Family;
  fatherName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  hasBeenAddicted?: Maybe<Scalars['Boolean']>;
  healthDescription?: Maybe<Scalars['String']>;
  healthDocuments?: Maybe<Array<Document>>;
  healthStatus?: Maybe<HealthStatus>;
  id: Scalars['ID'];
  identityDocument: Array<Document>;
  insurance?: Maybe<Array<Insurance>>;
  isAddicted?: Maybe<Scalars['Boolean']>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  jobs?: Maybe<Array<Job>>;
  lastDiploma?: Maybe<Diploma>;
  lastName?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<MaritalStatus>;
  nationalId?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  nearbyMosqueAddress?: Maybe<Scalars['String']>;
  nearbySupermarketAddress?: Maybe<Scalars['String']>;
  personalPhoto?: Maybe<Document>;
  possessions?: Maybe<Array<Possession>>;
  priorAccommodationAddress?: Maybe<Scalars['String']>;
  religion?: Maybe<Religion>;
  rent?: Maybe<Scalars['Money']>;
  secondHouseholderProblem?: Maybe<SecondHouseholderProblem>;
  skills?: Maybe<Array<Skill>>;
  ssn?: Maybe<Scalars['String']>;
  subsidies?: Maybe<Array<Subsidy>>;
};

/** education status of people */
export enum EducationStatus {
  Sth = 'Sth',
}

export enum FamilySeverity {
  Critical = 'CRITICAL',
  Normal = 'NORMAL',
}

export enum FamilySeverity {
  Critical = 'CRITICAL',
  Normal = 'NORMAL'
}

/** religion of the members */
export enum FamilyStatus {
  /** FamilyStatus is completed. */
  Completed = 'COMPLETED',
  /** Family is drafted */
  Draft = 'DRAFT',
}

/** religion of the members */
export enum Gender {
  /** gender is female. */
  Female = 'Female',
  /** gender is male */
  Male = 'Male',
}

/** health status */
export enum HealthStatus {
  Sth = 'Sth',
}

export type Insurance = {
  __typename?: 'Insurance';
  organization: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type Job = {
  __typename?: 'Job';
  active: Scalars['Boolean'];
  rageIncome: Scalars['Money'];
  title: Scalars['String'];
};

/** marital status of the householder */
export enum MaritalStatus {
  Divorced = 'Divorced',
  Married = 'Married',
  Separated = 'Separated',
  Single = 'Single',
  Widowed = 'Widowed',
}

export type Member = {
  cityOfBirth?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  family: Family;
  fatherName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  identityDocument: Array<Document>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  nationalId?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  religion?: Maybe<Religion>;
  ssn?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFamily: Family;
  createProject: Project;
};

export type MutationCreateFamilyArgs = {
  input: CreateFamilyInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type Possession = {
  __typename?: 'Possession';
  description: Scalars['String'];
};

export type Prison = {
  __typename?: 'Prison';
  address: Scalars['String'];
  cause: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['String'];
  freedomDate: Scalars['DateTime'];
  relation: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: ProjectStatus;
  updated_at: Scalars['DateTime'];
};

/** current status of project - default [PLANNING]  */
export enum ProjectStatus {
  Done = 'DONE',
  Inprogress = 'INPROGRESS',
  Planning = 'PLANNING',
  Suspended = 'SUSPENDED',
}

export type Query = {
  __typename?: 'Query';
  admin: Admin;
  admins: Array<Admin>;
  dependent: Dependent;
  dependents: Array<Dependent>;
  families: Array<Family>;
  family?: Maybe<Family>;
  householder: Householder;
  householders: Array<Householder>;
  project: Project;
  projects: Array<Project>;
};

export type QueryAdminArgs = {
  id: Scalars['Int'];
};

export type QueryDependentArgs = {
  id: Scalars['Int'];
};

export type QueryFamilyArgs = { id: Scalars['String'] };

export type QueryHouseholderArgs = {
  id: Scalars['Int'];
};

export type QueryProjectArgs = {
  id: Scalars['Int'];
};

/** religion of the members */
export enum Religion {
  /** the religion of the member is christian */
  Christianity = 'Christianity',
  /** the religion of the member is islam */
  Islam = 'Islam',
}

/** second householder problem = [ prison | divorced | death ] */
export type SecondHouseholderProblem = Death | Divorced | Prison;

export type Skill = {
  __typename?: 'Skill';
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Subsidy = {
  __typename?: 'Subsidy';
  description: Scalars['String'];
  income: Scalars['Money'];
  type: SubsidyType;
};

/** subsidy types */
export enum SubsidyType {
  Sth = 'Sth',
}

/** family = [ draft-family, complete-family ] */
export type Family = CompletedFamily | DraftFamily;

/** householder = [ draft-house, complete-house ] */
export type Householder = CompleteHouseholder | DraftHouseholder;

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createProject: {
    __typename?: 'Project';
    id: string;
    name: string;
    description?: string | null;
    status: ProjectStatus;
  };
};

export type GetAdminListQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminListQuery = {
  __typename?: 'Query';
  admins: Array<{ __typename?: 'Admin'; id: string }>;
};

export const CreateProjectDocument = gql`
  mutation createProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
      name
      description
      status
    }
  }
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;

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
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, options);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult =
  Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const GetAdminListDocument = gql`
  query getAdminList {
    admins {
      id
    }
  }
`;

/**
 * __useGetAdminListQuery__
 *
 * To run a query within a React component, call `useGetAdminListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAdminListQuery,
    GetAdminListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminListQuery, GetAdminListQueryVariables>(
    GetAdminListDocument,
    options,
  );
}
export function useGetAdminListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminListQuery,
    GetAdminListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminListQuery, GetAdminListQueryVariables>(
    GetAdminListDocument,
    options,
  );
}
export type GetAdminListQueryHookResult = ReturnType<
  typeof useGetAdminListQuery
>;
export type GetAdminListLazyQueryHookResult = ReturnType<
  typeof useGetAdminListLazyQuery
>;
export type GetAdminListQueryResult = Apollo.QueryResult<
  GetAdminListQuery,
  GetAdminListQueryVariables
>;
