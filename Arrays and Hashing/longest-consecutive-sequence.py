# time O(n) space O(n)
class Solution:
    def longestConsecutive(self, nums):
        hash_set = set(nums)
        longest = 0
        for num in nums:
            if num - 1 not in hash_set:
                length = 0
                while(length + num) in hash_set:
                    length += 1
                if length > longest:
                    longest = length
        return longest
