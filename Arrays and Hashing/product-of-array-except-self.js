// time O(n) space O(1)
var productExceptSelf = function (nums) {
  let prefix = 1;
  let postfix = 1;
  let result = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
};
