import { listarNoticias, atualizarNoticia } from "./api.js";
import { mostrarMensagem } from "./interface.js";

const selecao = document.getElementById("selecao-noticia");
const formulario = document.getElementById("form-noticia");
const campoTitulo = document.getElementById("titulo");
const campoDescricao = document.getElementById("descricao");
const campoData = document.getElementById("data_publicacao");

let noticias = [];

function preencherFormulario() {
  const noticia = noticias.find((item) => String(item.id) === selecao.value);

  if (noticia) {
    campoTitulo.value = noticia.titulo;
    campoDescricao.value = noticia.descricao;
    campoData.value = noticia.data_publicacao;
  } else {
    formulario.reset();
  }
}

async function carregarNoticias(idSelecionado) {
  noticias = await listarNoticias();

  selecao.innerHTML = '<option value="">Selecione uma notícia</option>';
  noticias.forEach((noticia) => {
    const opcao = document.createElement("option");
    opcao.value = noticia.id;
    opcao.textContent = `${noticia.id} - ${noticia.titulo}`;
    selecao.appendChild(opcao);
  });

  if (idSelecionado) {
    selecao.value = idSelecionado;
  }
  preencherFormulario();
}

selecao.addEventListener("change", preencherFormulario);

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const id = selecao.value;
  if (id === "") {
    mostrarMensagem("Selecione uma notícia para editar.", "erro");
    return;
  }

  const noticia = {
    titulo: campoTitulo.value.trim(),
    descricao: campoDescricao.value.trim(),
    data_publicacao: campoData.value
  };

  try {
    await atualizarNoticia(id, noticia);
    await carregarNoticias(id);
    mostrarMensagem("Notícia atualizada com sucesso.", "sucesso");
  } catch (erro) {
    mostrarMensagem(`Não foi possível atualizar a notícia. ${erro.message}`, "erro");
  }
});

carregarNoticias().catch((erro) => {
  mostrarMensagem(`Não foi possível carregar as notícias. ${erro.message}`, "erro");
});
