const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 30178;

app.get('/', async (req, res) => {
  try {
    const result = await axios.get('https://dog.ceo/api/breeds/image/random');
    const dogImageUrl = result.data.message;

    res.send(`
      <html>
        <head><title>犬の画像</title></head>
        <body style="text-align:center; font-family:sans-serif;">
          <img src="${dogImageUrl}" alt="犬" style="max-width: 90%; height: auto;" />
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send('犬の画像取得に失敗しました。');
  }
});

app.listen(PORT, () => {
  console.log(`サーバー起動: http://localhost:${PORT}`);
});
