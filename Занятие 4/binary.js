function lBinSearch(l, r, check, checkParams) {
  while (l < r) {
    const m = parseInt((l + r) / 2); // 5000
    const res = check(m, checkParams);
    if (res) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

function checkEnd(m, params) {
  const [n, k] = params; // n = 10000, k = 100
  return (k + m) * 3 >= n + m; // 5100
}
const R = 5000 * 2;
const K = 1000;
console.log(lBinSearch(0, R, checkEnd, [R, K]));
