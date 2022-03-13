import {ROUTES} from 'constants/routes';

export const PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  'additional-features': 'Additional Features',
  architecture: 'Architecture - Deep Dive',
  developer: 'Developer',
  'principal-entities': 'Principal Entities on the Network',
  'principal-events': 'Principal Events and Processes on the Network',
  whitepaper: 'Living Whitepaper',
};

export enum ArchitectureDeepDiveId {
  AccountLock = 'architecture-account-lock',
  AddingValidators = 'architecture-adding-validators',
  BlockStructure = 'architecture-block-structure',
  Consensus = 'architecture-consensus',
  Faq = 'architecture-faq',
  MessageFields = 'architecture-message-fields',
  NetworkInitialization = 'architecture-network-initialization',
  NodeIdentifier = 'architecture-node-identifier',
  SampleRequestAndResponse = 'architecture-sample-request-and-response',
  SignedChangeRequest = 'architecture-signature-change-request',
}

export enum PrincipleEntitiesId {
  Account = 'principal-entities-account',
  BlockchainOptimizations = 'blockchain-optimizations',
  BlocksAndBlockchain = 'blocks-and-blockchain',
  Budget = 'principal-entities-budget',
  CoinsVsPoints = 'principal-entities-coins-vs-points',
  Fees = 'principal-entities-fees',
  Glossary = 'principal-entities-glossary',
  Governance = 'principal-entities-governance',
  LockedCoinsAndBoosts = 'principal-entities-locked-coins-and-boosts',
  NodesAndNodeRoles = 'principal-entities-nodes-and-node-roles',
  Overview = 'principal-entities-overview',
  ValidatorSchedule = 'principal-entities-validator-schedule',
  Validators = 'principal-entities-validators',
}

export enum PrincipalEventsId {
  DataFlows = 'principal-events-data-flows',
  ElectionProcess = 'principal-events-election-process',
  ForkPrevention = 'principal-events-fork-prevention',
  HandlingPV = 'principal-events-handling-pv',
  NetworkDataFlow = 'principal-events-network-data-flow',
  Overview = 'principal-events-overview',
  PointsRefilling = 'principal-events-points-refilling',
  RatesAndAmounts = 'principal-events-rates-and-amounts',
  ScheduleAdjustment = 'principal-events-schedule-adjustment',
  Scheduling = 'principal-events-scheduling',
  ValidatorDataFlow = 'principal-events-validator-data-flow',
}

export enum AdditionalFeaturesId {
  CollectionManagersVsTokenOwners = 'CollectionManagersVsTokenOwners',
  Collections = 'Collections',
  TokenDistributionApps = 'TokenDistributionApps',
  TokenDistributionExchange = 'TokenDistributionExchange',
  TokenMinting = 'TokenMinting',
}

export const principalEntitiesPath = ROUTES.whitepaper.principalEntities;
export const principalEventsPath = ROUTES.whitepaper.principalEvents;
export const architecturePath = ROUTES.whitepaper.architecture;
export const additionalFeaturesPath = ROUTES.whitepaper.additionalFeatures;

