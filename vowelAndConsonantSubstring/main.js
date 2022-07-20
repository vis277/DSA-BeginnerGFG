const A = "aba";

function countSubstring(A) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < A.length; i++) {
    let emptyString = "";
    for (let j = i; j < A.length; j++) {
      emptyString += A[j];

      if (
        emptyString.length != 1 &&
        vowel.includes(emptyString[0]) &&
        !vowel.includes(emptyString[emptyString.length - 1])
      ) {
        count++;
        // console.log(emptyString, count);
      } else if (
        !vowel.includes(emptyString[0]) &&
        vowel.includes(emptyString[emptyString.length - 1])
      ) {
        count++;
        // console.log(emptyString, count);
      }
    }
  }
  return count;
}

console.log(countSubstring(A));
