// exercises.test.js
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Helper function to execute the student's code and capture the output
const runExercises = () => {
  return new Promise((resolve, reject) => {
    exec(`node ${path.join(__dirname, 'exercises.js')}`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

describe('exercises', () => {
  let spyReverse;

  beforeAll(() => {
    // Spy on the reverse method
    spyReverse = jest.spyOn(Array.prototype, 'reverse');
  });

  afterAll(() => {
    // Clean up spies
    spyReverse.mockRestore();
  });

  it('should use the .reverse() method on the array', async () => {
    await runExercises();

    // Check if the .reverse() method was called
    expect(spyReverse).toHaveBeenCalled();
    expect(spyReverse).toHaveBeenCalledTimes(2); // Two reversals in the student's code
  });

  it('should not use any other array methods', async () => {
    await runExercises();

    // Check that no other methods like .sort() are used
    const spySort = jest.spyOn(Array.prototype, 'sort');
    
    expect(spySort).not.toHaveBeenCalled();
    
    spySort.mockRestore(); // Clean up spy
  });
});