import {ROUTES} from 'constants/routes';
import {Language, DevToolType} from 'types/developer-tools';

import python_logo from './assets/python-logo.png';
import javascript_logo from './assets/javascript-logo.png';
import kotlin_logo from './assets/kotlin-logo.png';
import NET_logo from './assets/NET-core-logo.png';

export const PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  api: 'APIs',
  'node-deployment': 'Node Deployment',
  'sdks-and-libraries': 'SDKs & Libraries',
  utilities: 'Utilities',
};

export const TOOLS_DROPDOWN_SELECTIONS: {title: string; url: string}[] = [
  {
    title: 'APIs',
    url: ROUTES.tools.apis,
  },
  {
    title: 'Node Deployment',
    url: ROUTES.tools.nodeDeployment,
  },
  {
    title: 'SDKs & Libraries',
    url: ROUTES.tools.sdksAndLibraries,
  },
  {
    title: 'Utilities',
    url: ROUTES.tools.utilities,
  },
];

export const LIBRARIES: DevToolType[] = [
  {
    background_color: 'rgba(255, 249, 238, 1)',
    description:
      'This library contains all of the core logic, shared functionality, and constants used by both the Bank and Validator on thenewboston network.',
    image: python_logo,
    language: Language.python,
    title: 'thenewboston-python',
    url: 'https://github.com/thenewboston-developers/thenewboston-python',
  },
  {
    description: 'The official Discord Python framework for thenewboston blockchain.',
    language: Language.python,
    title: 'Discord-Python-Framework',
    url: 'https://github.com/buckyroberts/Discord-Python-Framework',
  },
  {
    background_color: 'rgba(17, 18, 38, 1)',
    description:
      'A JavaScript library for thenewboston that allows you to create new accounts and signatures, verify signatures, and so on.',
    image: javascript_logo,
    language: Language.javascript,
    title: 'thenewboston-js',
    url: 'https://github.com/thenewboston-developers/thenewboston-js',
  },
];

export const SDKS: DevToolType[] = [
  {
    background_color: 'rgba(255, 249, 238, 1)',
    description: 'This is thenewboston SDK in Kotlin with primary focus on developing Android and Desktop clients.',
    image: kotlin_logo,
    language: Language.kotlin,
    title: 'thenewboston Kotlin-SDK',
    url: 'https://github.com/thenewboston-developers/Kotlin-SDK',
  },
  {
    background_color: 'rgba(232, 232, 255, 1)',
    description:
      'This is a .NET Core SDK for thenewboston, which is available cross-platform. The SDK itself solely contains the domain and data layers of thenewboston.',
    image: NET_logo,
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
