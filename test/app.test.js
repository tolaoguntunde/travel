// Dynamically import the necessary ES modules
let chai, app;

before(async function() {
  chai = await import('chai');
  const chaiHttp = await import('chai-http');
  app = await import('../script.js'); // Adjust the path to where your Express app is exported

  chai.use(chaiHttp.default);
});

describe('Application routes', function() {
  describe('GET /', function() {
    it('should return the index.html file', async function() {
      const res = await chai.request(app.default).get('/');
      chai.expect(res).to.have.status(200);
      chai.expect(res).to.be.html;
    });
  });

  // Add your POST test here, adjusting as necessary for async/await syntax
});