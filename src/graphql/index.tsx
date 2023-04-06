import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

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
  BigInt: any;
  DateTime: any;
};

export type Account = {
  __typename?: "Account";
  /** Web3 address of the destination used in the Attester */
  id: Scalars["ID"];
  /** List of the badges minted by the account */
  mintedBadges?: Maybe<Array<Maybe<MintedBadge>>>;
  type: AccountType;
};

export enum AccountType {
  Ethereum = "ethereum",
  Github = "github",
  Twitter = "twitter",
}

export type Account_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export enum Account_OrderBy {
  Id = "id",
}

/** Certificates proving facts or reputation of an Account */
export type Attestation = {
  __typename?: "Attestation";
  /** Arbitrary data that can be added to the attestation by the issuer */
  extraData: Scalars["String"];
  /** The ID of the attestation: <tokenId-network-ownerId> */
  id: Scalars["ID"];
  /** The address of the issuer of the attestation */
  issuer: Scalars["String"];
  /** The badge minted with the attestation */
  mintedBadge: MintedBadge;
  /** Chain on which the attestation is registered */
  network: Network;
  /** owner of the attestation (destination of the user request) */
  owner: Account;
  /** Timestamp when the attestation has been recorded. Same as badge's mintedAt */
  recordedAt: Scalars["DateTime"];
  /** Timestamp of the validity of the underlying certificate issuance (can differ from recording timestamp e.g available group generation timestamp) */
  timestamp: Scalars["DateTime"];
  /** Transaction that emitted the AttestationRecorded event */
  transaction: Transaction;
  /** Value of the attestation, same as level for badges */
  value: Scalars["BigInt"];
};

export type Attestation_Filter = {
  extraData?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  recordedAt?: InputMaybe<Scalars["DateTime"]>;
  recordedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  recordedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  timestamp?: InputMaybe<Scalars["DateTime"]>;
  timestamp_gte?: InputMaybe<Scalars["DateTime"]>;
  timestamp_lte?: InputMaybe<Scalars["DateTime"]>;
  value?: InputMaybe<Scalars["BigInt"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]>;
};

export enum Attestation_OrderBy {
  ExtraData = "extraData",
  Id = "id",
  Network = "network",
  RecordedAt = "recordedAt",
  Timestamp = "timestamp",
  Value = "value",
}

/** Metadata for a Sismo Badge */
export type Badge = {
  __typename?: "Badge";
  attributes: Array<Maybe<BadgeAttribute>>;
  /** List of networks on which this metadata is available */
  availableNetworks: Array<Network>;
  /** Description of the badge */
  description: Scalars["String"];
  /** Token ID */
  id: Scalars["ID"];
  /** Image of the badge */
  image: Scalars["String"];
  /** Has the badge metadata been validated by the Sismo Governance */
  isCurated: Scalars["Boolean"];
  /** Name of the badge */
  name: Scalars["String"];
  /** Group snapshot used for this badge */
  snapshot?: Maybe<GroupSnapshot>;
  /** Same as id */
  tokenId: Scalars["BigInt"];
  /** A standard bytes32 format of the tokenID */
  tokenIdHex: Scalars["String"];
};

export type BadgeAttribute = {
  __typename?: "BadgeAttribute";
  trait_type: Scalars["String"];
  value: Scalars["String"];
};

export type BadgeEligibility = {
  __typename?: "BadgeEligibility";
  shortDescription: Scalars["String"];
  specification: Scalars["String"];
};

export type BadgeLink = {
  __typename?: "BadgeLink";
  label: Scalars["String"];
  logoUrl: Scalars["String"];
  url: Scalars["String"];
};

export type BadgeStat = {
  __typename?: "BadgeStat";
  /** TokenId of the badge  */
  id: Scalars["ID"];
  /** Chain on which the stats aggregate the data */
  network: Network;
  /** Total amount of wei used for the gas on this collection */
  totalGasFee: Scalars["BigInt"];
  /** Total amount of badges for this tokenId */
  totalMintedBadges: Scalars["Int"];
};

export type BadgeStat_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  network?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<InputMaybe<Network>>>;
  totalGasFee?: InputMaybe<Scalars["BigInt"]>;
  totalGasFee_gte?: InputMaybe<Scalars["BigInt"]>;
  totalGasFee_lte?: InputMaybe<Scalars["BigInt"]>;
  totalMintedBadges?: InputMaybe<Scalars["Int"]>;
  totalMintedBadges_gte?: InputMaybe<Scalars["Int"]>;
  totalMintedBadges_lte?: InputMaybe<Scalars["Int"]>;
};

