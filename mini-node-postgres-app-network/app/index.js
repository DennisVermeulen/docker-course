import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Zorg dat de tabel er is (handig als db-init niet werd uitgevoerd)
pool.query(`
  CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    ts TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );
`).then(() => {
  console.log("Tabel 'visits' is gegarandeerd aanwezig.");
}).catch(err => {
  console.error("Kon tabel 'visits' niet aanmaken:", err);
  process.exit(1);
});

// Root: voeg visit toe + tel op
app.get("/", async (_req, res) => {
  try {
    const insertRes = await pool.query(
      "INSERT INTO visits DEFAULT VALUES RETURNING id, ts"
    );
    const countRes = await pool.query("SELECT COUNT(*) AS total FROM visits");
    res.json({
      ok: true,
      visit: insertRes.rows[0],
      totalVisits: Number(countRes.rows[0].total),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

// Haal laatste 100 visits op
app.get("/visits", async (_req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, ts FROM visits ORDER BY id DESC LIMIT 100"
    );
    res.json({ ok: true, visits: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

app.listen(port, () =>
  console.log(`API luistert op http://localhost:${port}`)
);
