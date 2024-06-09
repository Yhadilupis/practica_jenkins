const express = require('express');
const app = express();

app.use(express.json());


app.get('/api/v1/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world :3' });
});

app.get('/api/v1/bye', (req, res) => {
  res.status(200).json({ message: 'bye' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;