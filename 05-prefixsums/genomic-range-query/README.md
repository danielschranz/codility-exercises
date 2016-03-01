The original instructions can be found on https://codility.com/programmers/task/genomic_range_query/

## Exercise

For a given a string composed of the letters A, C, G and T (which represents a DNA sequence) and a set of ranges you have to return the lowest impact factor in each of those ranges.

Each nucleotide is associated with a specific impact factor:

    A => 1
    C => 2
    G => 3
    T => 4

Each query is given via entries in two arrays: P contains a list of the starting indices into the sequence and Q the ending indices (both inclusive).

An example:

    S = "CAGCCTA"
    P = [2, 5, 0]
    Q = [4, 5, 6]

As a result we expect `[2, 4, 1]`

Which is determined as follows:
The first query (2 to 4) results in the substring `GCC` so the impact factors are 3, 2 and 2 and therefore the answer is 2
The second query (5 to 5) results in `T` so the answer is 4.
The last query (0 to 6) contains the whole string and with that the nucleotide A which results in an impact factor of 1.

## Deliverable

Write a function:

    function solution(S, P, Q);

that returns an array of integers representing the answers as described above.

## Assumptions

The DNA sequence is a non-empty string of 1 to 100,000 characters and will only contain the letters A, C, G or T
The number of queries to process is 1 to 50,000
The queries will only contain valid indices into the DNA sequence and the start index is always smaller or equal to the end index

## Complexity
expected worst-case time complexity is O(N+M);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
