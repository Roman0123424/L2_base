function longest(arr, n) {
  const sorted = [];
  const source = [...arr];

  for (let i = 0; i < n; i++) {
    let maxLen = -1;
    let maxIdx = -1;

    for (let j = 0; j < source.length; j++) {
      if (source[j] !== null && source[j].length > maxLen) {
        maxLen = source[j].length;
        maxIdx = j;
      }
    }
    sorted.push(source[maxIdx]);
    source[maxIdx] = null;
  }

  return sorted[n - 1];
}