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

const writeFile = async (validCombinations) => {
  try {
    await fs.writeFile(
      "./assets/output.txt",
      validCombinations.join("\n"),
      "utf8"
    );
    console.log("Data written to file");
  } catch (error) {
    throw new Error("Error writing file: ", error);
  }
};

module.exports = {
  readFile,
  writeFile,
};
