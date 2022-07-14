

const input = "cCaaAAbbbBBB";

const obj = {};

for (let i = 0; i < input.length; i++) {
  if (obj.hasOwnProperty(input[i])) {
    obj[input[i]] += input[i];
  } else {
    obj[input[i]] = input[i];
  }
}
let arr = Object.values(obj);
console.log("ln24", arr);
let arr2 = arr.sort((a, b) => {
  return b.length - a.length;
});
let blank = "";
let arr3 = arr2.join("");
console.log(arr3);
