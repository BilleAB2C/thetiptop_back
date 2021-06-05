let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let apiRouter = require("../apiRouter").router;
let config = require("../config/config");
let token;

var expect = require("chai").expect;
//var request = require("request");
var should = require("should"),
  assert = require("assert"),
  request = require("supertest")("http://localhost:3000/"),
  superagent = require("superagent");

describe("User Logged", function () {
  it("should return status OK (200)", function (done) {
    request
      .post("api/v1/user/login")
      .type("form")
      .send({ email: "sequelize3@yopmail.com", password: "@roose509" })
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        token = res.body.token
        assert.ok(res);
        assert.ok(res.body);
        assert.ok(res.status, 200);
        res.body.should.have.property("token");
        done();
      });
  });

  /**
   * Test the Get Route
   */
  describe("GET all TICKETS for the User", () => {
    it("should GET all users", (done) => {
      request
        .get("api/v1/user/tickets/")
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          assert.ok(res.status, 200);
          assert(Array.isArray([]), "empty arrays or full arrays");
          done();
        });
    });

    it("It should NOT GET all TICKETS for the User", (done) => {
      request.get("api/v1/user/tickets/").end((err, response) => {
        if (err) {
          response.should.have.status(400);
          response.text.should.be.eq("Unable to fetch tickets");
        }
        done();
      });
    });
  });


});
