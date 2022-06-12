# time O(n) space O(n)
class Solution:
    def topKFrequent(self, nums, k):
        hash_map = {}
        bucket = [[] for i in range(len(nums) + 1)]
        result = []
        for num in nums:
            hash_map[num] = hash_map.get(num, 0) + 1
        for key, val in hash_map.items():
            bucket[val].append(key)
        for i in range(len(bucket) - 1, 0, -1):
            for n in bucket[i]:
                result.append(n)
                if len(result) == k:
                    return result
