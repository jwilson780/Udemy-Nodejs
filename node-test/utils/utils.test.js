const utils = require("./utils");
const expect = require("expect");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      var res = utils.add(33, 11);
      expect(res)
        .toBe(44)
        .toBeA("number");
    });

    it("should async add 2 numbers", done => {
      utils.asyncAdd(4, 3, sum => {
        expect(sum)
          .toBe(7)
          .toBeA("number");
        done();
      });
    });
  });
  describe("#square", () => {
    it("should async square a number", done => {
      utils.asyncSquare(5, square => {
        expect(square)
          .toBe(25)
          .toBeA("number");
        done();
      });
    });

    it("should square a number", () => {
      var res = utils.square(10);
      expect(res)
        .toBe(100)
        .toBeA("number");
    });
  });

  it("should verify first and last names are set", () => {
    var user = {
      location: "Frostburg",
      age: 27
    };
    var res = utils.splitName(user, "Zeb Pike");
    //expect(res).toEqual(user);
    expect(res).toInclude({
      firstName: "Zeb",
      lastName: "Pike"
    });
  });

  it("should expect some values", () => {
    expect(12).toNotBe(23);
    expect({ name: "Jake" }).toEqual({ name: "Jake" });
    expect([2, 3, 4, 5]).toInclude(5);
    expect({
      name: "Jake",
      age: 27,
      location: "Frostburg"
    }).toInclude({
      age: 27
    });
  });
});
