const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Minilbengine:Test1234@minilbengine-db.imotcoy.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

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
