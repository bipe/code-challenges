/*
My solution:
Memory usage:   ok (above 70% of js submissions)
Runtime:        ok (above 60% of js submissions)
Time complex.:  O(n * m) - Being n and m the sizes of the strings.
Space complex.: O(n * m) - Stores a matrix to calculate the LCS
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Initialize with len+1 size so the "out of bounds" have a 0
    let mtx = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0));

    // Bottom up approach:
    for (let i = text1.length-1; i>=0; i--){ // the -1 aims to prevent "out of bounds" on diagonal

        for (let j = text2.length-1; j>=0; j--) {
            if (text1[i] == text2[j]) {
                // down-right diagonal + 1:
                mtx[i][j] = mtx[i+1][j+1] + 1; // here, this would break without the -1
            }
            else {
                // the max between the down and right cells
                mtx[i][j] = Math.max(mtx[i][j+1], mtx[i+1][j]);
            }
        }
    }

    // at the end, the LCS will be at 0,0
    return mtx[0][0];
    
};
