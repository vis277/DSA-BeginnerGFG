const A = [1, 3, 4, 4, 6];
const B = 8;

function count(a, b) {
  let start = 0;
  let end = a.length - 1;
  if (b < a[A.length - 1]) {
    return A.length;
  }
  if (b < a[0]) {
    return -1;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (b > a[mid]) {
      start = mid + 1;
    } else if (b < a[mid]) {
      end = mid - 1;
    } else if (a[mid] === b && a[mid] === a[mid + 1]) {
      mid++;
      if (a[mid] === b && a[mid] !== a[mid + 1]) {
        return mid;
      }
    }
  }
}
console.log(count(A, B));
