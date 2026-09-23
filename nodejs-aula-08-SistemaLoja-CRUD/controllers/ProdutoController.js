// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
import Produto from "../models/Produto.js";
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os produtos. Erro:${error}`);
    });
});

export default router;
