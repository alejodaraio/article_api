import {expect} from "chai";
import {settings} from '../../../app/config/config';

describe('Config Test', () =>{

    it('Should be an object', () => {
        expect(settings).to.be.an('object');
    });
});