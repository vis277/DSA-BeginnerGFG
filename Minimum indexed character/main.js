const str = "geeksforgeeks";
const patt = "set";

function min(str, patt) {
  let obj = {};
  let temp = Infinity;
  for (let i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = i;
    }
  }
  //   console.log(obj)
  for (let i = 0; i < patt.length; i++) {
    if (obj.hasOwnProperty(patt[i]) && temp >= obj[patt[i]]) {
      temp = obj[patt[i]];
      //   console.log(temp)
    }
  }
  if (temp === Infinity) {
    return -1;
  }
  return temp;
}

console.log(min(str, patt));
