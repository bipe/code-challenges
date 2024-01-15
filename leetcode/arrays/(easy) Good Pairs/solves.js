/*
My solution:
Memory usage:   ok (above 65% of js submissions)
Runtime:        ok (above 63% of js submissions)
Time complex.:  O(n²) - Traverses the array twice
Space complex.: O(1) - Doesn't store anything new
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let n_pairs = 0;
    let n = nums.length;

    for (let i = 0; i<n; i++){
        for (let j = i+1; j<n; j++){
            if (nums[i] === nums[j]) {
                n_pairs++
            }
        }
    }
    return n_pairs;
};
