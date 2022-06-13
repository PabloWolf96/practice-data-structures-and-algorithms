# time O(n) space(1)
class Solution:
    def twoSum(self, numbers, target):
        start, end = 0, len(numbers) - 1
        while start < end:
            current_sum = numbers[start] + numbers[end]
            if current_sum == target:
                return [start + 1, end + 1]
            if current_sum < target:
                start += 1
            if current_sum > target:
                end -= 1
        return []
