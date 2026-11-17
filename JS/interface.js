export function mostrarMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
}

export function formatarData(dataIso) {
  const partes = dataIso.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

export function criarCartao(noticia) {
  const cartao = document.createElement("article");
  cartao.className = "noticia";

  const titulo = document.createElement("h2");
  titulo.textContent = noticia.titulo;

  const data = document.createElement("p");
  data.className = "noticia-data";
  data.textContent = formatarData(noticia.data_publicacao);

  const descricao = document.createElement("p");
  descricao.className = "noticia-descricao";
  descricao.textContent = noticia.descricao;

  cartao.append(titulo, data, descricao);
  return cartao;
}
