// let A = [1, 3, 5, 6];
// let B = 2;

let A = [1, 3, 5, 6];
let B = 5;

function sortedInsert(a, b) {
  for (let i = 0; i < A.length; i++) {
    if (a[i] === b) {
      return i;
    }
    if (a[i] > b) {
      return i;
    }
  }
}

console.log(sortedInsert(A, B));
