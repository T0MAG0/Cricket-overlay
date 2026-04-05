const batterEl = document.getElementById("batsman");
const bowlerEl = document.getElementById("bowler");
const runsEl = document.getElementById("runs-count");
const wicketsEl = document.getElementById("wickets");

async function pollState() {
  try {
    const res = await fetch("/state", { cache: "no-store" });
    const s = await res.json();

    batterEl.textContent = s.batter;
    bowlerEl.textContent = s.bowler;
    runsEl.textContent = s.runs;
    wicketsEl.textContent = s.wickets;

    // Hide wickets visually in runs-only mode
    wicketsEl.parentElement.style.display =
      s.mode === "runs-only" ? "none" : "flex";

  } catch (e) {
    console.error("Overlay update failed", e);
  }
}

setInterval(pollState, 500);
pollState();