export enum BadgeStat_OrderBy {
  Id = "id",
  Network = "network",
  TotalGasFee = "totalGasFee",
  TotalMintedBadges = "totalMintedBadges",
}

export type Badge_Filter = {
  isCurated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
};

export enum Badge_OrderBy {
  Id = "id",
  Network = "network",
  TokenId = "tokenId",
}

export enum Direction {
  Asc = "asc",
  Desc = "desc",
}

export enum GenerationFrequency {
  Continuous = "continuous",
  Daily = "daily",
  Once = "once",
  Weekly = "weekly",
}

/** Group of accounts sharing the same eligibility criteria */
export type Group = {
  __typename?: "Group";
  /** Group eligibility description */
  description: Scalars["String"];
  /** Frequency of the group snapshots generation */
  generationFrequency: GenerationFrequency;
  /** Group ID as uint128 */
  id: Scalars["String"];
  /** Latest snapshot of the group */
  latestSnapshot: GroupSnapshot;
  /** Group name */
  name: Scalars["String"];
  /** List of all snapshots of the group */
  snapshots: Array<Maybe<GroupSnapshot>>;
  /** Group eligibility detailed specifications */
  specs: Scalars["String"];
};

/** Snapshot of a group at a given timestamp */
export type GroupSnapshot = {
  __typename?: "GroupSnapshot";
  /** Url to the group snapshot data */
  dataUrl: Scalars["String"];
  /** Group the snapshot belongs to */
  group: Group;
  /** Group Snapshot ID as uint256 */
  id: Scalars["String"];
  /** Size of the list of accounts in the group snapshot */
  size: Scalars["BigInt"];
  /** Timestamp of the snapshot */
  timestamp: Scalars["String"];
  /** Distribution of the group snapshot accounts by value */
  valueDistribution: Array<Maybe<NbOfAccountsByValue>>;
};

export type GroupSnapshot_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  timestamp?: InputMaybe<Scalars["String"]>;
};

export enum GroupSnapshot_OrderBy {
  Id = "id",
  Timestamp = "timestamp",
}

export type Group_Filter = {
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  generationFrequency?: InputMaybe<GenerationFrequency>;
  id?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  specs?: InputMaybe<Scalars["String"]>;
  specs_contains?: InputMaybe<Scalars["String"]>;
};

export enum Group_OrderBy {
  GenerationFrequency = "generationFrequency",
  Id = "id",
  Name = "name",
}

/** Tokenized representation of an Attestation */
export type MintedBadge = {
  __typename?: "MintedBadge";
  /** Metadata for the tokenID */
  badge: Badge;
  /** Id of the minted badge: <tokenId-network-owner> */
  id: Scalars["ID"];
  /** The address of the issuer of the attestation */
  issuer: Scalars["String"];
  /** The balance of the account for this badge. Same as the value of the attestation */
  level: Scalars["BigInt"];
  /** The timestamp epoch in sec when the badge has been minted */
  mintedAt: Scalars["DateTime"];
  /** Network on which the badge has been minted */
  network: Network;
  /** owner of the attestation (destination of the user request) */
  owner: Account;
  /** The attestation that let the account mint the badge */
  rawAttestation: Attestation;
  /** Transaction that emitted the SingleTransfer event */
  transaction: Transaction;
};

export type MintedBadge_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["BigInt"]>;
  level_gte?: InputMaybe<Scalars["BigInt"]>;
  level_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  level_lte?: InputMaybe<Scalars["BigInt"]>;
  mintedAt?: InputMaybe<Scalars["DateTime"]>;
  mintedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  mintedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  owner?: InputMaybe<Scalars["String"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export enum MintedBadge_OrderBy {
  Id = "id",
  Level = "level",
  MintedAt = "mintedAt",
  Network = "network",
  TokenId = "tokenId",
}

export type NbOfAccountsByValue = {
  __typename?: "NbOfAccountsByValue";
  numberOfAccounts: Scalars["BigInt"];
  value: Scalars["ID"];
};

export enum Network {
  Gnosis = "gnosis",
  Goerli = "goerli",
  Mainnet = "mainnet",
  Mumbai = "mumbai",
  Polygon = "polygon",
}

export type PublicContract = {
  __typename?: "PublicContract";
  contact: Scalars["String"];
  type: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  account?: Maybe<Account>;
  accounts: Array<Maybe<Account>>;
  attestation?: Maybe<Attestation>;
  attestations: Array<Maybe<Attestation>>;
  badge?: Maybe<Badge>;
  badgeStat?: Maybe<BadgeStat>;
  badgeStats?: Maybe<Array<Maybe<BadgeStat>>>;
  badges: Array<Maybe<Badge>>;
  group?: Maybe<Group>;
  groupSnapshot?: Maybe<GroupSnapshot>;
  groupSnapshots: Array<Maybe<GroupSnapshot>>;
  groups: Array<Maybe<Group>>;
  mintedBadge?: Maybe<MintedBadge>;
  mintedBadges: Array<Maybe<MintedBadge>>;
  transaction?: Maybe<Transaction>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};

export type QueryAccountArgs = {
  id: Scalars["ID"];
};

export type QueryAccountsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Account_Filter>;
};

