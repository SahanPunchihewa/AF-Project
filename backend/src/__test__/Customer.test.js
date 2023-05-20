/* eslint-disable no-undef */
import request from "supertest";
import app from "../app";
const db = require("../util/testing.db");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("Customer API", () => {
	it("GET / --> Get all customers", async () => {
		const response = await request(app).get("/api/customer").set("Accept", "application/json");

		// Check response status is 201
		expect(response.status).toBe(201);

		// Check response is an array
		expect(Array.isArray(response.body)).toBe(true);
	});
});
