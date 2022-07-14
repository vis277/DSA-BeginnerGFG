/**
 * A = [20, 15, 10, 17], B = 7 output = 15
 * find the average1 of the array
 * substract and find the sum of chopped wood from the element that has greater height than average1
 * check if sum ===B then return average1
 * else find the average2 based on number of chopped element
 * average1+average2
 * repeat fron step 2
 *
 */
let A = [117, 84, 50, 119, 74, 128];
let B = 58;
function cutting(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  let avg1 = sum / a.length;
  console.log(avg1);
  let x = Math.floor(avg1);
  console.log(x);
  let sum2 = 0;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > x) {
      sum2 += a[i] - x;
      count++;
      console.log(sum2, count);
    }
  }
  if (sum2 <= B) {
    return x;
  } else {
    x = x + (sum2 - B) / count;
    return x;
  }
}
console.log(cutting(A, B));
