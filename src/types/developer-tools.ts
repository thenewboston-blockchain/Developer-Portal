export enum Language {
  dotNet = '.NET Core',
  go = 'Go',
  javascript = 'JS',
  kotlin = 'Kotlin',
  python = 'Python',
}

// This type is also used for SDKs
export type DevToolType = {
  background_color?: string;
  description: string;
  image?: string;
  language?: Language;
  title: string;
  url: string;
};
