export const isFalsy = (val: any) => (!val && val !== 0 ? true : false);

export const cleanObject = (object: { [key: string]: any }) => {
  const result: { [key: string]: any } = {};
  Object.keys(object).forEach((key) => {
    const val = object[key];
    if (!isFalsy(val)) {
      result[key] = val;
    }
  });
  return result;
};
