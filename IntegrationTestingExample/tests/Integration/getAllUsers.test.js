const session = require('supertest-session');
const expect = require("chai").expect;
const dataForCreatingUsers = require("../mockJsonFiles/dataForCreatingUsers.json");

describe('Users integration test', () => {
  const app = require('../../bin/www');  // ensure the app is exported in the server file
  const request = session(app);   // initialize the test server.

  it('POST /users returns 200 after adding it to the DB', (done) => {
    dataForCreatingUsers.email = `akshayda${Math.random()}@gmail.com`;
    request
      .post('/users')
      .send(dataForCreatingUsers) // make POST request to this route
      .expect(200) // assertion for the status code
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.emailAddress).to.equal(dataForCreatingUsers.email); // other assertions about the computation logic can go here
        return done();
      });
  });
});
