let a = [2, 4, 6, 8, 9, 10, 12];
let b = [2, 4, 6, 8, 10, 12];
function missingElmIndex(a, b) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = i;
  }

  for (let i = 0; i < b.length; i++) {
    if (obj.hasOwnProperty(b[i])) {
      delete obj[b[i]];
    }
  }
  let arr = Object.keys(obj);
  return obj[arr[0]];
}
console.log(missingElmIndex(a, b));
