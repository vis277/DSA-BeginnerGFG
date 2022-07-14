let A = [114, 55, 95, 131, 77, 111, 141];

let B = 95;

function woodcutter(A, B) {
  let temp = 0;
  for (let i = 0; i < A.length; i++) {
    if (temp < A[i]) {
      temp = A[i];
    }
  }
  console.log(temp);
  let sum = 0;
  for (let i = temp; i >= 0; i--) {
    sum = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] > i) {
        sum = sum + (A[j] - i);
        console.log("Ln18", sum);
      }
    }
    console.log("ln20", sum);
    if (sum >= B) {
      return i;
    }
  }
}

console.log(woodcutter(A, B));
