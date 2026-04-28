const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "engine alive" });
});

app.get("/api/jobs", (req, res) => {
  res.json({ status: "ok", message: "jobs endpoint alive" });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Looney Bin Engine running on port ${PORT}`);
});
