let str = "zvvo";
function nonRepeat(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = 1;
  }
  let arr = Object.keys(obj);
  let blank = "";
  for (let i = 0; i < arr.length; i++) {
    blank += arr[i];
  }
  return blank;
}
console.log(nonRepeat(str));
