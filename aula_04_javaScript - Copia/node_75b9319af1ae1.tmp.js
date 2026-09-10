// Index.js arquivo principal do back-end.

//Inportand o Express .js para o projeto
const express = require("express"); //Forma Classica (CommonJS Modules)

const app = express(); //Criando instancia do Express

//Configurando o EJS
app.set("view engine", "ejs"); //Rendeniza as paginas do Site

app.use(express.static("public")); //Puxando pasta publica

//Aqui irão as rotas do Site
//Rota principal
//.get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

const produtos = [
  { nome: "Computador", marca: "Lenovo", preco: 3500 },
  { nome: "Celular", marca: "Samsung", preco: 4000 },
  { nome: "Notebook", marca: "Dell", preco: 5100 },
  { nome: "Tablet", marca: "Asus", preco: 2400 },
];

app.get("/produtos", (req, res) => {
  res.render("produtos", { produtos });
});

const clientes = [
  { nome: "João Vitor", cpf: "469725469", telefone: 1395455541 },
  { nome: "Pedro Lacerda", cpf: "201494412", telefone: 1325477558 },
  { nome: "Rafael Ferret", cpf: "102398274", telefone: 1225485648 },
  { nome: "Guilherme Carneiro", cpf: "175924863", telefone: 1215245476 },
];

app.get("/clientes", (req, res) => {
  res.render("clientes", { clientes });
});

app.get("/perfil", (req, res) => {
  res.render("perfil");
});

app.get("/servicos", (req, res) => {
  res.render("servicos");
});
//Metodo do Express para iniciar um servidor back-end

//app.listen()

//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  //Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    //Caso haja sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});