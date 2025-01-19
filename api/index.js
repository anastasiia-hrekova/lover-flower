const express = require('express');
const cors = require('cors');
const flowersData = require('./data/flowers.json');

const app = express();

app.use(cors());

app.get('/flowers', (req, res) => {
  res.json(flowersData);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
