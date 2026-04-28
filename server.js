const express = require("express");

const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "engine alive" });
});

// test API route
app.get("/api/jobs", (req, res) => {
  res.json({ status: "ok", message: "jobs endpoint alive" });
});

// port (Render requires this)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Looney Bin Engine running on port ${PORT}`);
});
