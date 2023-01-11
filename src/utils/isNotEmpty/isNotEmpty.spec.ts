import { isNotEmpty } from "@utils/isNotEmpty/isNotEmpty";

const notNullishPrimitives = [0, 1, 5, -10, "foo", false, true, Symbol()];
const nullishPrimitives = [null, undefined];

describe("isNotEmpty", () => {
  test.each(notNullishPrimitives)("should return true for %p", (elem) => {
    expect(isNotEmpty(elem)).toBe(true);
  });

  test.each(nullishPrimitives)("should return false for %p", (elem) => {
    expect(isNotEmpty(elem)).toBe(false);
  });

  test("should return false for an empty string", () => {
    expect(isNotEmpty("")).toBe(false);
  });

  test("should return false for empty array", () => {
    expect(isNotEmpty([])).toBe(false);
  });

  test("should return true for not empty array", () => {
    expect(isNotEmpty([1, 2, 3])).toBe(true);
  });

  test("should return true for an array with empty object", () => {
    expect(isNotEmpty([{}])).toBe(true);
  });

  test("should return false for an empty object", () => {
    expect(isNotEmpty({})).toBe(false);
  });

  test("should return false for an object with nullish and empty string values", () => {
    expect(
      isNotEmpty({
        key: null,
        key2: undefined,
        key3: "",
      })
    ).toBe(false);
  });

  test("should return false for object with nested empty object", () => {
    expect(isNotEmpty({ key: {} })).toBe(false);
  });

  test("should return true for deeply nested object without nullish values", () => {
    expect(
      isNotEmpty({
        key: {
          key: 10,
        },
      })
    ).toBe(true);
  });

  test("should return true for for object with at least one not empty value", () => {
    expect(
      isNotEmpty({
        key: null,
        key2: false,
        key3: undefined,
      })
    ).toBe(true);
  });
});
