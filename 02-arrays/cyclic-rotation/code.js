"use strict";

export default function cyclicRotation(a, times) {
    var result = [];

    var shift = (a.length-times) % a.length;
    if (shift<0) { shift += a.length; }

    for (var i=0; i<a.length; i++) {
        result.push(a[(i + shift) % a.length]);
    }

    return result;
};
