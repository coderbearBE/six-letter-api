const getMaxCharLength = (wordsArray) => {
  return Math.max(...wordsArray.map((word) => word.length));
};

const getValidWords = (wordsArray, numOfChars) => {
  return wordsArray.filter((word) => word.length === numOfChars);
};

const findCombinations = () => {};

module.exports = {
  findCombinations,
  getMaxCharLength,
  getValidWords,
};
