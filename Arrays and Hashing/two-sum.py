# time O(n) space O(n)
class Solution:
    def twoSum(self, nums, target):
        hashMap = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in hashMap:
                return [i, hashMap[diff]]
            hashMap[num] = i
