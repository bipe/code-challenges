# Best solution:
# Moore Voting Algorithm

# Time complex.:  O(n) - Traverses the array once
# Space complex.: O(1) - Stores only two variables

# More about this solution: https://leetcode.com/problems/majority-element/solutions/3676530/3-method-s-beats-100-c-java-python-beginner-friendly

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        candidate = 0
        
        for num in nums:
            if count == 0:
                candidate = num
            
            if num == candidate:
                count += 1
            else:
                count -= 1
        
        return candidate


#################################################################

# My solution:
# Memory usage:   bad (above 18% of py submissions)
# Runtime:        good (above 76% of py submissions)
# Time complex.:  O(n) - Traverses the array once
# Space complex.: O(1+m) - Stores a dict with m keys where m is the number of distinct elements

import math

class Solution2:
    def majorityElement2(self, nums: List[int]) -> int:
        majority = math.ceil(len(nums)/2) 

        buckets = {}

        for num in nums:
            if buckets.get(num) != None:
                buckets[num] += 1
            else:
                buckets[num] = 1

            if buckets[num] == majority:
                return num

#PS (post submission):
# 1. Surprisingly, using ceil and comparing buckets[num] == majority is a bit faster than doing "majority == len(nums)//2" and comparing "buckets[num] > majority".
# 2. Also surprisingly, "for num in nums" is a bit slower than a "while i<=n:" with unitary increment on i at each iteration. Less readable though.
