import { listarNoticias } from "./api.js";
import { mostrarMensagem, criarCartao } from "./interface.js";

const lista = document.getElementById("lista-noticias");

listarNoticias()
  .then((noticias) => {
    if (noticias.length === 0) {
      mostrarMensagem("Nenhuma notícia publicada ainda. Use a página Publicar para adicionar a primeira.", "sucesso");
      return;
    }
    noticias.forEach((noticia) => {
      lista.appendChild(criarCartao(noticia));
    });
  })
  .catch((erro) => {
    mostrarMensagem(`Não foi possível carregar as notícias. ${erro.message}`, "erro");
  });
