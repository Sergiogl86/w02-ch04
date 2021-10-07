const { SkylabArray } = require("./skylab-array");

const nuevaArray = new SkylabArray();

describe("Given push function", () => {
  describe("When it receives SkylabArray.push(5)", () => {
    test("Then it should return '1'", () => {
      const input = 5;
      const expected = 1;

      const result = nuevaArray.push(input);

      expect(result).toBe(expected);
    });
  });

  describe("When it receives SkylabArray.push('hola')", () => {
    test("Then it should return '1'", () => {
      const input = "hola";
      const expected = 2;

      const result = nuevaArray.push(input);

      expect(result).toBe(expected);
    });
  });
});

describe("Given some function", () => {
  describe("When we have 'nuevaArray =[3, 5, 6, 9]' and it receives SkylabArray.some((element) => element % 2 === 0)", () => {
    test("Then it should return 'true'", () => {
      const input = (element) => element % 2 === 0;
      const expected = true;

      const nuevaArray = [3, 5, 6, 9];

      const result = nuevaArray.some(input);

      expect(result).toBe(expected);
    });
  });
  describe("When we have 'nuevaArray =[3, 5, 7, 9]' and it receives SkylabArray.some((element) => element % 2 === 0)", () => {
    test("Then it should return '1'", () => {
      const input = (element) => element % 2 === 0;
      const expected = false;

      const nuevaArray = [3, 5, 7, 9];

      const result = nuevaArray.some(input);

      expect(result).toBe(expected);
    });
  });
  describe("When we have 'nuevaArray =[3, 5, 7, 9]' and it receives SkylabArray.some('No soy una funcion')", () => {
    test("Then it should return 'Error'", () => {
      const input = "No soy una funcion";
      const expected = "Type Error";

      const nuevaArray = [3, 5, 7, 9];

      const result = nuevaArray.some(input);

      expect(result).toThrow();
    });
  });
});
