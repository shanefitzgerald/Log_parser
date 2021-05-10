import { regex } from './regex';

describe('Regex', () => {
  describe('ipaddress', () => {
    const tests = [
      { value: '', expected: false },
      { value: 'world', expected: false },
      { value: null, expected: false },
      { value: '132', expected: false },
      { value: '123.321', expected: false },
      { value: '168.41.191.40', expected: true },
      { value: '11.0.696.71', expected: true },
      { value: '72.44.32.10', expected: true },
      { value: '79.125.00.21', expected: true },
      { value: '168.41.191.41', expected: true },
      // TODO: not a valid ip
      { value: '999.999.999.999', expected: true }
    ];

    tests.forEach(item => {
      it(`should ${item.expected ? `pass` : `fail`} when ${item.value} is used`, () => {
        let result = regex.ipaddress.test(item.value);

        expect(result).toStrictEqual(item.expected);
      });
    });
  });
});