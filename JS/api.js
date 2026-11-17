import { SUPABASE_URL, SUPABASE_KEY, TABELA } from "./config.js";

const urlTabela = `${SUPABASE_URL}/rest/v1/${TABELA}`;

const cabecalhos = {
  apikey: SUPABASE_KEY,
  "Content-Type": "application/json"
};

async function verificarResposta(resposta) {
  if (!resposta.ok) {
    const detalhe = await resposta.text();
    throw new Error(`Erro ${resposta.status}: ${detalhe}`);
  }
}

// READ (GET)
export async function listarNoticias() {
  const resposta = await fetch(`${urlTabela}?select=*&order=id.asc`, {
    method: "GET",
    headers: cabecalhos
  });
  await verificarResposta(resposta);
  return await resposta.json();
}

// CREATE (POST)
export async function criarNoticia(noticia) {
  const resposta = await fetch(urlTabela, {
    method: "POST",
    headers: { ...cabecalhos, Prefer: "return=representation" },
    body: JSON.stringify(noticia)
  });
  await verificarResposta(resposta);
  return await resposta.json();
}

// UPDATE (PATCH)
export async function atualizarNoticia(id, noticia) {
  const resposta = await fetch(`${urlTabela}?id=eq.${id}`, {
    method: "PATCH",
    headers: { ...cabecalhos, Prefer: "return=representation" },
    body: JSON.stringify(noticia)
  });
  await verificarResposta(resposta);
  return await resposta.json();
}

// DELETE
export async function excluirNoticia(id) {
  const resposta = await fetch(`${urlTabela}?id=eq.${id}`, {
    method: "DELETE",
    headers: cabecalhos
  });
  await verificarResposta(resposta);
}
