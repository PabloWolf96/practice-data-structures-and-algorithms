// time O(mn) space O(n)
var groupAnagrams = function (strs) {
  let hashMap = new Map();
  for (let str of strs) {
    let count = Array(26).fill(0);
    for (let char of str) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
    }
    const key = JSON.stringify(count);
    let prevValue = hashMap.get(key);
    if (prevValue) {
      prevValue.push(str);
      hashMap.set(key, prevValue);
    } else {
      hashMap.set(key, [str]);
    }
  }

  return [...hashMap.values()];
};
