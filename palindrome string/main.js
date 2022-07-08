const text = "race a car";

function palindrome(text) {
  let text2 = text.toLowerCase();
  let blank = "";
  for (let i = 0; i < text2.length; i++) {
    if (
      (text2.charCodeAt(i) >= 97 && text2.charCodeAt(i) <= 122) ||
      (text2.charCodeAt(i) >= 48 && text2.charCodeAt(i) <= 57)
    ) {
      blank += text2[i];
    }
  }
  //   console.log(blank);
  let blank2 = "";
  for (let i = blank.length - 1; i >= 0; i--) {
    blank2 += blank[i];
  }
  if (blank === blank2) {
    return true;
  }
  return false;
}

console.log(palindrome(text));
