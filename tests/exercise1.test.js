// Variablen aus excercises-Modul müssen importiert werden:
const values = require('../exercises')

// Test können dann mit .-Notation auf diese Variablen zugreifen
test('x equals 5', () => {
  expect(values.x).toBe(5);
});
