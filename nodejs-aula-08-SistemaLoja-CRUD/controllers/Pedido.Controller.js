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

// Rota cadastrar pedidos
router.post("/pedidos/cadastrar", (req,res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;

  Pedido.create({
    numero: numero,
    valor: valor
  }).then(() => {
    res.redirect("/pedidos");
  }).catch((error) => {
    console.log(`Ocorreu um erro ao cadastrar um pedido. Erro: ${error}`);
  });
});

export default router;
