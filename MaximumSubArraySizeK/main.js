const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
const n = arr.length;
const k = 3;
function sub(arr, n, k) {
  let arr1 = [];
  for (let i = 0; i < n - k + 1; i++) {
    let temp = 0;
    for (let j = i; j < i + k; j++) {
      if (arr[j] > temp) {
        temp = arr[j];
      }
    }
    arr1.push(temp);
  }
  return arr1;
}
console.log(sub(arr, n, k));
