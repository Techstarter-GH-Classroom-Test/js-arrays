// Variablen aus excercises-Modul müssen importiert werden:
const values = require('../exercise1')

// Test können dann mit .-Notation auf diese Variablen zugreifen
test('y equals 6', () => {
  expect(values.y).toBe(6);
});