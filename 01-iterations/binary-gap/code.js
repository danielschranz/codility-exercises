"use strict";

export default function binaryGap(N) {
    var binary = N.toString(2);

    var result = 0;
    var temp = 0;

    for (var i=binary.indexOf("1"); i< binary.length; i++) {
        if (binary[i]=="1") {
            if (temp>result) {
                result = temp;
            }
            temp = 0;
        } else {
            temp++;
        }
    }

    return result;
};
