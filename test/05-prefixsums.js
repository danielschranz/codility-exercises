"use strict";

import {expect} from 'chai';

import genomicRangeQuery from '../05-prefixsums/genomic-range-query/code';

describe('Lesson 05 - prefix sums', function () {

    describe('Genomic Range Query', function () {
        it('works for the example in the exercise specification', function () {
            const s = "CAGCCTA";
            const p = [2,5,0];
            const q = [4,5,6];

            expect(genomicRangeQuery(s,p,q)).to.deep.equal([2,4,1]);
        });

        it('returns the correct values for the extremes of the input string', function () {
            const s = "CAAAAAAG";
            const p = [0,7];
            const q = [0,7];

            expect(genomicRangeQuery(s,p,q)).to.deep.equal([2,3]);
        });
    });
});
