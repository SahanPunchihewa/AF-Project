/* eslint-disable no-undef */
import request from "supertest";
import app from "../app";
const db = require("../util/testing.db");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

// Get all Admins
describe("Admin API", () => {
	it("GET / --> Get all admins", async () => {
		const response = await request(app).get("/api/admin").set("Accept", "application/json");

		// Check response status is 201
		expect(response.status).toBe(201);

		// Check response is an array
		expect(Array.isArray(response.body)).toBe(true);
	});

	// Create a new Admin

	it("POST / --> create a new admin", async () => {
		const response = await request(app).post("/api/admin/register").set("Accept", "application/json").send({
			name: "Test Admin",
			email: "testadmin@gmail.com",
			password: "123",
		});

		// Check response status is 201
		expect(response.status).toBe(201);

		// Check response is an object
		expect(typeof response.body).toBe("object");

		// Check response object has the required properties
		expect(response.body).toHaveProperty("name");
		expect(response.body).toHaveProperty("email");
		expect(response.body).toHaveProperty("password");

		// Check response object has the required values
		expect(response.body.name).toBe("Test Admin");
	});
});
