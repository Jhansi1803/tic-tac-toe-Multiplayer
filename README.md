# 🎮 Tic Tac Toe Multiplayer (Nakama + React)

## 📌 Overview

This project is a real-time multiplayer Tic Tac Toe game built using:

* **Frontend:** ReactJS
* **Backend:** Nakama (Heroic Labs)
* **Database:** CockroachDB
* **Communication:** WebSockets (real-time)

The application demonstrates multiplayer game state synchronization using Nakama’s match handler.

---

## 🚀 Features

* Real-time multiplayer architecture
* WebSocket-based communication
* Match creation and joining
* Game state management (board + turns)
* Backend game loop using Nakama match handler
* Dockerized backend setup

---

## 🏗️ Architecture

```
React Frontend  --->  Nakama Server  ---> CockroachDB
        |                  |
        |------ WebSocket--|
```

* Frontend connects via Nakama JS client
* Backend manages game state in `match.js`
* Updates are broadcast to all connected players

---

## 📂 Project Structure

```
tic-tac-toe-multiplayer/
│
├── backend/
│   ├── docker-compose.yml
│   └── modules/
│       └── match.js
│
└── frontend/
    └── src/
        └── App.js
```

---

## ⚙️ Setup Instructions

### 🔹 Backend (Nakama + DB)

```bash
cd backend
docker compose up --build
```

Ensure ports are running:

* 7350 → API
* 7351 → Console

---

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

Open:

```
http://localhost:3000
```

---

## 🎮 How It Works

1. User connects using Nakama client
2. A match is created or joined
3. Players send moves (grid clicks)
4. Backend (`match.js`) updates game state
5. Updated state is broadcast to all players

---

## 🧠 Backend Logic (match.js)

* `matchInit` → Initializes board
* `matchLoop` → Handles moves
* `broadcastMessage` → Syncs state

---

## ⚠️ Known Limitations

* Match synchronization across multiple tabs may require improved match-sharing logic
* No win/draw detection implemented
* No player identity or turn enforcement UI
* Basic UI (focus is backend + realtime architecture)

---

## 🔮 Future Improvements

* Add winner detection
* Player roles (X / O)
* Game reset functionality
* Better UI/UX
* Matchmaking instead of fixed match

---

## 📚 Learnings

* Real-time communication using WebSockets
* Nakama match lifecycle
* Multiplayer game state management
* Docker-based backend setup

---

## 👨‍💻 Author

* Developed as part of a technical assessment
* Focused on backend integration and real-time systems
