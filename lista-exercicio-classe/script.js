class Heroi{
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr(){
        return this.nome + " está correndo!";
    }

    andar(){
        return this.nome + " está andando!";
    }

    atacar(){
        return this.nome + " está atacando!";
    }

    defender(){
        return this.nome + " está atacando";
    }
}

const homemAranha = new Heroi("Homem-aranha",1000,9,7);
homemAranha.teia = 1;
homemAranha.sentidoAranha = function (){
    return this.nome + " está em perigo!";
};

const superman = new Heroi("Superman", 10000,10,10);
superman.podeVoar = 1;
superman.visaoCalor = function (){
    return this.nome + " está usando a visão de calor!";
}

const batman = new Heroi("Batman",500,10,10);
batman.esconder = 0;
batman.investigar = function (){
    return this.nome + " está investigando o crime!";
}

document.write(
    `<p>
        O herói ${homemAranha.nome}
        tem ${homemAranha.vida} de vida,
        ${homemAranha.velocidade} de velocidade e
        ${homemAranha.forca} de força.
    </p>`
);

document.write(
    `<p>
        O herói ${superman.nome}
        tem ${superman.vida} de vida,
        ${superman.velocidade} de velocidade e
        ${superman.forca} de força.
    </p>`
);

document.write(
    `<p>
        O herói ${batman.nome}
        tem ${batman.vida} de vida,
        ${batman.velocidade} de velocidade e
        ${batman.forca} de força.
    </p>`
);