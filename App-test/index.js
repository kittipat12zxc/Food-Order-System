const express = require("express")
const path = require('path');

const app = express();
const PORT = 3000;

// กำหนดให้ Express ใช้ EJS เป็น view engine
app.set('view engine', 'ejs');

// บอกตำแหน่งโฟลเดอร์ views
app.set('views', path.join(__dirname, 'views'));

// สร้าง route เพื่อ render pagetext.ejs
app.get('/', (req, res) => {
  res.render('pagetext', { title: 'My EJS Page', message: 'Hello from Express + EJS!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});