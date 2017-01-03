import {expect} from "chai";
import {api as server} from "../../../app/app";
import * as supertest from "supertest";
import {logger} from "../../../app/helper/logger";
import * as sinon from "sinon";


describe('Article route controller', () => {

    let sandbox = sinon.sandbox.create();
    let logInfoStub: sinon.SinonStub;

    beforeEach(() => {
        logInfoStub = sandbox.stub(logger, 'info');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return object', (done) => {
        supertest(server)
            .get('/article')
            .end((err: any, response: supertest.Response) => {
                if (err) {
                    done(err);
                }
                else {
                    expect(response.status).to.equal(200);
                    expect(response.body).to.be.an('object');
                    done();
                }
            });
    });
});