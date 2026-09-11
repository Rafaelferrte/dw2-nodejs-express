// Lista de produtos no estoque
const estoqueProdutos = [
  {
    nome: "Impressora",
    marca: "Epson",
    preco: 844.0,
    descricao:
      "A Impressora Epson EcoTank L1250 é a solução ideal para quem busca máxima economia e eficiência em impressões domésticas ou no home office.",
  },
  {
    nome: "Monitor",
    marca: "LG",
    preco: 838.9,
    descricao:
      "Mais Chance de Vitória Fique à frente dos seus oponentes e garanta a vitória com uma taxa de atualização de 180Hz e um tempo de resposta de 1ms GtG no painel IPS.",
  },
  {
    nome: "Fone de Ouvido",
    marca: "JBL",
    preco: 207.9,
    descricao:
      "Traga seu mundo à vida com o som, estilo e liberdade dos fones de ouvido sem fio JBL Tune 530BT.",
  },
];

document.write(`<h2>Estoque de Produtos</h2>`);

// Mostrar produtos
estoqueProdutos.forEach((produto) => {
  document.write(`
    <div class="produto">
        <h3>${produto.nome}</h3>

        <p>
            <strong>Marca:</strong>
            <span>${produto.marca}</span>
        </p>

        <p>
            <strong>Preço:</strong>
            <span class="preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </span>
        </p>

        <p>
            <strong>Descrição:</strong>
            ${produto.descricao}
        </p>
    </div>
`);
});

// Adicior produtos no final do vetor
estoqueProdutos.push({
  nome: "Notebook Gamer Acer Nitro V",
  marca: "Acer",
  preco: 5625.0,
  descricao:
    "É um aparelho feito para quem busca um bom desempenho, tanto em jogos quanto em outras atividades mais pesadas.",
});

document.write(`<h2>Estoque de Produtos</h2>`);

// Mostrar produtos
estoqueProdutos.forEach((produto) => {
  document.write(`
    <div class="produto">
        <h3>${produto.nome}</h3>

        <p>
            <strong>Marca:</strong>
            <span>${produto.marca}</span>
        </p>

        <p>
            <strong>Preço:</strong>
            <span class="preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </span>
        </p>

        <p>
            <strong>Descrição:</strong>
            ${produto.descricao}
        </p>
    </div>
`);
});

// Adicior produtos no inicio do vetor
estoqueProdutos.unshift({
  nome: "Teclado Gamer",
  marca: "Reddragon",
  preco: 181.55,
  descricao:
    " Teclado Mecânico Gamer Redragon Sindri K671 combina a robustez dos switches mecânicos marrons com uma iluminação em arco-íris vibrante, proporcionando uma experiência de jogo envolvente e precisa.",
});

document.write(`<h2>Estoque de Produtos</h2>`);

// Mostrar produtos
estoqueProdutos.forEach((produto) => {
  document.write(`
    <div class="produto">
        <h3>${produto.nome}</h3>

        <p>
            <strong>Marca:</strong>
            <span>${produto.marca}</span>
        </p>

        <p>
            <strong>Preço:</strong>
            <span class="preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </span>
        </p>

        <p>
            <strong>Descrição:</strong>
            ${produto.descricao}
        </p>
    </div>
`);
});

estoqueProdutos.sort((a, b) => a.preco - b.preco);

document.write(`<h2>Estoque de Produtos</h2>`);

estoqueProdutos.forEach((produto) => {
  document.write(`
    <div class="produto">
        <h3>${produto.nome}</h3>

        <p>
            <strong>Marca:</strong>
            <span>${produto.marca}</span>
        </p>

        <p>
            <strong>Preço:</strong>
            <span class="preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </span>
        </p>

        <p>
            <strong>Descrição:</strong>
            ${produto.descricao}
        </p>
    </div>
`);
});
