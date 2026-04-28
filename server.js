const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

// basic route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "engine alive" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Looney Bin Engine running on port ${PORT}`);
});