export type QueryAttestationArgs = {
  id: Scalars["ID"];
};

export type QueryAttestationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  network?: InputMaybe<Network>;
  networks?: InputMaybe<Array<InputMaybe<Network>>>;
  orderBy?: InputMaybe<Attestation_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Attestation_Filter>;
};

export type QueryBadgeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryBadgeStatArgs = {
  id: Scalars["ID"];
  network: Network;
};

export type QueryBadgeStatsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  network?: InputMaybe<Network>;
  networks?: InputMaybe<Array<InputMaybe<Network>>>;
  orderBy?: InputMaybe<BadgeStat_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BadgeStat_Filter>;
};

export type QueryBadgesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Badge_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Badge_Filter>;
};

export type QueryGroupArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryGroupSnapshotArgs = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupName?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["String"]>;
};

export type QueryGroupSnapshotsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GroupSnapshot_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<GroupSnapshot_Filter>;
};

export type QueryGroupsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Group_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Group_Filter>;
};

export type QueryMintedBadgeArgs = {
  id: Scalars["ID"];
};

export type QueryMintedBadgesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  network?: InputMaybe<Network>;
  networks?: InputMaybe<Array<InputMaybe<Network>>>;
  orderBy?: InputMaybe<MintedBadge_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MintedBadge_Filter>;
};

export type QueryTransactionArgs = {
  id: Scalars["ID"];
  network: Network;
};

export type QueryTransactionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  network?: InputMaybe<Network>;
  networks?: InputMaybe<Array<InputMaybe<Network>>>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<Direction>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Transaction_Filter>;
};

export type Transaction = {
  __typename?: "Transaction";
  /** Address which emitted the transaction (most likely the resolver) */
  from: Scalars["String"];
  /** Amount in wei used for this transaction */
  gasFee: Scalars["BigInt"];
  /** Amount in wei used per unit of gas for this transaction */
  gasPrice: Scalars["BigInt"];
  /** Amount in gas used for this transaction */
  gasUsed: Scalars["BigInt"];
  /** Transaction Hash */
  id: Scalars["ID"];
  /** Chain on which the transaction appended */
  network: Network;
  /** Timestamp in sec of the transaction */
  timestamp: Scalars["DateTime"];
  /** Address which received the transaction */
  to: Scalars["String"];
};

export type Transaction_Filter = {
  from?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  gasFee?: InputMaybe<Scalars["BigInt"]>;
  gasFee_gte?: InputMaybe<Scalars["BigInt"]>;
  gasFee_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  id?: InputMaybe<Scalars["String"]>;
  network?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<InputMaybe<Network>>>;
  timestamp?: InputMaybe<Scalars["DateTime"]>;
  timestamp_gte?: InputMaybe<Scalars["DateTime"]>;
  timestamp_lte?: InputMaybe<Scalars["DateTime"]>;
};

export enum Transaction_OrderBy {
  From = "from",
  GasFee = "gasFee",
  GasPrice = "gasPrice",
  GasUsed = "gasUsed",
  Id = "id",
  Timestamp = "timestamp",
}

export type GroupsQueryVariables = Exact<{ [key: string]: never }>;

export type GroupsQuery = {
  __typename?: "Query";
  groups: Array<{
    __typename?: "Group";
    id: string;
    name: string;
    latestSnapshot: { __typename?: "GroupSnapshot"; timestamp: string; size: any };
  } | null>;
};

export const GroupsDocument = gql`
  query Groups {
    groups {
      id
      name
      latestSnapshot {
        timestamp
        size
      }
    }
  }
`;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
}
export function useGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
}
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
