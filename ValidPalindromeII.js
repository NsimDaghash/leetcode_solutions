//680. Valid Palindrome II
/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const is = (left, right) => {
    for (let i = left; i <= Math.floor((left + right) / 2); i++) {
      if (s[i] !== s[right - (i - left)]) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    const right = s.length - 1 - i
    if (s[i] !== s[right]) {
      return is(i, right - 1) || is(i + 1, right)
    }
  }
  return true
};