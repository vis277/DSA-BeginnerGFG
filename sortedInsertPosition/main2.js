let A = [1, 3, 5, 6, 9];
let B = 2;

// let A = [1, 3, 5, 6];
// let B = 5;

function sortedInsert(a, b) {
  let start = 0;
  let end = a.length - 1;
  let midsave = 0;
  if (b > a[a.length - 1]) {
    return a.length;
  }
  if (b < a[0]) {
    return 0;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    midsave = mid;
    if (b > a[mid]) {
      start = mid + 1;
    } else if (b < a[mid]) {
      end = mid - 1;
    } else if (b === a[mid]) {
      return mid;
    }
  }
  return midsave;
}

console.log(sortedInsert(A, B));
