const n = 5;
const arr = [0, 0, 0, 1, 1];

function transition(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      return i;
    }
  }
  return -1;
}

console.log(transition(arr, n));
