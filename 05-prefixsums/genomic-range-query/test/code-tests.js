"use strict";

import * as _ from 'lodash';
import {expect} from 'chai';

import {solution} from '../lib/code';

describe('The code', function () {

    it('works for the given example', function () {
        const s = "CAGCCTA";
        const p = [2,5,0];
        const q = [4,5,6];

        expect(solution(s,p,q)).to.deep.equal([2,4,1]);
    });

});
