import { filterEmptyLines, parseLine } from './parse';

describe('parse', () => {
  describe('filterEmptyLines', () => {
    it('should filter empty strings', () => {
      const mock = ['hello', '', 'world'];
      const result = mock.filter(filterEmptyLines);

      expect(result.length).toStrictEqual(2);
    });
  });

  describe('parseLine', () => {
    it('should parse the data and return correct data shape', () => {
      const mock = '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"';
      const result = parseLine(mock);
      const expected = ['ip', 'timeStamp', 'method', 'url', 'protocol', 'userAgent'];

      expect(Object.keys(result)).toStrictEqual(expected);
    });
  });
});