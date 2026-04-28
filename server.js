const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mini LB Engine is running");
});

app.get("/api/jobs", (req, res) => {
  res.json({ status: "ok", message: "engine alive" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
