// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
import Pedido from "../models/Pedido.js";
const router = express.Router();
// Importando o model cliente
import Cliente from "../models/Cliente.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Promise.all([
    //Listando todos os pedidos
    Pedido.findAll({
      // Trazendo os dados dos clientes juntos com os pedidos
      include: [
        {
          model: Cliente, // Inclui a tabela de clientes no select
          required: true, // Opcional: garante que somente pedidos com clientes associados sejam retornados
        },
      ],
    }),
    // Selecionando todos os clientes
    Cliente.findAll()
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        // Enviando a lista de pedidos para a pagina
        pedidos: pedidos,
        clientes: clientes
      });
    })
    .catch((error) => {
      console.log(`Erro ao listar os pedidos. Erro: ${error}`);
    });
});

// Rota cadastrar pedidos
router.post("/pedidos/cadastrar", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;

  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar um pedido. Erro: ${error}`);
    });
});

export default router;
