const replaceEvenCharactersWithLetter = (letter) => {
  return (string) => {
    // convert string into array
    // iterate over array (map)
    // if index of element is divisible by 2
    // replace element with letter
    const chars = [...string];
    const replacementChars = chars.map((char, index) => {
      return (index % 2 === 0) ? letter : char;
    });
    return replacementChars.join('');
  };
};

const replaceEvenCharactersWithW = replaceEvenCharactersWithLetter("w");

console.log(replaceEvenCharactersWithW("hello world~"));
// prints wewlw wowlw~