const utils = require("../src/utils");

describe("Utility functions", () => {
  describe("Read file", () => {
    it("shoud read the contents of a file and return that content as an array", async () => {
      const filePath = "./assets/input.txt";

      const words = await utils.readFile(filePath);

      expect(words).toEqual(expect.arrayContaining([expect.any(String)]));
    });
  });
});
