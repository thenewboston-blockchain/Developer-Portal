import {Language} from 'types/developer-tools';

import dotnetBg from '../assets/tile-bg-dotnet.svg';
import javascriptBg from '../assets/tile-bg-javascript.svg';
import pythonBg from '../assets/tile-bg-python.svg';
import kotlinBg from '../assets/tile-bg-kotlin.svg';
import defaultBg from '../assets/tile-bg.svg';

const backgroundTile = (language: string | undefined) => {
  switch (language) {
    case Language.dotNet:
      return dotnetBg;
    case Language.javascript:
      return javascriptBg;
    case Language.kotlin:
      return kotlinBg;
    case Language.python:
      return pythonBg;
    default:
      return defaultBg;
  }
};

export default backgroundTile;
