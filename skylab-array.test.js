const { skylabArray } = require("./skylab-array");

describe("Given push function", () => {
  describe("When it receives SkylabArray.push(5)", () => {
    test("Then it should return '{ '0': 5, length: 1 }'", () => {
      const input = 5;
      const expected = 5;

      const prueba = new skylabArray();
      prueba.push(input);
      const result = prueba[0];

      expect(result).toBe(expected);
    });
  });
});
