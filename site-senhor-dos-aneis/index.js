// Importando o express
const express = require("express");
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

app.use(express.static("public")); //Puxando pasta publica

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/personagens", function (req, res) {
  res.render("personagens");
});

app.get("/locais", function (req, res) {
  res.render("locais");
});

app.get("/filmes", function (req, res) {
  res.render("filmes");
});

// Informando a porta que será utilizada
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${8080}`);
  }
});
