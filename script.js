function carregar() {
  const hora = pegarHora();

  if (hora > 6 && hora < 12) {
    modificarHTML(
      "rgb(253 195 125)",
      "rgb(74 75 75)",
      "Bom dia!",
      "https://i.pinimg.com/736x/8e/81/e7/8e81e795b09eebe6d76313105fa0d32d.jpg",
      hora
    );
  } else if (hora >= 12 && hora < 18) {
    modificarHTML(
      "#6262c5",
      "black",
      "Boa tarde!",
      "https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2020/04/materiasrepositorio1715-1522767873.jpeg",
      hora
    );
  } else {
    modificarHTML(
      "black",
      "rgb(73 73 73)",
      "Boa noite!",
      "https://www.teusonhar.com.br/wp-content/uploads/2015/03/sonhar-com-noite.jpg",
      hora
    );
  }
}

function pegarHora() {
  const agora = new Date();
  const hora = agora.getHours();
  return hora;
}

function modificarHTML(corFundo, corContainer, texto, urlImagem, hora) {
  modificarTexto(hora, texto);
  criarImagem(urlImagem);
  alterarCores(corFundo, corContainer);
}

function alterarCores(corFundo, corContainer) {
  document.body.style.backgroundColor = corFundo;
  document.querySelector("section.container").style.backgroundColor =
    corContainer;
}

function modificarTexto(hora, texto) {
  const res = document.querySelector("div.res");
  res.innerText = `Agora são ${hora} horas, ${texto} `;
}

function criarImagem(urlImagem) {
  const container = document.querySelector("div.container-img");
  const img = document.createElement("img");
  img.src = urlImagem;
  // img.classList.add("imagem-hora") Adicionar uma class
  container.appendChild(img);
}
