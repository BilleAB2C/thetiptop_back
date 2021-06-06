let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let apiRouter = require("../apiRouter").router;
let config = require("../config/config");
let token;

var expect = require("chai").expect;
var should = require("should"),
  assert = require("assert"),
  request = require("supertest")(`${process.env.URL}:3000`),
  superagent = require("superagent");

  /**
   * test with DB
   */

//describe("User Logged", function () {
/*   it("should return status OK (200)", function (done) {
    request
      .post(`${config.rootAPI}user/login`)
      .type("form")
      .send({ email: "sequelize3@yopmail.com", password: "@roose509" })
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        token = res.body.token;
        assert.ok(res);
        assert.ok(res.body);
        assert.ok(res.status, 200);
        res.body.should.have.property("token");
        done();
      });
  });
 */
  /**
   * Test the Get Route
   */
/*   describe("GET all TICKETS for the User", () => {
    it("should GET all tickets", (done) => {
      request
        .get(`${config.rootAPI}user/tickets`)
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          assert(token !== undefined, "missing TOKEN");
          assert.ok(res.status, 200);
          assert(Array.isArray([]), "empty arrays or full arrays");
          done();
        });
    });

    it("It should NOT GET all TICKETS for the User", (done) => {
      request.get(`${config.rootAPI}user/tickets`).end((err, response) => {
        if (err) {
          throw err;
        }

        assert.ok(response.text, "missing parameters");
        assert.ok(response.status, 400);
        done();
      });
    });
  }); */
//});

// basic test 

var sum = require('./md5');
var expect = require('chai').expect;

describe('#sum()', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(sum()).to.equal(0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })
    
    it('should return argument when only one argument is passed', function() {
      expect(sum(5)).to.equal(5)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        sum(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })
  
})