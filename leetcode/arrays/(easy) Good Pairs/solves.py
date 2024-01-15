# My solution in python:
# Memory usage:   bad (above 27% of py submissions)
# Runtime:        good (above 72% of py submissions)
# Time complex.:  O(n²) - Traverses the array twice
# Space complex.: O(1+m) - Stores a dict with m keys where m is the number of distinct elements

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        c=0
        for i in range(0,len(nums)-1):
            for j in range((i+1),len(nums)):
                if nums[i]==nums[j]:
                    c+=1
        return c

#PS (post submission):
# 1. Python for loops are so sad :(
