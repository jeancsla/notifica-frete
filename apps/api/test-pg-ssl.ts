import pg from "pg";

const connectionString = process.env.DATABASE_URL;

console.log("Testing pg connection with SSL object...");

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

try {
  const res = await pool.query("SELECT NOW()");
  console.log("✅ Success with SSL object:", res.rows[0]);
} catch (err: any) {
  console.error("❌ Failed with SSL object:", err.message || err);
} finally {
  await pool.end();
}

console.log("Testing pg connection with SSL string...");
const pool2 = new pg.Pool({
  connectionString:
    connectionString +
    (connectionString?.includes("?") ? "&" : "?") +
    "sslmode=no-verify",
});

try {
  const res = await pool2.query("SELECT NOW()");
  console.log("✅ Success with SSL string:", res.rows[0]);
} catch (err: any) {
  console.error("❌ Failed with SSL string:", err.message || err);
} finally {
  await pool2.end();
}
