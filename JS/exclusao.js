import { listarNoticias, excluirNoticia } from "./api.js";
import { mostrarMensagem, criarCartao } from "./interface.js";

const lista = document.getElementById("lista-noticias");

function mostrarNoticias(noticias) {
  lista.innerHTML = "";

  if (noticias.length === 0) {
    mostrarMensagem("Nenhuma notícia publicada.", "sucesso");
    return;
  }

  noticias.forEach((noticia) => {
    const cartao = criarCartao(noticia);

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "botao botao-excluir";
    botao.textContent = "Remover notícia";
    botao.addEventListener("click", () => {
      excluirNoticia(noticia.id)
        .then(() => carregarNoticias())
        .then(() => mostrarMensagem("Notícia removida com sucesso.", "sucesso"))
        .catch((erro) => {
          mostrarMensagem(`Não foi possível remover a notícia. ${erro.message}`, "erro");
        });
    });

    cartao.appendChild(botao);
    lista.appendChild(cartao);
  });
}

function carregarNoticias() {
  return listarNoticias().then(mostrarNoticias);
}

carregarNoticias().catch((erro) => {
  mostrarMensagem(`Não foi possível carregar as notícias. ${erro.message}`, "erro");
});
