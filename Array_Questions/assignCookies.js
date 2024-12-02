// 455. Assign Cookies

// Assume you are an awesome parent and want to give your children some cookies.But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j].If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.Your goal is to maximize the number of your content children and output the maximum number.



//     Example 1:

// Input: g = [1, 2, 3], s = [1, 1]
// Output: 1
// Explanation: You have 3 children and 2 cookies.The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:

// Input: g = [1, 2], s = [1, 2, 3]
// Output: 2
// Explanation: You have 2 children and 3 cookies.The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
//     You need to output 2.


// Constraints:

// 1 <= g.length <= 3 * 104
// 0 <= s.length <= 3 * 104
// 1 <= g[i], s[j] <= 231 - 1


// Note: This question is the same as 2410: Maximum Matching of Players With Trainers.

// Two Pointer Approach

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // 1. The g array is sorted in ascending order so that we can iterate through the children in the order of their greed factors, from least to most greedy.
    // 2. The s array is sorted in ascending order so that we can consider the smallest cookies first.
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    // contentChildCount: A counter to track how many children are satisfied.
    // pointerG: A pointer to traverse the g array (children's greed).
    // pointerS: A pointer to traverse the s array (cookie sizes).
    let contentChildCount = 0;
    let pointerG = 0;
    let pointerS = 0;

    //if the current cookie satisfies the current child greed
    // The while loop continues until either:
    // All children have been considered (pointerG < g.length), or
    // All cookies have been used (pointerS < s.length).
    while (pointerG < g.length && pointerS < s.length) {

        // If the current cookie(s[pointerS]) is large enough to satisfy the current child's greed (g[pointerG]):
        // Increment contentChildCount(the child is satisfied).
        // Move to the next child(pointerG++).
        // Regardless of whether the cookie satisfies the child or not, move to the next cookie(pointerS++).
        if (s[pointerS] >= g[pointerG]) {
            contentChildCount++;
            pointerG++
        }
        pointerS++;
    }
    return contentChildCount;
};
