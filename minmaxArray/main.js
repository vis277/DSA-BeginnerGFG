const arr = [1, 345, 234, 21, 56789];
const n = arr.length;

function minMax(arr, n) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}

console.log(minMax(arr, n));
