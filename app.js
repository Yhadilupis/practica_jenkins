const express = require('express');
const app = express();

app.use(express.json());


app.get('/api/v1/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world :3' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;