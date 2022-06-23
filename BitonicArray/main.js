const arr = [1, 15, 25, 45, 42, 21, 17, 12, 11];
const n = arr.length;

function bitonic(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr[i];
    }
  }
  return arr[n - 1];
}

console.log(bitonic(arr, n));
