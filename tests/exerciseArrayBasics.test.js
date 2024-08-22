// arrays.test.js

const { arr1, arr2, arr3, arr4 } = require('../exerciseArrayBasics');

describe('Array-Initialisierungen', () => {

  // Test für arr1
  describe('arr1', () => {

    test('soll definiert sein', () => {
      expect(arr1).toBeDefined();
    });

    test('soll ein leeres Array sein', () => {
      expect(arr1).toEqual([]);
    });
  });

  // Test für arr2
  describe('arr2', () => {

    test('soll definiert sein', () => {
      expect(arr2).toBeDefined();
    });

    test('soll ein leeres Array sein', () => {
      expect(arr2).toEqual([]);
    });
  });

  // Test für arr3
  describe('arr3', () => {

    test('soll definiert sein', () => {
      expect(arr3).toBeDefined();
    });

    test('soll ein leeres Array sein', () => {
      expect(arr3).toEqual([]);
    });
  });

  // Test für arr4
  describe('arr4', () => {

    test('soll definiert sein', () => {
      expect(arr4).toBeDefined();
    });

    test('soll ein leeres Array sein', () => {
      expect(arr4).toEqual([]);
    });
  });

});
