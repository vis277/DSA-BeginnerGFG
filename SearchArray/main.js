const arr = [1, 2, 3, 4];
const N = arr.length;
const X = 3;

function search(arr, N, X) {
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
      return i;
    }
  }
  return -1;
}

console.log(search(arr, N, X));
