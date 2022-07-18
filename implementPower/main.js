// let A = -1;
// let B = 1;
// let C = 20;

let A = 2;
let B = 3;
let C = 3;

function power() {
  let total = 1;
  for (let i = 0; i < B; i++) {
    total = total * A;
  }
  console.log(total);
  let rem = total % C;
  return rem;
}
console.log(power(A, B, C));
