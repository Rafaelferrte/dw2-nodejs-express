// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
import Cliente from "../models/Cliente.js";
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      // Enviando a lista de clientes para a página HTML
      clientes: clientes,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao listar os clientes: Erro: ${error}`);
  })
});

// Exportando o módulo
export default router;
