/*
Function that allows to pass two values, an array with numbers and the expected result result. Return the values that form the result

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
*/

function sumPairs(arr, expectedValue) {
  let total = null;

  arr.forEach((value, index) => {
    if (total) return total;
    arr.forEach((value2, index2) => {
      if (value + value2 === expectedValue && index != index2)
        total = [value, value2];
    });
  });

  return total;
}

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
