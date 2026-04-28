const express = require("express");
const app = express();

app.use(express.json());

// 🔵 Core test route
app.get("/", (req, res) => {
  res.send("Looney Bin Engine Live");
});

// 🧠 Dossier (Identity System)
app.get("/api/dossier", (req, res) => {
  res.json({
    status: "ok",
    system: "Dossier",
    tiers: ["Initiate", "Advanced", "Apex"],
    message: "Identity system online"
  });
});

// 💰 Vault (Escrow / Financial Layer)
app.get("/api/vault", (req, res) => {
  res.json({
    status: "ok",
    system: "Vault",
    escrow: "inactive-demo-mode",
    message: "Financial layer ready"
  });
});

// 📦 Annex (Proof / Logging System)
app.get("/api/annex", (req, res) => {
  res.json({
    status: "ok",
    system: "Annex",
    logs: [],
    message: "Proof-of-progress layer online"
  });
});

// 🧬 Tier system
app.get("/api/tiers", (req, res) => {
  res.json({
    tiers: [
      { name: "Initiate", color: "Acid Green" },
      { name: "Advanced", color: "Surgical Pink" },
      { name: "Apex", color: "Cyan/White" }
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Looney Bin Engine running on port " + PORT);
});
