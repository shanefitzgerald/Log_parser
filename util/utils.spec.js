import { tally, topFrequent, dedupe } from './utils.js';

describe('Utils', () => {
  describe('tally', () => {
    const mock = ['hello', 'world', 'hello', 'again'];
    it('should return a tally hash', () => {
      const result = mock.reduce(tally, {});
      const expected = {hello: 2, world: 1, again: 1};

      expect(result).toStrictEqual(expected);
    });
  });

  describe('topFrequent', () => {
    it('should return empty array with no data', () => {
      const results = topFrequent([], 3);

      expect(results).toStrictEqual([]);
    });
    it('should return single item with only one element', () => {
      const results = topFrequent(['hello']);

      expect(results).toStrictEqual(['hello']);
    });
    it('should return return first elements found in result if there is tie - k is two', () => {
      const mock = ['hello', 'hello', 'world', 'world', 'again', 'again'];
      const results = topFrequent(mock, 2);
      const expected = ['hello', 'world'];

      expect(results).toStrictEqual(expected);
    });
    it('should handle a single repeat and return first in first out', () => {
      const mock = ['hello', 'world', 'world', 'again', 'more'];
      const results = topFrequent(mock, 3);
      const expected = ['world', 'hello', 'again'];

      expect(results).toStrictEqual(expected);
    });
    it('should return [world, hello, again] - k is three', () => {
      const mock = ['hello', 'world', 'world', 'again'];
      const results = topFrequent(mock, 3);
      const expected = ['world', 'hello', 'again'];

      expect(results).toStrictEqual(expected);
    });
    it('should return [world again] - k is two', () => {
      const mock = ['hello', 'world', 'world', 'again', 'again'];
      const results = topFrequent(mock, 2);
      const expected = ['world', 'again'];

      expect(results).toStrictEqual(expected);
    });
  });

  describe('dedupe', () => {
    it('should return empty array if not array or no elements', () => {
      const results = dedupe(null);

      expect(results).toStrictEqual([]);
    });
    it('should remove duplicate strings from array', () => {
      const mock = ['one', 'one', 'two', 'two', 'three', 'three'];
      const results = dedupe(mock);
      const expected = ['one', 'two', 'three'];

      expect(results).toStrictEqual(expected);
    });
    it('should remove duplicate numbers from array', () => {
      const mock = [1, 1, 2, 2, 3, 3];
      const results = dedupe(mock);
      const expected = [1, 2, 3];

      expect(results).toStrictEqual(expected);
    });
  });
});