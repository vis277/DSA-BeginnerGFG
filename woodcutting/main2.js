let A = [114, 55, 95, 131, 77, 111, 141];

let B = 95;

function woodcutter(A, B) {
  let temp = 0;
  for (let i = 0; i < A.length; i++) {
    if (temp < A[i]) {
      temp = A[i];
    }
  }
  let sum = 0;
  function sumEquals(A, B, temp) {
    sum = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] > temp) {
        sum = sum + (A[j] - temp);
        // console.log("Ln 18", sum);
      }
    }

    if (sum >= B) {
      //   console.log("LN23", temp);
      return temp;
    } else {
      return sumEquals(A, B, temp - 1);
    }
  }
  return sumEquals(A, B, temp);
}

console.log(woodcutter(A, B));

function sum(a,b){
  let result= a+b;

}