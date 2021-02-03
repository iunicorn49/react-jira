import { useMemo } from "react";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import { cleanObject } from "utils";

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce((prev, key) => {
        return {
          ...prev,
          [key]: searchParams.get(key) || "",
        };
      }, {} as { [key in K]: string });
      // eslint-disable-next-line
    }, [searchParams]),
    (params: Partial<{ [key in K]: unknown }>) => {
      // Object.fromEntries 把可以迭代的东西转换成一个普通的对象
      const obj = cleanObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParams(obj);
    },
  ] as const;
};
