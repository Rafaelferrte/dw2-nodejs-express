// Objeto
const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
};

document.write(`<p>${produto}</p>`)

// ACessando os atributos do objeto
document.write(`<p>${produto.nome}, ${produto.marca}, custa R$ ${produto.preco} <br> ${produto.descricao}</p>`)

// Array de objetos
document.write("<h3>Array de objetos:</h3>")
const listaProdutos = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho"
    },
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento."
    },
    {
        nome: "Iphone",
        marca: "Apple",
        preco: 13000,
        descricao: "Ultra resistente! Não quebra nunca!"
    }
];

// Exibindo as informações dos produtos com forEach
document.write(`<h4>Produtos em promoção:</h4>`)
document.write("<div class= 'cards'>")
listaProdutos.forEach(produto => {
    
    document.write(`
        <div class="card">
            Produto: ${produto.nome} <br>
            Marca: ${produto.marca} <br>
            Preço: R$ ${produto.preco} <br>
            Descrição: ${produto.descricao} <br><br>
        </div>
        `)
    
})

document.write("</div>")