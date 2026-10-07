// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
import Cliente from "../models/Cliente.js";
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        // Enviando a lista de clientes para a página HTML
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os clientes: Erro: ${error}`);
    });
});

// Rota de cadatro de cliente
router.post("/clientes/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando nas variáveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Chamando o model para gravar os dados no banco
  // Equivalente ao insert into
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
    });
});

// Rota para excluir um cliente
// :id -> cria um parametro na rota
router.get("/clientes/excluir/:id", (req, res) => {
  //Criando uma variavel para armazenar o parametro que chega pela url
  const id = req.params.id;
  // Chamando o Model e pedindo para excluir o cliente
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}`);
    });
});

// rota de edição do cliente
router.get("/clientes/editar/:id", (req, res) => {
  // Coletando o parametro do URL
  const id = req.params.id;
  // Buscando o cliente no banco pela ID
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEditar", {
        // Enviando um objeto com os dados do cliente para a pagina
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o cliente. Erro ${error}`);
    });
});

// Rota que altera um cliente no banco de dados
router.post("/clientes/alterar", (req, res) => {
  // Coletando os dados do formulario
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  //chamando o model e pedindo para alterar no banco de dados

  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao editar o cliente. Erro: ${error}`);
    });
});

// Exportando o módulo
export default router;
