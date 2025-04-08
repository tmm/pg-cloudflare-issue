import { Pool } from "pg";
import { test } from "vitest";

test("default", async () => {
	const pool = new Pool({
		connectionString: "postgresql://postgres:postgres@localhost",
	});
	const result = await pool.query("SELECT $1::text as name", ["cloudflare"]);
	console.log(result.rows[0].name);
});
