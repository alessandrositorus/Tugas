TUGAS 6 - API CRUD GAME FAVORIT
Nama: [Ales Sandro Sitorus	]
NPM: [220810011]

Deskripsi:
Aplikasi backend sederhana menggunakan Node.js dan Express untuk mengelola data game favorit.
Program ini menggunakan konsep REST API dengan metode CRUD (Create, Read, Update, Delete).

Fitur API:
1. GET     /games        → Menampilkan semua data game
2. POST    /games        → Menambah data game baru
3. PUT     /games/:id    → Mengubah data game berdasarkan ID
4. DELETE  /games/:id    → Menghapus data game berdasarkan ID

Cara Menjalankan:
1. Pastikan Node.js sudah terinstal
2. Buka terminal di folder proyek ini
3. Jalankan perintah:
   npm install
4. Setelah selesai, jalankan server dengan:
   node server.js
5. Buka Postman dan akses endpoint:
   http://localhost:3000/games

Contoh Data JSON (untuk POST):
{
  "title": "Valorant",
  "genre": "FPS",
  "rating": 9.1
}

Catatan:
- Data tidak disimpan permanen (akan reset saat server direstart)
- Gunakan Postman untuk mengetes semua endpoint
