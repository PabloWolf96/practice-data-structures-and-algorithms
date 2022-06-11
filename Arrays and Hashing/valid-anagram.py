# time O(nlogn) space O(1)
class Solution:
    def isAnagram(self, string1, string2):
        return sorted(string1) == sorted(string2)
