const request = require("supertest");
const expect = require("expect");
var app = require("./server").app;

//using mocha w/ supertest
describe("Server", () => {
  describe("GET /", () => {
    it("should return hello world response", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect("Hello World")
        .end(done);
    });
  });
  describe("GET /users", () => {
    it("should give back a 200, my user object exists", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: "Jake",
            age: 27
          });
        })
        .end(done);
    });
  });
});
