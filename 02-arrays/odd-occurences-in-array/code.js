"use strict";

export default function oddOccurrences(a) {

    var result = 0;

    for (var i=0; i<a.length; i++) {
        result = result ^ a[i];
    }

    return result;

};
