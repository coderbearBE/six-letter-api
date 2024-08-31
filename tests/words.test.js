const wordFns = require("../src/words");

const WORDS = [
  "osine",
  "them",
  "narro",
  "es",
  "awler",
  "plex",
  "qu",
  "rrow",
  "iny",
  "shabb",
  "rrow",
  "well",
  "zambia",
  "inks",
  "nd",
  "s",
  "romie",
  "osen",
  "kiing",
  "mu",
  "sin",
  "appeal",
  "us",
  "and",
  "tryf",
  "d",
  "t",
  "tle",
  "h",
  "u",
  "feede",
  "yo",
  "a",
  "harley",
  "taug",
  "n",
  "ladde",
  "hower",
  "win",
  "spo",
  "be",
  "m",
  "scalb",
  "hannah",
  "signal",
  "oyers",
  "pro",
  "infirm",
  "planet",
  "teamy",
  "rch",
  "brooks",
  "soc",
  "rtsy",
  "m",
  "nat",
  "annah",
  "ond",
  "e",
  "utter",
  "ringe",
  "llid",
  "arc",
  "e",
  "almo",
  "bishop",
  "soccer",
  "le",
  "e",
  "buck",
  "elid",
  "k",
  "ha",
  "skii",
  "cer",
  "coyo",
  "let",
  "bu",
  "sc",
  "bl",
  "wicked",
  "archan",
  "ssue",
  "ey",
  "trifl",
  "adder",
  "ptse",
  "s",
  "l",
  "uum",
  "yonder",
  "e",
  "ord",
  "across",
  "e",
  "itric",
  "tigger",
  "for",
  "ple",
  "la",
];

describe("Word functions", () => {
  describe("getMaxCharLength", () => {
    it("should return the max length of a word from an array of words", () => {
      const max = wordFns.getMaxCharLength(WORDS);
      expect(max).toBe(6);
    });
  });

  describe("getValidWords", () => {
    it("should only return words for a given number of characters", () => {
      const validWords = wordFns.getValidWords(WORDS, 6);
      expect(validWords.every((word) => word.length === 6)).toBeTruthy();
    });
  });
});
