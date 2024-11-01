// !Requirements

// *TDD - Create tests for a module that will:

//  obscure credit card numbers except the last 4 digits

// Test make sure the function obscures credit card numbers that are between the length of 12 and 16 digits

// input 123456789012

// output: ********9012

const creditCardObscure = require("./obsure");

describe("obscure credit card numbers test", () => {
  test("valid number", () => {
    expect(creditCardObscure(123456789012)).toBe("********9012");
  });

  test("invalid length (too short)", () => {
    expect(creditCardObscure(12345678)).toBe(
      "Not a valid credit card number, the number you enter was 8 digits long"
    );
  });

  test("invalid input (non-numeric)", () => {
    expect(creditCardObscure("abcd123")).toBe(
      "Please only input numbers, (abcd123) is a (string) not a number"
    );
  });

  test("invalid length (too short)", () => {
    expect(creditCardObscure(12345678908234568)).toBe(
      "Not a valid credit card number, the number you enter was 17 digits long"
    );
  });
  test("maximum valid length (16 digits)", () => {
    expect(creditCardObscure(1234567890123456)).toBe("************3456");
  });
});
