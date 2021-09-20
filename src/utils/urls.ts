export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];

export const getFirstTwoPathParams = (path: string): string =>
  path
    .split('/')
    .filter((pathParam, index) => !!pathParam && index <= 2)
    .join('/');
