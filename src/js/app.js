/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
export default function orderByProps(object, [...key]) {
  const arr = [];
  // eslint-disable-next-line no-restricted-syntax
  // eslint-disable-next-line guard-for-in
  for (const props in object) {
    key.forEach((prop) => {
      if (prop === props) {
        arr.push(`key: ${prop}, value: ${object[props]}`);
        delete object[props];
      }
    });
  }
  const outherArr = [];
  // eslint-disable-next-line array-callback-return
  Object.keys(object).sort().reduce((objs, keys) => {
    outherArr.push(`key: ${keys}, value: ${object[keys]}`);
  });

  return arr.concat(outherArr);
}
