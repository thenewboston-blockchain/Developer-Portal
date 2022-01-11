export enum Language {
  javascript = 'JS',
  python = 'Python',
  dotNet = '.NET Core',
  kotlin = 'Kotlin',
  go = 'Go',
}

// This type is also used for SDKs
export type DevToolType = {
  description: string;
  language?: Language;
  title: string;
  url: string;
};
