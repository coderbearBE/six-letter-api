const fs = require("fs").promises;

const readFile = async (urlToFile) => {
  try {
    const data = await fs.readFile(urlToFile, "utf8");
    const wordsArray = data.split("\n");
    return wordsArray;
  } catch (error) {
    throw new Error("Error reading file: ", error);
  }
};

const writeFile = () => {};

module.exports = {
  readFile,
  writeFile,
};
