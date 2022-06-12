// time O(n) space O(n)
var topKFrequent = function (nums, k) {
  let hashMap = new Map();
  let bucket = Array(nums.length);
  let result = [];
  for (let num of nums) {
    let val = hashMap.get(num) + 1 || 1;
    hashMap.set(num, val);
  }
  for (let [key, val] of hashMap.entries()) {
    bucket[val] = (bucket[val] || new Set()).add(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i] !== undefined) {
      result.push(...bucket[i]);
    }
    if (result.length >= k) {
      return result;
    }
  }
};
