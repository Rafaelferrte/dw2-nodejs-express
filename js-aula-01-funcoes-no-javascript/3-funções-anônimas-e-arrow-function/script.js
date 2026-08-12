// Função anônima
const mult = function (x) {
  return x * 2;
};
const x = 15;

document.write(`<p>O resultado da multiplicação é ${mult(x)} </p>`);

// Função seta -arrow function
const triplo = (y) => {
  return y * 3;
};

const y = 109;

document.write(`<p>O triplo de ${y} é ${triplo(y)}</p>`);

// Função seta - com mais de um parâmetro - arrow function
const calculadora = (num1,operador,num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
// eval no Javascripit é uma função nativa que realiza calculos matemáticos a partir de dois números e um operador.
const num1 = 8;
const operador = '*';
const num2 = 2;

document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1,operador,num2)}</p>`)

//Função imediata (IIFE - Immediately Invoked Function Expression)
const imediata = (function () {
    document.write("<p>Estou sendo executado imediatamente!</p>");
})(); // Passando os parâmetros;

// Função imediata - com parâmetros
const loadUser = (function (user) {
    document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`)
    // Mostrando as informações após 3 segundos
    setTimeout(() => {
        document.write(`
            Nome: Rafael <br>
            Idade: 18 anos <br>
            `);
    }, 3000);
})("Rafael");// Passando o parâmetro