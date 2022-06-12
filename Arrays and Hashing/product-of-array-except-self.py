class Solution:
    def productExceptSelf(self, nums):
        prefix = 1
        postfix = 1
        result = []
        for i in range(len(nums)):
            result.append(prefix)
            prefix *= nums[i]
        for i in range(len(nums) - 1, -1, -1):
            result[i] *= postfix
            postfix *= nums[i]
        return result
