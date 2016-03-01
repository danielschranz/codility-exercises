The original instructions can be found at https://codility.com/programmers/task/binary_gap/

## Exercise
f
Return the length of the longest sequence of 0s that is enclosed by 1s in the binary representation of a given integer (or 0 if there is no binary gap).

## Examples

    9     (1001)            => 2
    529   (1000010001)      => 4 (it contains binary gaps of 4 and 3 but we're only interested in the longest binary gap)
    20    (10100)           => 1.
    15    (1111)            => 0
    1041  (10000010001)     => 5

## Deliverable

Write a function:

function solution(N);

## Assumptions

- N is an integer within the range [1..2,147,483,647].

## Complexity

- expected worst-case time complexity is O(log(N));
- expected worst-case space complexity is O(1).
