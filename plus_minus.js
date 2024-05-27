// Given an array of Integers calculate the ratios of elements that are positive, negetive or zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

// eg: [1, 1, 0, -1, -1]: 0.400000 0.400000 0.200000 // should print like this.

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negetive = 0;
  let neutral = 0;

  arr.map((item) =>
    item === 0 ? neutral++ : item > 0 ? positive++ : negetive++
  );

  const pos = (positive / arr.length).toFixed(6);
  const neg = (negetive / arr.length).toFixed(6);
  const neu = (neutral / arr.length).toFixed(6);

  console.log(pos);
  console.log(neg);
  console.log(neu);
}
