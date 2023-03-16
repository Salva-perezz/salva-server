import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
