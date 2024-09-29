/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** An Object scalar */
  Object: { input: any; output: any; }
};

export type QPagination = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  residenceList: Array<ResidenceType>;
};


export type QueryResidenceListArgs = {
  pagination?: InputMaybe<QPagination>;
  where?: InputMaybe<Scalars['Object']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResidenceType = {
  __typename?: 'ResidenceType';
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mapUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  reviews?: Maybe<Array<Review>>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Review = {
  __typename?: 'Review';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  rented: Scalars['Boolean']['output'];
  residenceId: Scalars['String']['output'];
  roomSize: Scalars['Float']['output'];
  room_type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type ResidenceListQueryVariables = Exact<{ [key: string]: never; }>;


export type ResidenceListQuery = { __typename?: 'Query', residenceList: Array<{ __typename?: 'ResidenceType', id: string, name: string, description: string, mapUrl: string, countryCode: string, type: string, reviews?: Array<{ __typename?: 'Review', id: string }> | null }> };


export const ResidenceListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"residenceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"residenceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapUrl"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ResidenceListQuery, ResidenceListQueryVariables>;