/*
My solution:
Memory usage:   bad (above 30% of js submissions)
Runtime:        ok (above 82% of js submissions)
Time complex.:  O(n) - Traverses the array once only
Space complex.: O(n) - Store the ans array
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [0]
    let offset = 1  // Most significant bit. 1,2,4,8...

    for (let i = 1; i<=n; i++) {
        if (offset * 2 == i) { // check if the most significant bit changed
            offset = i;
        }
        ans[i] = 1 + ans[i - offset]
    }

    return ans;
};
