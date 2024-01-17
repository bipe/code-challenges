# My solution in python:
# Memory usage:   bad (above 36% of py submissions)
# Runtime:        good (above 86% of py submissions)
# Time complex.:  O(n) - Traverses half array
# Space complex.: O(1) - Shuffle inplace, without more arrays

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        j = 1
        for i in range(n):
            nums.insert(j, nums.pop(i+n))
            j += 2
        
        return nums
