let promiseFunc = () => {
  return new Promise((resolve, reject) => {
    // resolve("I am a promise");
    reject("I was rejected");
  });
};

describe("Async JS", () => {
  test("test your promise", () => {
    promiseFunc()
      .then((data) => {
        expect(data).toBe("I am a promise");
      })
      .catch((err) => {
        expect(err).toBe("I was rejected");
      });
  });

  test("test your async/await", async () => {
    try {
      let output = await promiseFunc();
      expect(output).toBe("I am a promise");
    } catch (err) {
      expect(err).toBe("I was rejected");
    }
  });
});
