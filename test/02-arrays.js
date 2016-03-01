"use strict";

import {expect} from 'chai';

import cyclicRotation from '../02-arrays/cyclic-rotation/code';

describe('Lesson 02 - arrays', function () {

    describe('Cyclic Rotation', function () {
        it('works for the examples in the exercise specification', function () {
            expect(cyclicRotation([3, 8, 9, 7, 6], 3)).to.deep.equal([9, 7, 6, 3, 8]);
        });

        it('rotating an array a single time rotates in the correct direction', function () {
            expect(cyclicRotation([3, 8, 9, 7, 6], 1)).to.deep.equal([6, 3, 8, 9, 7]);
        });

        it('rotating an array as many times as it contains elements returns the original array', function () {
            expect(cyclicRotation([3, 8, 9, 7, 6], 5)).to.deep.equal([3, 8, 9, 7, 6]);
        });

        it('rotating an array 0 times returns the original array', function () {
            expect(cyclicRotation([3, 8, 9, 7, 6], 0)).to.deep.equal([3, 8, 9, 7, 6]);
        });

        it('rotating an array more often than it contains elements works correctly', function () {
            expect(cyclicRotation([3, 8, 9, 7, 6], 6)).to.deep.equal([6, 3, 8, 9, 7]);
        });

    });
});
