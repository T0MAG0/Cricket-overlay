const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

let state = {
  batter: "Batter",
  bowler: "Bowler",
  runs: 0,
  wickets: 0,
  mode: "wickets" // "runs-only"
};

// ---- API ----
app.get("/state", (req, res) => {
  res.json(state);
});

app.post("/update", (req, res) => {
  const { batter, bowler, runs, wickets, mode } = req.body;

  if (batter !== undefined) state.batter = batter;
  if (bowler !== undefined) state.bowler = bowler;
  if (runs !== undefined) state.runs = runs;
  if (wickets !== undefined) state.wickets = wickets;
  if (mode !== undefined) state.mode = mode;

  res.json(state);
});

app.post("/add-runs", (req, res) => {
  state.runs += Number(req.body.amount || 0);
  res.json(state);
});

app.post("/wicket", (req, res) => {
  if (state.mode === "runs-only") {
    state.runs = 0;
  } else {
    state.wickets += 1;
    state.runs = Math.max(0, state.runs - 5);
  }
  res.json(state);
});

app.post("/reset", (req, res) => {
  state.runs = 0;
  state.wickets = 0;
  res.json(state);
});

// ---- STATIC FILES ----
app.use(express.static(__dirname));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/control", (_, res) =>
  res.sendFile(path.join(__dirname, "control.html"))
);

app.listen(3000, () =>
  console.log("Overlay server running on http://localhost:3000")
);
