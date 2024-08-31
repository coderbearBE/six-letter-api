const getMaxCharLength = (wordsArray) => {
  return Math.max(...wordsArray.map((word) => word.length));
};

const getValidWords = (wordsArray, numOfChars) => {
  return wordsArray.filter((word) => word.length === numOfChars);
};

const findCombinations = (sourceWords, validWords) => {
  let result = [];

  const generateCombinations = (currentCombo, remainingLength, index) => {
    if (remainingLength === 0) {
      const combinedWord = currentCombo.join("+");
      if (validWords.includes(combinedWord)) {
        result = [...result, combinedWord];
      }
      return;
    }

    for (let i = index; i < sourceWords.length; i++) {
      const word = sourceWords[i];
      if (word.length <= remainingLength) {
        generateCombinations(
          [...currentCombo, word],
          remainingLength - word.length,
          i + 1
        );
      }
    }
  };

  generateCombinations([], validWords.length, 0);

  return result;
};

module.exports = {
  findCombinations,
  getMaxCharLength,
  getValidWords,
};
