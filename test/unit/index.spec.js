let Math = require("../../myapp/Math");

describe("My calculator class", () => {
  let totalSum = 0;
  // setup
  beforeAll(() => {
    console.log("BEFORE ALL");
  });

  beforeEach(() => {
    totalSum = 0;
    console.log("BEFORE EACH");
  });

  // tear down
  afterAll(() => {
    console.log("AFTER ALL");
  });
  afterEach(() => {
    console.log("AFTER EACH");
  });
  test("should test sum method", () => {
    expect(Math.sum(2, 3)).toBe(5);
    expect(Math.sum(-1, -1)).toBe(-2);
    expect(Math.sum()).toBe("Please enter numbers");
    expect(Math.sum("a", "b")).toBe("Please enter numbers");
  });

  xtest("should test square method", () => {
    expect(Math.square(2)).toBe(4);
    expect(Math.square(0)).toBe(0);
    expect(Math.square(-5)).toBe(25);
    expect(Math.square()).toBe("Please enter a number");
    expect(Math.square(Infinity)).toBe(Infinity);
    expect(Math.square(2, 9)).toBe(4);
  });

  test("adds total ", () => {
    let total = Math.sum(2, 3);
    totalSum = totalSum + total;
    expect(totalSum).toBe(5);
  });

  test("adds total again ", () => {
    let total = Math.sum(5, 3);
    totalSum = totalSum + total;
    expect(totalSum).toBe(8);
  });
});
