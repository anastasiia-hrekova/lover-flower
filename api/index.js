const express = require('express');
const cors = require('cors');
const flowersData = require('./data/flowers.json');

const app = express();

app.use(cors());

app.get('/flowers', (req, res) => {
  res.json(flowersData);
});

// app.get('flowers/:isTop', (req, res) => {
//     const isTop = DataTransfer.find((d) => d.isTop === req.params.isTop)
//     if (isTop) {
//         res.json(isTop);
//     } else {
//         res.status(404).json({message: "Item not found"})
//     }
// })

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
