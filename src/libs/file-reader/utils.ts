export const parseArr = (str: string): string[] => str.split(';');
export const parseBool = (str: string): boolean => str === 'true';
export const stringifyArr = (arr: string[]) => arr.join(';');
