"use strict";

export default function permCheck(a) {

    function swapElements(i, j) {
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    };

    var elements = a.length;
    var i;

    for (i=0; i<elements; i++) {
        var currentElement = a[i];
        while (a[i] != i+1) {

            if (currentElement>elements || //contains element that shouldn't be in the array
                a[currentElement-1]===currentElement) return 0; // this means we have a duplicate

            swapElements(i, currentElement-1);

            currentElement = a[i];
        }
    }

    return 1;

};
