export const checkEmptyObject = (object: Record<string, any>) =>
  Object.keys(object).length === 0;