export const PATHNAME_TO_DROPDOWN_SELECTIONS: Record<string, {title: string; url: string}[]> = {
  'additional-features': [
    {
      title: 'Collections',
      url: `${additionalFeaturesPath}#${AdditionalFeaturesId.Collections}`,
    },
    {
      title: 'Token Minting',
      url: `${additionalFeaturesPath}#${AdditionalFeaturesId.TokenMinting}`,
    },
    {
      title: 'Token Distribution: Exchange',
      url: `${additionalFeaturesPath}#${AdditionalFeaturesId.TokenDistributionExchange}`,
    },
    {
      title: 'Token Distribution: Apps',
      url: `${additionalFeaturesPath}#${AdditionalFeaturesId.TokenDistributionApps}`,
    },
    {
      title: 'Collection Managers vs. Token Owners',
      url: `${additionalFeaturesPath}#${AdditionalFeaturesId.CollectionManagersVsTokenOwners}`,
    },
  ],
  architecture: [
    {
      title: 'Block structure',
      url: `${architecturePath}#${ArchitectureDeepDiveId.BlockStructure}`,
    },
    {
      title: 'Signed Change Request Fields',
      url: `${architecturePath}#${ArchitectureDeepDiveId.SignedChangeRequest}`,
    },
    {
      title: 'Message Fields',
      url: `${architecturePath}#${ArchitectureDeepDiveId.MessageFields}`,
    },
    {
      title: 'Account Lock',
      url: `${architecturePath}#${ArchitectureDeepDiveId.AccountLock}`,
    },
    {
      title: 'Node Identifier',
      url: `${architecturePath}#${ArchitectureDeepDiveId.NodeIdentifier}`,
    },
    {
      title: 'Sample Request and Response',
      url: `${architecturePath}#${ArchitectureDeepDiveId.SampleRequestAndResponse}`,
    },
    {
      title: 'Adding Validators to the Schedule',
      url: `${architecturePath}#${ArchitectureDeepDiveId.AddingValidators}`,
    },
    {
      title: 'Consensus between Confirmation Validators',
      url: `${architecturePath}#${ArchitectureDeepDiveId.Consensus}`,
    },
    {
      title: 'Network Initialization',
      url: `${architecturePath}#${ArchitectureDeepDiveId.NetworkInitialization}`,
    },
    {
      title: 'FAQ',
      url: `${architecturePath}#${ArchitectureDeepDiveId.Faq}`,
    },
  ],
  'principal-entities': [
    {
      title: 'Overview',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Overview}`,
    },
    {
      title: 'Blockchain Optimizations',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.BlockchainOptimizations}`,
    },
    {
      title: 'Account',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Account}`,
    },
    {
      title: 'Blocks and Blockchain',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.BlocksAndBlockchain}`,
    },
    {
      title: 'Nodes & Node Roles',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.NodesAndNodeRoles}`,
    },
    {
      title: 'Validator Schedule',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.ValidatorSchedule}`,
    },
    {
      title: 'Locked Coins and Boosts',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.LockedCoinsAndBoosts}`,
    },
    {
      title: 'Coins vs. Points',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.CoinsVsPoints}`,
    },
    {
      title: 'Governance',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Governance}`,
    },
    {
      title: 'Budget',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Budget}`,
    },
    {
      title: 'Fees',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Fees}`,
    },
    {
      title: 'Glossary of Main Entities',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Glossary}`,
    },
  ],
  'principal-events': [
    {
      title: 'Overview',
      url: `${principalEventsPath}#${PrincipalEventsId.Overview}`,
    },
    {
      title: 'Scheduling',
      url: `${principalEventsPath}#${PrincipalEventsId.Scheduling}`,
    },
    {
      title: 'Data Flows',
      url: `${principalEventsPath}#${PrincipalEventsId.DataFlows}`,
    },
    {
      title: 'Validator Data Flow',
      url: `${principalEventsPath}#${PrincipalEventsId.ValidatorDataFlow}`,
    },
    {
      title: 'Network Data Flow',
      url: `${principalEventsPath}#${PrincipalEventsId.NetworkDataFlow}`,
    },
    {title: 'Schedule Adjustment', url: `${principalEventsPath}#${PrincipalEventsId.ScheduleAdjustment}`},
    {
      title: 'Fork Prevention and Validation Threshold',
      url: `${principalEventsPath}#${PrincipalEventsId.ForkPrevention}`,
    },
    {
      title: 'Handling PV non-responsiveness',
      url: `${principalEventsPath}#${PrincipalEventsId.HandlingPV}`,
    },
    {
      title: 'Points Refilling',
      url: `${principalEventsPath}#${PrincipalEventsId.PointsRefilling}`,
    },
    {
      title: 'Election Process',
      url: `${principalEventsPath}#${PrincipalEventsId.ElectionProcess}`,
    },
    {
      title: 'Rates & Amounts',
      url: `${principalEventsPath}#${PrincipalEventsId.RatesAndAmounts}`,
    },
  ],
  whitepaper: [
    {
      title: PATHNAME_TO_TITLE_MAPPING['principal-entities'],
      url: principalEntitiesPath,
    },
    {
      title: PATHNAME_TO_TITLE_MAPPING['principal-events'],
      url: principalEventsPath,
    },
    {
      title: PATHNAME_TO_TITLE_MAPPING.architecture,
      url: architecturePath,
    },
    {
      title: PATHNAME_TO_TITLE_MAPPING['additional-features'],
      url: additionalFeaturesPath,
    },
  ],
};
