let a = [1, 2, 3];
let n = 3;

function elem(a, size) {
  let obj = {};
  for (let i = 0; i < size; i++) {
    if (obj.hasOwnProperty(a[i])) {
      obj[a[i]] += 1;
    } else {
      obj[a[i]] = 1;
    }
  }
  let arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > size / 2) {
      return arr[i];
    }
  }
  return -1;
}
console.log(elem(a, n));
