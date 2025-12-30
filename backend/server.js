import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

console.log("DB_USER:", process.env.DB_USER);

app.get("/", (req, res) => {
  res.send("Pastebin Lite backend is running");
});

app.post("/api/pastes", async (req, res) => {
  const { content, ttl_seconds, max_views } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content required" });
  }

  const id = nanoid(8);

  let expiresAt = null;
  if (ttl_seconds) {
    expiresAt = new Date(Date.now() + ttl_seconds * 1000);
  }

  await pool.query(
    `INSERT INTO pastes (id, content, expires_at, max_views)
     VALUES (?, ?, ?, ?)`,
    [id, content, expiresAt, max_views || null]
  );

  res.json({
    id,
    url: `${process.env.BASE_URL}/p/${id}`
  });
});


function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


app.get("/p/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM pastes WHERE id = ?",
      [id]
    );

    if (!rows.length) {
      return res.status(404).send("Paste not found");
    }

    const paste = rows[0];

    // Check expiry
    if (paste.expires_at && new Date(paste.expires_at) < new Date()) {
      return res.status(404).send("Paste expired");
    }

    // Check max views
    if (paste.max_views && paste.views >= paste.max_views) {
      return res.status(404).send("View limit exceeded");
    }

    // Count view
    await pool.query(
      "UPDATE pastes SET views = views + 1 WHERE id = ?",
      [id]
    );

    // SAFE HTML rendering (no script execution)
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Paste</title>
        </head>
        <body>
          <pre>${escapeHtml(paste.content)}</pre>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});