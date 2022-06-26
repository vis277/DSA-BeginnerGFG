const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
const n = arr.length;
const k = 3;

function max(arr, n, k) {
  let result = [];
  let x = k;
  let count = 0;
  let temp = arr[0];
  for (let i = 0; i < k; i++) {
    console.log("LN10", i);
    if (arr[i] >= temp) {
      temp = arr[i];
    }
    count++;
    if (count === x) {
      console.log(temp);
      result.push(temp);

      i = i - (x - 1);

      count = 0;
      temp = arr[i];
      k++;
    }
    if (i === n - 1) {
      return result;
    }
  }
  return result;
}
console.log(max(arr, n, k));
