const utils = require("./src/utils");
const wordFns = require("./src/words");

(async () => {
  const words = await utils.readFile("./assets/input.txt");

  const targetLength = wordFns.getMaxCharLength(words);
  const validWords = wordFns.getValidWords(words, targetLength);

  console.log(validWords);
})();
