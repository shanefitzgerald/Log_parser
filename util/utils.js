export function tally(acc, x) { 
  if (!acc[x]) { 
    acc[x] = 1;
    return acc;
  } 

  acc[x] += 1;

  return acc;
}

export function topFrequent(arr, k) {
  if (!arr || !arr.length) {
    return [];
  }
  // { '1': 3, '2': 2, '3': 3 }
  const hash = arr.reduce(tally, {});
  // [ [ '1', 3 ], [ '2', 2 ], [ '3', 3 ] ]
  const hashToArray = Object.entries(hash);
  // [ [ '1', 3 ], [ '3', 3 ], [ '2', 2 ] ]
  const sortedArray = hashToArray.sort((a, b) => b[1] - a[1]);
  // ['1', '3', '2']
  const sortedElement = sortedArray.map(result => result[0]);

  return sortedElement.slice(0, k);
}

export function dedupe(arr) {
  if (!arr) {
    return [];
  }

  return [...new Set(arr)];
}