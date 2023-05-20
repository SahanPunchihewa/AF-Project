/* eslint-disable no-undef */
import request from "supertest";
import app from "../app";
const db = require("../util/testing.db");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("Maintenance Team API", () => {
	it("GET / --> Get all maintenance teams", async () => {
		const response = await request(app).get("/api/team").set("Accept", "application/json");

		// Check response status is 201
		expect(response.status).toBe(201);

		// Check response is an array
		expect(Array.isArray(response.body)).toBe(true);
	});

	it("POST / --> Create a new maintenance team", async () => {
		const response = await request(app)
			.post("/api/team")
			.set("Accept", "application/json")
			.send({
				teamName: "Test Team",
				teamLeader: "Test Leader",
				teamMembers: ["Test Member 1", "Test Member 2"],
				teamStatus: "NOT_ASSIGNED",
			});

		// Check response status is 201
		expect(response.status).toBe(201);

		// Check response is an object
		expect(typeof response.body).toBe("object");

		// Check response object has the required properties
		expect(response.body).toHaveProperty("teamName");
		expect(response.body).toHaveProperty("teamLeader");
		expect(response.body).toHaveProperty("teamMembers");
		expect(response.body).toHaveProperty("teamStatus");

		// Check response object has the required values
		expect(response.body.teamName).toBe("Test Team");
	});

	it("GET /:id --> Get a maintenance team by id", async () => {
		const response = await request(app)
			.post("/api/team")
			.set("Accept", "application/json")
			.send({
				teamName: "Test Team",
				teamLeader: "Test Leader",
				teamMembers: ["Test Member 1", "Test Member 2"],
				teamStatus: "NOT_ASSIGNED",
			});

		const id = response.body._id;

		const response2 = await request(app).get(`/api/team/${id}`).set("Accept", "application/json");

		// Check response status is 201
		expect(response2.status).toBe(201);

		// Check response is an object
		expect(typeof response2.body).toBe("object");

		// Check response object has the required properties
		expect(response2.body).toHaveProperty("teamName");
		expect(response2.body).toHaveProperty("teamLeader");
		expect(response2.body).toHaveProperty("teamMembers");
		expect(response2.body).toHaveProperty("teamStatus");

		// Check response object has the required values
		expect(response2.body.teamName).toBe("Test Team");
		expect(response2.body.teamLeader).toBe("Test Leader");
		expect(response2.body.teamMembers).toEqual(["Test Member 1", "Test Member 2"]);
		expect(response2.body.teamStatus).toBe("NOT_ASSIGNED");
	});

	it("PATCH /:id --> Update a maintenance team by id", async () => {
		const response = await request(app)
			.post("/api/team")
			.set("Accept", "application/json")
			.send({
				teamName: "Test Team",
				teamLeader: "Test Leader",
				teamMembers: ["Test Member 1", "Test Member 2"],
				teamStatus: "NOT_ASSIGNED",
			});

		const id = response.body._id;

		const response2 = await request(app)
			.patch(`/api/team/${id}`)
			.set("Accept", "application/json")
			.send({
				teamName: "Test Team 2",
				teamLeader: "Test Leader 2",
				teamMembers: ["Test Member 3", "Test Member 4"],
				teamStatus: "ASSIGNED",
			});

		// Check response status is 201
		expect(response2.status).toBe(201);

		// Check response is an object
		expect(typeof response2.body).toBe("object");

		// Check response object has the required properties
		expect(response2.body).toHaveProperty("teamName");
		expect(response2.body).toHaveProperty("teamLeader");
		expect(response2.body).toHaveProperty("teamMembers");
		expect(response2.body).toHaveProperty("teamStatus");

		// Check response object has the required values
		expect(response2.body.teamName).toBe("Test Team 2");
		expect(response2.body.teamLeader).toBe("Test Leader 2");
		expect(response2.body.teamMembers).toEqual(["Test Member 3", "Test Member 4"]);
		expect(response2.body.teamStatus).toBe("ASSIGNED");
	});

	it("DELETE /:id --> Delete a maintenance team by id", async () => {
		const response = await request(app)
			.post("/api/team")
			.set("Accept", "application/json")
			.send({
				teamName: "Test Team",
				teamLeader: "Test Leader",
				teamMembers: ["Test Member 1", "Test Member 2"],
				teamStatus: "NOT_ASSIGNED",
			});

		const id = response.body._id;

		const response2 = await request(app).delete(`/api/team/${id}`).set("Accept", "application/json");

		// Check response status is 201
		expect(response2.status).toBe(201);

		// Check response is an object
		expect(typeof response2.body).toBe("object");

		// Check response object has the required properties
		expect(response2.body).toHaveProperty("teamName");
		expect(response2.body).toHaveProperty("teamLeader");
		expect(response2.body).toHaveProperty("teamMembers");
		expect(response2.body).toHaveProperty("teamStatus");

		// Check response object has the required values
		expect(response2.body.teamName).toBe("Test Team");
		expect(response2.body.teamLeader).toBe("Test Leader");
		expect(response2.body.teamMembers).toEqual(["Test Member 1", "Test Member 2"]);
		expect(response2.body.teamStatus).toBe("NOT_ASSIGNED");
	});
});
