// time O(n) space O(n)
var twoSum = function (nums, target) {
  const lookUp = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (lookUp[diff] !== undefined) {
      return [i, lookUp[diff]];
    } else {
      lookUp[nums[i]] = i;
    }
  }
};
