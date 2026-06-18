const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(() => console.log("✅ PostgreSQL Connected"))
  .catch(err => console.error("❌ Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Backend Running");
});


// 👇 PASTE THE NEW CODE HERE
app.post("/posts", async (req, res) => {
  try {
    const { content, scheduled_date, scheduled_time } = req.body;

    const result = await pool.query(
      `INSERT INTO posts
      (content, scheduled_date, scheduled_time)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [content, scheduled_date, scheduled_time]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create post"
    });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch posts",
    });
  }
});
// 👆 END HERE


app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});