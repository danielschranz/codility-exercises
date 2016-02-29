"use strict";

import * as _ from 'lodash';
import {expect} from 'chai';

import {add} from '../lib/code';

describe('The code', function () {

    it('implements a working add function', function () {
        expect(add(5,6)).to.equal(11);
    });

});
