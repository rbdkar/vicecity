class GtaHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="CSS/componentes.css">
      <header class="cabecalho">
        <div class="cabecalho-interno">
          <p class="logo">Vice City News</p>
          <p class="slogan">Portal oficial de notícias de Vice City</p>
        </div>
      </header>
    `;
  }
}

class GtaNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.links = [
      { texto: "Publicar", href: "cadastro.html" },
      { texto: "Notícias", href: "consulta.html" },
      { texto: "Editar", href: "edicao.html" },
      { texto: "Remover", href: "exclusao.html" }
    ];
  }

  connectedCallback() {
    let itens = "";
    this.links.forEach((link) => {
      itens += `<li><a href="${link.href}">${link.texto}</a></li>`;
    });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="CSS/componentes.css">
      <nav class="menu">
        <ul>${itens}</ul>
      </nav>
    `;
  }
}

class GtaFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="CSS/componentes.css">
      <footer class="rodape">
        <p>Notícias de GTA VI: projeto de estudo com CRUD em Supabase.</p>
        <p>GTA VI é marca da Rockstar Games. Este projeto não tem vínculo com a empresa.</p>
      </footer>
    `;
  }
}

customElements.define("gta-header", GtaHeader);
customElements.define("gta-nav", GtaNav);
customElements.define("gta-footer", GtaFooter);
