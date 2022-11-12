/*
2032. Two Out of Three

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.
Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let tmp = [];
  for (let i = 0; i < nums1.length; i++) {
    if (
      !tmp.includes(nums1[i]) &&
      (nums2.includes(nums1[i]) || nums3.includes(nums1[i]))
    ) {
      tmp.push(nums1[i]);
      console.log(tmp);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (
      !tmp.includes(nums2[i]) &&
      (nums1.includes(nums2[i]) || nums3.includes(nums2[i]))
    ) {
      tmp.push(nums2[i]);
      console.log(tmp);
    }
  }
  return tmp;
};

let nums1 = [3, 1],
  nums2 = [2, 3],
  nums3 = [1, 2];
console.log(twoOutOfThree(nums1, nums2, nums3));
