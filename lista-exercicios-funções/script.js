//Função simples
function mostrarInformacoes(){
    document.write(`Nome: Rafael<br>Idade: 18<br>Cidade: Registro<br>`);

}

mostrarInformacoes();

//Função com parâmetros 
function dividir(num1,num2){
    return num1/num2;
}

document.write(`O resultado da divisão é ${dividir(4,2)}`);

//Função com retorno
function multi(a,b,c){
    return a*b*c;
    
};

document.write(`<br>A multiplicação é ${multi(6,9,10)}`);

//Função com mais de um retorno
function maiorIdade(idade){
    if(idade>=18){
        return "Maior de idade";
    }
    else{
        return "Menor de idade";
    }
}

document.write(`<br>Você é ${maiorIdade(20)}`);

// Função anonima
const mencao = function (n1,n2) {
  media = (n1+n2)/2;
  if(media<=5){
    return "Reprovado";
  }
  else{
    return "Aprovado";
  }
};
const n1 = 9;
const n2 = 7;

document.write(`<br>${mencao(n1,n2)}`);

//Arrow function com parâmetro único 

const triplo = (x) => {
  return x * 3;
};

const x = 109;

document.write(`<br>O triplo do número é ${triplo(x)}`);

//Arrow function com mais de um parâmetro
const soma = (a,b,c,d) => {
    return a+b+c+d;
}

const a = 10;
const b = 5;
const c = 68;
const d = 84;

document.write(`<br>A soma é ${soma(a,b,c,d)}`);

//IIFE
const saudacao = (function (nome){
    document.write(`<br>Olá, ${nome}! Seja bem-vindo.`);
})("Rafael");