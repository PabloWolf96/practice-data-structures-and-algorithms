class Solution:
    def containsDuplicate(self, nums):
        numSet = set(nums)
        return len(nums) != len(numSet)
