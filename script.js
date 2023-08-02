function carregar() {
  const container = document.querySelector("div.container-img")
  const agora = new Date()
  const hora = agora.getHours()
  const res = document.querySelector("div.res")
  inserirTexto(hora, res)
  const img = document.createElement("img")
  img.src = getImageUrl(hora)
  // img.classList.add("imagem-hora") Adicionar uma class
  container.appendChild(img)
  trocarCorFundo(hora)
}

function inserirTexto(hora, res) {
  let texto = ""
  if (hora > 6 && hora < 12) {
    texto += "Bom Dia !"
  } else if (hora >= 12 && hora < 18) {
    texto += "Boa Tarde !"
  } else {
    texto += "Boa Noite !"
  }
  res.innerText = `Agora são ${hora} horas, ${texto} ` //+ texto
}

function getImageUrl(hora) {
  if (hora > 6 && hora < 12) {
    return "https://i.pinimg.com/736x/8e/81/e7/8e81e795b09eebe6d76313105fa0d32d.jpg"
  } else if (hora >= 12 && hora < 18) {
    return "https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2020/04/materiasrepositorio1715-1522767873.jpeg"
  } else {
    return "https://www.teusonhar.com.br/wp-content/uploads/2015/03/sonhar-com-noite.jpg"
  }
}

function trocarCorFundo(hora) {
  let cor = ""
  let corContainer = ""
  if (hora > 6 && hora < 12) {
    cor = "rgb(253 195 125)"
    corContainer = "rgb(74 75 75)"
  } else if (hora >= 12 && hora < 18) {
    cor = "#6262c5"
    corContainer = "black"
  } else {
    cor = "black"
    corContainer = "rgb(73 73 73)"
  }
  document.body.style.backgroundColor = cor
  document.querySelector("section.container").style.backgroundColor =
    corContainer
}
