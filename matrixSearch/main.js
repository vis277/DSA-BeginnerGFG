let A = [[1]];

let B = 1;
function find(A, B) {
  for (let i = 0; i < A.length; i++) {
    let start = 0;
    // console.log(start);
    let end = A[i].length - 1;
    // while (start <= end)
    do {
      let mid = Math.floor((end + start) / 2);
      //   console.log(A[i][mid]);

      if (A[i][mid] === B) {
        return 1;
      }
      if (B > A[i][mid]) {
        start = mid + 1;
      } else if (B < A[i][mid]) {
        end = mid - 1;
      }
    } while (start <= end);
  }

  return 0;
}

console.log(find(A, B));
