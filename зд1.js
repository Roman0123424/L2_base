function hasTwoCubeSums(n) {
  const seen = new Set();
  const limit = Math.cbrt(n);
  for (let i = 1; i <= limit; i++) {
    const cube = i * i * i;
    if (seen.has(n - cube)) {
      if (seen.size > limit) return true;
      seen.add(cube);
    } else {
      seen.add(cube);
    }
  }
  return [...seen].filter(c => seen.has(n - c)).length >= 4;
}