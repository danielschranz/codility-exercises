"use strict";

import {expect} from 'chai';

import permCheck from '../04-countingelements/perm-check/code';
import frogJmp from '../03-timecomplexity/frog-jmp/code';
import permMissingElement from '../03-timecomplexity/perm-missing-element/code';

describe('Lesson 04 - counting elements', function () {

    describe('Perm check', function () {

        it('works for the examples in the exercise specification', function () {
            expect(permCheck([4, 1, 3])).to.equal(0);
            expect(permCheck([4, 1, 3, 2])).to.equal(1);
        });

        it('returns 1 for an empty array', function () {
            expect(permCheck([])).to.equal(1);
        });

        it('returns 0 if the array contains duplicates', function () {
            expect(permCheck([1, 1, 2, 3])).to.equal(0);
        });

        it('returns 0 for if the array contains an element>N', function () {
            expect(permCheck([4, 1, 2, 5])).to.equal(0);
        });
    });

    xdescribe('Tape equilibrium', function () {
        it('works for the examples in the exercise specification', function () {
            expect(tapeEquilibrium([3, 1, 2, 4, 3])).to.equal(1);
        });

        it('no elements in one half are not considered a solution', function () {
            expect(tapeEquilibrium([-5, 1, 2, 2])).to.equal(4); // and not 0 if we would consider all elements to be on the same side and the other half have the value 0
        });
    });

    xdescribe('PermMissingElement', function () {
        it('works for the examples in the exercise specification', function () {
            expect(permMissingElement([2, 3, 1, 5])).to.equal(4);
        });

    });
});
