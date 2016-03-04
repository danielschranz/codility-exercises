The original instructions can be found at https://codility.com/programmers/task/tape_equilibrium/

## Exercise

Find the minimum absolute difference between two halves of an integer array for all the possible splits that are possible.

## Examples

    A = [3, 1, 2, 4, 3]

for this array we have 4 possible splits:

    at index 1 => difference = |3 − 10| = 7
    at index 2 => difference = |4 − 9|  = 5
    at index 3 => difference = |6 − 7|  = 1
    at index 4 => difference = |10 − 3| = 7

which means the result will be 1 for the split at index 3.

## Deliverable

Write a function:

function solution(array);

that returns the value of the only unpaired element in the array.

## Assumptions

- N is an integer from 2 to 100,000 (inclusive)
- each element in the array is an integer between −1,000 and 1,000 (inclusive).

## Complexity

- expected worst-case time complexity is O(N);
- expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
