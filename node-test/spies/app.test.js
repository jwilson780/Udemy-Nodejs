const expect = require("expect");
const rewire = require("rewire");
var app = rewire("./app.js");
describe("App", () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);
  it("should call the spy correctly", () => {
    var spy = expect.createSpy();
    spy("Jake", 25);
    expect(spy).toHaveBeenCalledWith("Jake", 25);
  });

  it("should call saveUser with the user object", () => {
    var email = "jake@example.com";
    var password = "123abc";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
