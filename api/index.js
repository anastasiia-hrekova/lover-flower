const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const flowersData = require('./data/flowers.json');

const app = express();

app.use(cors());

app.get('/flowers', (req, res) => {
  const flowersFilePath = path.join(__dirname, 'data', 'flowers.json');
  fs.readFile(flowersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Помилка при завантаженні даних' });
    }
    res.json(flowersData);
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
