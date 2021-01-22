const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

const countWords = (wordsArray) => {
  return wordsArray.reduce((acc, word) => {
    if (acc[word]) {
      acc[word]++;
    } else {
      acc[word] = 1
    }
    return acc
  }, {});
};

console.log(countWords(inputWords));
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }