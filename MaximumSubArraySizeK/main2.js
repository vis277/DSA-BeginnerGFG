const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
const n = arr.length;
const k = 3;

function max(arr, n, k) {
  let result = [];
  let count = 0;
  let temp = arr[0];
  for (let i = 0; i < n; i++) {
    console.log("LN10", i);
    if (arr[i] >= temp) {
      temp = arr[i];
    }
    count++;
    if (count === k) {
      console.log(temp);
      result.push(temp);

      i = i - (k - 1);

      count = 0;
      temp = arr[i];
    }
  }
  return result;
}
console.log(max(arr, n, k));
