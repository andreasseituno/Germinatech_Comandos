// Listas
const links = document.querySelectorAll(".conteudo a");

// Eventos
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    for (let t = 0; t < titulos.length; t++) {
      if (links[i].toString().split("#")[1] == titulos[t].id) {
        abreSecao(t);
        break;
      }
    }
  });
}
