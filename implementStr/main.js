let s = "GeeksForGeeks";
let x = "Fr";

function impstr(s, x) {
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + x.length) === x) {
      return i;
    }
  }
  return -1;
}
console.log(impstr(s, x));
