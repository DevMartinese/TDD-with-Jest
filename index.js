const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
