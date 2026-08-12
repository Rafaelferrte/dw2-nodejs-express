//Função simples
function mostrarDados(){
    console.log(`Nome: Rafael`);
    console.log(`Idade: 18`);
    console.log(`Cidade: Registro`);
}

mostrarDados();

//Função com parâmetros 
function dividir(num1,num2){
    return num1/num2;
}

console.log(dividir(4,2));

//Função com retorno
function multi(a,b,c){
    return a*b*c;
    
};

console.log(multi(6,9,10));

//Função com mais de um retorno
function maiorIdade(idade){
    if(idade>=18){
        return "Maior de idade";
    }
    else{
        return "Menor de idade";
    }
}

console.log(maiorIdade(20));

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

console.log(mencao(n1,n2));

//Arrow function com parâmetro único 

const triplo = (x) => {
  return x * 3;
};

const x = 109;

console.log(`O triplo do número é ${triplo(x)}`);

//Arrow function com mais de um parâmetro
const soma = (a,b,c,d) => {
    return a+b+c+d;
}

const a = 10;
const b = 5;
const c =68;
const d = 84;

console.log(`A soma é ${soma(a,b,c,d)}`);

//IIFE
const saudacao = (function (nome){
    console.log(`Olá, ${nome}! Seja bem-vindo.`);
})("Rafael");