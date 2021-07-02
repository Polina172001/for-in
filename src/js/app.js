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
        arr.push({
          key: prop,
          value: object[prop],
        });
        delete object[props];
      }
    });
  }
  const outherArr = Object.keys(object).sort().reduce((obj, keys) => [...obj, {
    key: keys,
    value: object[keys],
  }], []);

  return arr.concat(outherArr);
}
