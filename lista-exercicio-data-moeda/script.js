let dataAtual = new Date();

document.write(`
    <p>${dataAtual}</p>
`);

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

document.write(`Data de hoje: ${dia}/${mes}/${ano}.`);

const compraInternacional = 500.75;

document.write(`<p><strong>
    ${compraInternacional.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    })}
</strong></p>`);

const compraInternacionalBRL = 5.20 * compraInternacional;

document.write(`<p><strong>
    ${compraInternacionalBRL.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })}
</strong></p>`);

// Adiciona 12 dias
dataAtual.setDate(dataAtual.getDate() + 12);

const diaEntrega = dataAtual.getDate();
const mesEntrega = dataAtual.getMonth() + 1;
const anoEntrega = dataAtual.getFullYear();

document.write(
    `A data de entrega da compra será: ${diaEntrega}/${mesEntrega}/${anoEntrega}`
);

const nomeCliente = "rafael ferrete"

const nomeFormatado = nomeCliente
  .split(" ")
  .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
  .join(" ");

document.write(`<p>Seu nome formatado é ${nomeFormatado}</p>`);