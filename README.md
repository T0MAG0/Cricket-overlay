# 🏏 Cricket Overlay System

A real-time cricket scoring overlay with a mobile-friendly control panel.
Designed for live matches, streaming, or backyard cricket setups.

---

## ✨ Features

* Live scoreboard overlay (runs, wickets, batter, bowler)
* Mobile-friendly control panel
* Two scoring modes:

  * Runs + Wickets
  * Runs only
* Wicket logic:

  * Reset runs OR subtract 5 runs
* Milestone events:

  * 50 (half-century)
  * 100 (century)
  * Duck (out on 0)
* Sound effects + visual popups
* Works with OBS or standalone in browser
* Runs locally or over network (great with Tailscale)

---

## 🚀 Getting Started

### 1. Clone the repo

```
git clone https://github.com/T0MAG0/Cricket-overlay.git
cd cricket-overlay
```

### 2. Install dependencies

```
npm install
```

### 3. Start the server

```
node server.js
```

### 4. Open in browser

Overlay:

```
http://localhost:3000/index.html
```

Control panel:

```
http://localhost:3000/control.html
```

---

## 📱 Usage

* Use **control.html** on your phone to update:

  * Runs
  * Wickets
  * Batter name
  * Bowler name
  * Mode

* The **overlay updates live** on `index.html`

---

## 🎯 Milestones

The overlay automatically detects:

* 50 runs → plays sound + shows “50”
* 100 runs → plays sound + shows “100”
* Duck (out on 0) → plays sound + shows duck icon

Works even if you jump past values (e.g. 49 → 55).

---

## 📁 Media Files

Place sounds and images in:

```
/media/
```

Example:

```
media/50.mp3
media/100.mp3
media/duck.mp3
media/50.png
media/100.png
media/duck.png
```

---

## ⚙️ Customisation

You can modify:

* `index.html` → layout and design
* `overlay.js` → animations and logic
* `control.html` → scoring UI
* `server.js` → backend logic

---

## 📡 Using with OBS

1. Add a **Browser Source**
2. URL:

```
http://YOUR-SERVER-IP:3000/index.html
```

3. Set width/height (e.g. 1920x1080)
4. Enable transparency

---

## 🌍 Remote Access

Works great with:

* Tailscale
* Local network (LAN)

Example:

```
http://192.168.x.x:3000
```

---

## 🛠 Tech Stack

* Node.js
* Express
* Vanilla JS (no frameworks)
* HTML/CSS

