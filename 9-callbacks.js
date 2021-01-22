const assertEquals = require("./assert-helper");

const myMap = (array, callback) => {
  const newArray = [];
  array.forEach((element, index) => {
    newArray.push(callback(element, index));
  });
  return newArray;
};

// const myFilter = (array, callback) => {
//   const newArray = [];
//   array.forEach((element, index) => {
//     if (callback(element, index)) {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// };

const myFilter = (array, callback) => {
  const newArray = [];
  array.forEach((e, i) => callback(e, i) && newArray.push(e));
  return newArray;
};

assertEquals(
  myMap([1, 2, 3, 4], (element, index) => element * 2), [2, 4, 6, 8]
);

assertEquals(
  myFilter([1, 2, 3, 4], (element, index) => element < 3), [1, 2]
);