// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


const productOfArray = function (arr) {
    if (arr.length === 0) return 1;
    return arr.pop() * productOfArray(arr);
}
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

/*
The function first checks base case if arr is empty or not if it is return 1.
if not then it recursivly call itself. 
first it pop the last number from the array using pop() method and then it multiply with arr.

example productOfArray(3)

first call : productOfArray([1,2,3])
its checks the length is not 0 so we proceed to arr.pop() and 3 return
3 * productOfArray([1,2])

second call : productOfArray([1,2])
its checks the length is not 0 so we proceed to arr.pop() and 2 return
2 * productOfArray([1])

third call : productOfArray([1])
its checks the length is not 0 so we proceed to arr.pop() and 1 return
1 * productOfArray([])

fourth call: productOfArray([])
so base case reached because array is empty
so it return 1

now Backtracking and multiplying
fourth call : returns 1
third call: 1 * 1 = 1;
second call:  2 * 1 = 2;
first call : 3 * 2 = 6

*/