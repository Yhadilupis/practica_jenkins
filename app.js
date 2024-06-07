const express = require('express');
const app = express();

app.use(express.json());


app.get('/api/v1/welcome', (req, res) => {
  res.status(200).json({ message: 'Welcome :3!!!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;