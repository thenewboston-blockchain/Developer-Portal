import {Language, DevToolType} from 'types/developer-tools';

export const PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  'developer-tools': 'Developer Tools',
};

export const LIBRARIES: DevToolType[] = [
  {
    description:
      'This library contains all of the core logic, shared functionality, and constants used by both the Bank and Validator on thenewboston network.',
    language: Language.python,
    title: 'thenewboston-python',
    url: 'https://github.com/thenewboston-developers/thenewboston-python',
  },
  {
    description:
      'A JavaScript library for thenewboston that allows you to create new account, create signatures, verify signatures, etc.',
    language: Language.javascript,
    title: 'thenewboston-js',
    url: 'https://github.com/thenewboston-developers/thenewboston-js',
  },
];

export const SDKS: DevToolType[] = [
  {
    description:
      'This is the SDK written in Kotlin for thenewboston with primary focus for Android and Desktop clients.',
    language: Language.kotlin,
    title: 'thenewboston Kotlin-SDK',
    url: 'https://github.com/thenewboston-developers/Kotlin-SDK',
  },
  {
    description:
      'This is a .NET Core SDK for thenewboston, which is available cross-platform. The SDK itself will solely contain the domain and data layers of thenewboston.',
    language: Language.dotNet,
    title: 'thenewboston .NET Core SDK',
    url: 'https://github.com/thenewboston-developers/dotnetcore-sdk',
  },
];

export const UTILITIES: DevToolType[] = [
  {
    description: 'Create accounts and server node options with ease.',
    title: 'TNB Account Generator',
    url: 'https://tnb-account-generator.vercel.app',
  },
];
