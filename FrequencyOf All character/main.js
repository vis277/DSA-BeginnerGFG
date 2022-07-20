let A = "interviewbit";

function count(A) {
  const charterMap = {};

  for (item of A) {
    if (obj.hasOwnProperty(item)) {
      obj[item] += 1;
    }
  }

  const result = Object.values(charterMap);
  return result;
}
// console.log(count(A));
console.log(count("abcdefghijklasdmnopqrstuvwxyz"));
