const { SkylabArray } = require("./skylab-array");

let nuevaArray = new SkylabArray();

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

      nuevaArray = [3, 5, 6, 9];

      const result = nuevaArray.some(input);

      expect(result).toBe(expected);
    });
  });
  describe("When we have 'nuevaArray =[3, 5, 7, 9]' and it receives SkylabArray.some((element) => element % 2 === 0)", () => {
    test("Then it should return '1'", () => {
      const input = (element) => element % 2 === 0;
      const expected = false;

      nuevaArray = [3, 5, 7, 9];

      const result = nuevaArray.some(input);

      expect(result).toBe(expected);
    });
  });
  describe.skip("When we have 'nuevaArray =[3, 5, 7, 9]' and it receives SkylabArray.some('No soy una funcion')", () => {
    test("Then it should return 'Error'", () => {
      const input = "No soy una funcion";
      const expected = "Type Error";

      nuevaArray = [3, 5, 7, 9];

      const result = nuevaArray.some(input);

      expect(result).toThrow();
    });
  });
});
describe("Given find function", () => {
  describe("When we have 'nuevaArray =[10, 5, 6, 9]' and it receives SkylabArray.find((element) => element < 6)", () => {
    test("Then it should return 5", () => {
      const input = (element) => element < 6;
      const expected = 5;

      nuevaArray = [10, 5, 6, 9];

      const result = nuevaArray.find(input);

      expect(result).toBe(expected);
    });
  });
});
describe("Given filter function", () => {
  describe("When we have 'nuevaArray =[10, 5, 6, 9]' and it receives SkylabArray.filter((element) => element < 7)", () => {
    test("Then it should return [5, 6]", () => {
      const input = (element) => element < 7;
      const expected = [5, 6];

      nuevaArray = [10, 5, 6, 9];

      const result = nuevaArray.filter(input);

      expect(result).toEqual(expected);
    });
  });
});
describe("Given map function", () => {
  describe("When we have 'nuevaArray =[3, 5, 7, 9]' and it receives SkylabArray.map( function = > return Math.sqrt(x))", () => {
    test("Then it should return sqrt of each array element", () => {
      const input = function (x) {
        return Math.sqrt(x);
      };
      const expected = [5, 3];

      const nuevaArray = [25, 9];

      const result = nuevaArray.map(input);

      expect(result).toEqual(expected);
    });
  });
});