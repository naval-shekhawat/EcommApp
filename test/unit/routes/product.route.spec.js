const db = require("./../../../model");
const request = require("supertest");
const app = require("./../../../app");

const api_v1_endpoint = "/ecomm/api/v1/products";

describe("Product routes", () => {
  it("should get all products", async () => {
    const res = await request(app).get(api_v1_endpoint);
    // No token passed
    expect(res.statusCode).toEqual(401);
  });

  it("should add new product", async () => {
    const res = await request(app).post(api_v1_endpoint).send({
      name: "JBL Speaker",
      price: 5000,
      categoryId: 2,
    });

    expect(res.statusCode).toEqual(201);
  });
});
