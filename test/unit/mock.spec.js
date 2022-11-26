let checkIfSystemWorking = (n, sendEmail) => {
  let isSystemWorking = false;
  for (let i = 0; i < n; i++) {
    let delivery = sendEmail();
    isSystemWorking = delivery.passed > delivery.failed;
  }

  return isSystemWorking;
};

describe("Mock functions", () => {
  let delivery = {
    passed: 2,
    failed: 3,
  };
  let sendEmail = jest.fn().mockReturnValue(delivery);

  test("first mock example", () => {
    expect(checkIfSystemWorking(5, sendEmail)).toBe(true);
  });
});
