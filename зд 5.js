function primeFactors(n) {
  let res = "";
  for (let i = 2; i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      count++;
      n /= i;
    }
    if (count > 0) {
      res += `(${i}${count > 1 ? '**' + count : ''})`;
    }
  }
  return res;
}