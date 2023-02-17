import { camelCase, upperFirst } from "lodash-es"

//大驼峰
export const bigCamelCase = (str) => {
  return upperFirst(camelCase(str));
};

