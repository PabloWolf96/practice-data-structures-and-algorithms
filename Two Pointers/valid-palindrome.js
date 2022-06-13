// time O(n) space O(1)
var isPalindrome = function (str) {
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    let pattern = /[a-zA-Z0-9]/;
    if (!pattern.test(str[start])) {
      start++;
      continue;
    }
    if (!pattern.test(str[end])) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
