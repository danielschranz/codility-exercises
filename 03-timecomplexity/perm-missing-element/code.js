"use strict";

export default function permMissingElement(a) {

    var sum = 0;
    var targetSum = a.length+1;

    for (var i=0; i<a.length; i++) {
        sum+=a[i];
        targetSum+=i+1;
    }

    return targetSum-sum;

};
