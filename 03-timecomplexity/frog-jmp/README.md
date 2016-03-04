The original instructions can be found at https://codility.com/programmers/task/frog_jmp/

## Exercise

Starting from a position X you make jumps if a fixed distance D. The target is to reach a position greater than or equal to Y.

## Deliverable

Write a function:

    function solution(X, Y, D);

that, returns the minimal number of jumps needed to reach a position equal to or greater than Y.

## Examples

    X = 10
    Y = 85
    D = 30

the function should return `3`, because the frog will reach the positions:

    start:          10
    after 1st jump: 40
    after 2nd jump: 70
    after 3rd jump: 100 (which is >=85)

## Assumptions
- X, Y and D are integers within the range [1..1,000,000,000];
- Y is greather than or equal X.

## Complexity

- expected worst-case time complexity is O(1)
- expected worst-case space complexity is O(1)
