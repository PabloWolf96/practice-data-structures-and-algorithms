// time O(n) space O(n)
var longestConsecutive = function (nums) {
  let hashSet = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    let length = 0;
    if (!hashSet.has(num - 1)) {
      while (hashSet.has(length + num)) {
        length++;
      }
    }
    if (length > longest) {
      longest = length;
    }
  }
  return longest;
};
