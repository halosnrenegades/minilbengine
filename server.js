const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

// Routes
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "engine alive" });
});

app.get("/api/jobs", (req, res) => {
  res.json({ status: "ok", message: "jobs endpoint alive" });
});

// Port
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Looney Bin Engine running on port ${PORT}`);
});
