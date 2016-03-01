"use strict";

import {expect} from 'chai';

import binaryGap from '../01-iterations/binary-gap/code';

describe('Lesson 01 - iterations', function () {

    describe('Binary Gap', function () {
        it('works for the examples in the exercise specification', function () {
            expect(binaryGap(9)).to.equal(2); // 1001
            expect(binaryGap(529)).to.equal(4); // 1000010001
            expect(binaryGap(20)).to.equal(1); // 10100
            expect(binaryGap(1049)).to.equal(5); // 10000010001
        });

        it('works for 0', function () {
            expect(binaryGap(0)).to.equal(0); //0
        });

        it('returns zero if 1\'s don\'t have a space between', function () {
            expect(binaryGap(3)).to.equal(0); // 11
        });

        it('ignores a bigger number of trailing zeros because they are not surrounded by 1\'s', function () {
            expect(binaryGap(160)).to.equal(1); // 10100000
        });

        it('returns the maximum value of 0\'s', function () {
            expect(binaryGap(165)).to.equal(2);
        });
    });
});
