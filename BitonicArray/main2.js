const A = [3, 4, 9, 10, 20, 30, 40, 50, 70];
const B = 50;

function search(a, b) {
  let start = 0;
  let end = a.length - 1; //8
  while (start <= end) {
    let mid = Math.floor((end + start) / 2); //4/20
    console.log(mid);
    if (a[mid] === b) {
      return mid;
    }
    if (b > a[mid]) {
      start = mid + 1;
    } else if (b < a[mid]) {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(search(A, B));
