import { criarNoticia } from "./api.js";
import { mostrarMensagem } from "./interface.js";

const formulario = document.getElementById("form-noticia");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const noticia = {
    titulo: document.getElementById("titulo").value.trim(),
    descricao: document.getElementById("descricao").value.trim(),
    data_publicacao: document.getElementById("data_publicacao").value
  };

  try {
    await criarNoticia(noticia);
    mostrarMensagem("Notícia publicada com sucesso.", "sucesso");
    formulario.reset();
  } catch (erro) {
    mostrarMensagem(`Não foi possível publicar a notícia. ${erro.message}`, "erro");
  }
});
