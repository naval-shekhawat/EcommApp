const { mockRequest, mockResponse } = require("./../interceptor");
const db = require("./../../../model");
const productController = require("./../../../controller/product.controller");

describe("Product controller", () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let testPayload = {
    name: "Hrx",
    categoryId: 1,
    price: 18000,
  };

  it("should test the create method with payload", async () => {
    const spy = jest.spyOn(db.product, "create").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          resolve(testPayload);
        })
    );

    req.body = testPayload;
    await productController.createProduct(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(testPayload);
  });
});
