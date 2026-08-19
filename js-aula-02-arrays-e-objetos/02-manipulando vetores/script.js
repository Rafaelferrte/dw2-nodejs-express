// Métodos de manipulação de vetores

let frutas = ["Laranja", "Maçã", "Banana"];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = "Morango";
document.write(`<p>Agora a lista é: ${frutas}</p>`);

// Método push: insere um novo elementop no final do vetor
frutas.push("Abacaxi");
document.write(`<p>Agora a lista é: ${frutas}</p>`);

// Método unshift: insere um novo elemento no início do vetor
frutas.unshift("Pera");
document.write(`<p>Agora a lista é: ${frutas}</p>`);

// Método length: retorna o número de elementos no vetor
document.write(`Na nossa lista temos ${frutas.length} frutas`)

// Método sort: Ordena os itens do vetor
let frutasOrdenadas = frutas.sort()
document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`)
document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`)

// Método sort: ordenando em ordem crescente e decrescente
let numeros = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Os números são: ${numeros}</p>`)
document.write(`<p>Os números ordenados são: ${numeros.sort()}</p>`)

// Ordenando corretamente os números
// Ordem crescente
document.write(`<p>Os números ordenados são: ${numeros.sort((a, b) => a - b)}</p>`)

//Ordem decrescente
document.write(`<p>Os números ordenados são: ${numeros.sort((a, b) => b - a)}</p>`)

