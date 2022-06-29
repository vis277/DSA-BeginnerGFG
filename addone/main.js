let A = [1, 2, 3];

function abc(A) {
  let blank = "";
  for (let i = 0; i < A.length; i++) {
    blank = blank + A[i];
    // console.log(blank);
  }
  let sum = +blank + 1;
  return sum;
}
console.log(abc(A));
