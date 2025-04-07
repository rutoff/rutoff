const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve file statis (CSS, gambar, dll)
app.use(express.static(path.join(__dirname, 'public')));

// Route ke halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
