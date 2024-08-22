// exercise1.test.js
const reverseArray = require('../exerciseReverse');

describe('reverseArray function', () => {
  let spyReverse;

  beforeAll(() => {
    // Spy on the reverse method
    spyReverse = jest.spyOn(Array.prototype, 'reverse');
  });

  afterAll(() => {
    // Clean up spies
    spyReverse.mockRestore();
  });

  it('should use the .reverse() method on the array', () => {
    reverseArray(); // Call the student's function

    // Check if the .reverse() method was called
    expect(spyReverse).toHaveBeenCalled();
    expect(spyReverse).toHaveBeenCalledTimes(2); // Two reversals in the student's code
  });

  it('should not use any other array methods', () => {
    const spySort = jest.spyOn(Array.prototype, 'sort'); // Example of another method to check
    reverseArray(); // Call the student's function

    expect(spySort).not.toHaveBeenCalled();

    spySort.mockRestore(); // Clean up spy
  });
});
