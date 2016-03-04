"use strict";

export default function tapeEquilibrium(a) {

    var minDiff = 9999999999;
    var i;
    var left = 0;
    var right = 0;

    for (i=0; i<a.length; i++) {
        right += a[i];
    }

    for (i=0; i<a.length-1; i++) {
        left += a[i];
        right -= a[i];
        if (Math.abs(left-right) < minDiff) {
            minDiff = Math.abs(left-right);

        }
    }

    return minDiff;

};
