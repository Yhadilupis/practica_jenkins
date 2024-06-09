const express = require('express');
const app = express();

app.use(express.json());


app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world :3' });
});

app.get('/bye', (req, res) => {
  res.status(200).json({ message: 'bye' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;