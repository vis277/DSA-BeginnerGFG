let A = [5, 7, 7, 8, 8, 10];
let B = 8;

function range(A, B) {
  let start = -1;
  let end = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B) {
      start = i;
      break;
    }
  }
  console.log(start);
  for (let j = A.length - 1; j >= 0; j--) {
    if (A[j] === B) {
      end = j;
      break;
    }
  }
  if (start === -1) {
    return [-1, -1];
  }
  if (start === end) {
    return [start, -1];
  }
  return [start, end];
}

console.log(range(A, B));
