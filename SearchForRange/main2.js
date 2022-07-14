let A = [4, 7, 7, 7, 8, 10, 10];
let B = 3;

function range(A, B) {
  let startindex = -1;
  let endindex = -1;
  let start = 0;
  let end = A.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (B > A[mid]) {
      start = mid + 1;
    } else if (B < A[mid]) {
      end = mid - 1;
    }
    if (B === A[mid]) {
      for (let i = mid; i < A.length; i++) {
        if (A[i] === B) {
          endindex = i;
        }
      }
      for (let i = mid; i >= 0; i--) {
        if (A[i] === B) {
          startindex = i;
        }
      }

      return [startindex, endindex];
    }
  }
  return [startindex, endindex];
}

console.log(range(A, B));
