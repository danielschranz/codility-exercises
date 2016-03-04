"use strict";

import {expect} from 'chai';

import tapeEquilibrium from '../03-timecomplexity/tape-equilibrium/code';
import frogJmp from '../03-timecomplexity/frog-jmp/code';

describe('Lesson 03 - time complexity', function () {

    describe('Frog Jmp', function () {
        it('works for the examples in the exercise specification', function () {
            expect(frogJmp(10, 85, 30)).to.equal(3);
        });

        it('works correctly if you hit the target position exactly', function () {
            expect(frogJmp(10, 70, 30)).to.equal(2);
        });

        it('returns 0 if start and target position are the same', function () {
            expect(frogJmp(10, 10, 30)).to.equal(2);
        });
    });

    describe('Tape equilibrium', function () {
        it('works for the examples in the exercise specification', function () {
            expect(tapeEquilibrium([3, 1, 2, 4, 3])).to.equal(1);
        });

        it('no elements in one half are not considered a solution', function () {
            expect(tapeEquilibrium([-5, 1, 2, 2])).to.equal(4); // and not 0 if we would consider all elements to be on the same side and the other half have the value 0
        });
    });

    xdescribe('PermMissingElement', function () {
        it('works for the examples in the exercise specification', function () {
            expect(tapeEquilibrium([9, 3, 9, 3, 9, 7, 9])).to.equal(7);
        });

        it('works when the last element is the one we \'re looking for', function () {
            expect(tapeEquilibrium([2, 2, 3, 3, 4])).to.equal(4);
        })

    });
});
