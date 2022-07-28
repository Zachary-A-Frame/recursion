/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // Validate that our array is greather than length of 0
  if (idx === nums.length) return 1;
  // Recursion: we multiply, starting from index 0, the first point of our array * the value of the next value in our array. We do so by multiplying our array[idx] by the function itself, with the idx value increasing by one each time until it reaches the length of our array, at which point we return 1 because it will stop our function there.
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
      // This line of code compares two numbers and returns the max value. As we increment our idx by one we will compare each like a sliding window moving down our array, and will change our longestSoFar value each time it encounters a longer word.
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */
function everyOther(str, idx = 0, newString = "") {
  if (idx >= str.length) return newString;
  newString += str[idx];
  return everyOther(str, idx + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newString = "") {
  if (newString.length === str.length) return newString
  newString += str[str.length - 1 - idx]
  return revString(str, idx + 1, newString)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
