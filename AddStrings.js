/*
415. Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function(num1, num2) {
    let carry = 0;
    let len1 = num1.length;
    let len2 = num2.length;
    let sum = "";
    while (len1 > 0 || len2 > 0) {
        let tmp = (+num1[len1 - 1] || 0) + (+num2[len2 - 1] || 0) + carry;
        sum = tmp % 10 + "" + sum;
        carry = Math.floor(tmp / 10);
        len1--;
        len2--
    }
    if (carry) sum = '1' + sum;
    return sum;  
};