let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

let app = require('../script.js'); // Adjust the path as necessary

describe('Application routes', function() {
  describe('GET /', function() {
    it('should return the index.html file', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          done();
        });
    });
  });
});
