The original instructions can be found at https://codility.com/programmers/task/perm_missing_elem/

## Exercise

Given an array of length N that contains integers in the range [1..(N + 1)] where each integer can not appear more than once.

That means that one element is missing from that array- find that element.

## Deliverable

Write a function:

    function solution(A);

that returns that element.

## Examples

given an array A:

    A = [2, 3, 1, 5]

the function should return `4`.

## Assumptions

- N is an integer within from `0` to `100,000` (inclusive)
- all elements in the array are distinct (they appear only once)
- each element in the array is an integer from `1` to `N+1` (inclusive).

## Complexity

- expected worst-case time complexity is O(N);
- expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
