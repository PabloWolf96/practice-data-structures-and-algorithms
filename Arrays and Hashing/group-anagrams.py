from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs):
        hash_map = defaultdict(list)
        for str in strs:
            count = [0] * 26
            for char in str:
                index = ord(char) - ord("a")
                count[index] += 1
            hash_map[tuple(count)].append(str)
        return hash_map.values()
