const { sumar, restar } = require('./calculator');

test('Suma de 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Resta de 5 - 2 debe ser 3', () => {
  expect(restar(5, 2)).toBe(3);
});