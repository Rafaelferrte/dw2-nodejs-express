// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
import Pedido from "../models/Pedido.js";
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao listar os pedidos. Erro: ${error}`)
  })
});

export default router;
