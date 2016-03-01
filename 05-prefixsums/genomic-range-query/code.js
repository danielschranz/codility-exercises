"use strict";

export default function genomicRangeQuery(seq, starts, ends) {

    // these sets will contain a running count how often that element appeared in all the indices up to the
    // current one - the indices are offset by one so I can always start with a count of 0
    var sets = {
        A: [0],
        C: [0],
        G: [0]
    };
    var result=[];
    var a=0;
    var c=0;
    var g=0;

    // create the running count - O(n)
    for (var i=0; i<seq.length; i++) {
        if (seq[i]=="A") { a++; }
        if (seq[i]=="C") { c++; }
        if (seq[i]=="G") { g++; }
        sets.A.push(a);
        sets.C.push(c);
        sets.G.push(g);
    }

    // if the count on both sides of the interval is different that means a nucleotide of this type exists
    // in between - O(M)
    for (var i=0; i<starts.length; i++) {
        if (sets.A[starts[i]]<sets.A[ends[i]+1]) {
            result.push(1);
            continue;
        }
        if (sets.C[starts[i]]<sets.C[ends[i]+1]) {
            result.push(2);
            continue;
        }
        if (sets.G[starts[i]]<sets.G[ends[i]+1]) {
            result.push(3);
            continue;
        }
        result.push(4);
    }

    return result;
};
