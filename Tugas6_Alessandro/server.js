const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let games = [
  { id: 1, title: "Free Fire", genre: "Battle Royale", rating: 8.5 },
  { id: 2, title: "GTA V", genre: "Action", rating: 9.2 }
];

app.get("/games", (req, res) => {
  res.json(games);
});

app.post("/games", (req, res) => {
  const newGame = req.body;
  newGame.id = games.length + 1;
  games.push(newGame);
  res.json({
    message: "Game berhasil ditambahkan",
    data: newGame
  });
});

app.put("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const update = req.body;
  const index = games.findIndex(g => g.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Game tidak ditemukan" });
  }

  if (!update || Object.keys(update).length === 0) {
    return res.status(400).json({ message: "Data pembaruan tidak boleh kosong" });
  }

  games[index] = { ...games[index], ...update };
  res.json({
    message: "Data game berhasil diperbarui",
    data: games[index]
  });
});


app.delete("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = games.findIndex(g => g.id === id);

  if (index !== -1) {
    const deleted = games.splice(index, 1);
    res.json({
      message: "Game berhasil dihapus",
      deleted: deleted[0]
    });
  } else {
    res.status(404).json({ message: "Game tidak ditemukan" });
  }
});

app.get("/", (req, res) => {
  res.send("Server berjalan dengan baik");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
