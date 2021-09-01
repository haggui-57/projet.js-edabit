//script/chekTags.js

@@ -39,14 +39,7 @@ process.stdin.on('data', data => {
});

process.stdin.on('end', () => {
  const tags = Array.from(
    new Set(
      str
        .trim()
        .slice(1, -1)
        .split(/` `/),
    ),
  );
  const tags = Array.from(new Set(str.trim().slice(1, -1).split(/` `/)));
  const invalidTags = tags.filter(tag => !validTags.includes(tag));

  if (invalidTags.length) {
 5  src/2048 Tiles Slide/index.js 
@@ -1,10 +1,7 @@
const leftSlide = row => {
  const regex = /(?!0)(\d+),(?:0,)*\1/g;
  const replaced = row.join().replace(regex, (_, g1) => g1 * 2);
  const arr = replaced
    .split(',')
    .map(Number)
    .filter(Boolean);
  const arr = replaced.split(',').map(Number).filter(Boolean);

  return arr.concat(Array.from({ length: row.length - arr.length }).fill(0));
};
 6  src/Capitalize the First Letter of Each Word/index.js 
@@ -1,9 +1,5 @@
const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1);

const makeTitle = str =>
  str
    .split(' ')
    .map(capitalize)
    .join(' ');
const makeTitle = str => str.split(' ').map(capitalize).join(' ');

export default makeTitle;
 6  src/Date Format/index.js 
@@ -1,7 +1,3 @@
const formatDate = str =>
  str
    .split('/')
    .reverse()
    .join('');
const formatDate = str => str.split('/').reverse().join('');

export default formatDate;
 7  src/Decimal And Binary Palindromes/index.js 
@@ -1,9 +1,4 @@
const isPalindrome = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');
const isPalindrome = str => str === str.split('').reverse().join('');

const palindromeType = num => {
  const isDecimalPalindrome = isPalindrome(String(num));
 6  src/Farthest Hamming Anagrams/index.js 
@@ -1,8 +1,4 @@
const sortString = str =>
  str
    .split('')
    .sort()
    .join('');
const sortString = str => str.split('').sort().join('');

const isAnagram = (str1, str2) =>
  sortString(str1.toLowerCase()) === sortString(str2.toLowerCase());
 6  src/RGB to Hex Color Converter/index.js 
@@ -1,11 +1,7 @@
const rgbToHex = str => {
  const hex = str
    .match(/\d+/g)
    .map(channel =>
      Number(channel)
        .toString(16)
        .padStart(2, '0'),
    )
    .map(channel => Number(channel).toString(16).padStart(2, '0'))
    .join('');

  return `#${hex}`;
 5  src/Recomposing Strings/index.js 
@@ -1,7 +1,4 @@
const reverse = str =>
  Array.from(str)
    .reverse()
    .join('');
const reverse = str => Array.from(str).reverse().join('');

const recompose = str =>
  str
 7  src/Reverse and Capitalize/index.js 
@@ -1,8 +1,3 @@
const reverseCapitalize = str =>
  str
    .split('')
    .reverse()
    .join('')
    .toUpperCase();
const reverseCapitalize = str => str.split('').reverse().join('').toUpperCase();

export default reverseCapitalize;
 4  src/ToString Hooking/index.js 
@@ -1,7 +1,5 @@
function toString() {
  return Array.from(this)
    .reverse()
    .join('');
  return Array.from(this).reverse().join('');
}

export default toString;
  2  src/Truthy or Falsy/index.test.js 
@@ -13,5 +13,5 @@ test('isTruthy', () => {
  expect(isTruthy(false)).toBe(0);
  expect(isTruthy('false')).toBe(1);
  expect(isTruthy(undefined)).toBe(0);
  expect(isTruthy(function() {})).toBe(1); // eslint-disable-line func-names
  expect(isTruthy(function () {})).toBe(1); // eslint-disable-line func-names
});
  4  src/Yahtzee Score Calculator/index.js 
@@ -18,9 +18,7 @@ const turnScore = (dice, turn) => {
    return freqMap.length === 2 && freqMap.some(([, freq]) => freq === 3) * 25;
  }

  const uniqueSorted = Array.from(new Set(dice))
    .sort()
    .join('');
  const uniqueSorted = Array.from(new Set(dice)).sort().join('');

  if (turn <= 10) return /1234|2345|3456/.test(uniqueSorted) * 30;
  if (turn <= 11) return /12345|23456/.test(uniqueSorted) * 40;