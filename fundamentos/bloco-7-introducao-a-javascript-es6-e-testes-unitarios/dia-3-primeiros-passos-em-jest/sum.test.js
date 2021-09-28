const soma = require("./sum");

describe("teste da funcao soma", () => {
  it("soma de 4 e 5 igual a 9", () => {
    expect(soma(4, 5)).toBe(9);
  });
});
