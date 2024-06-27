// Gerando Elementos
const main = document.querySelector("main");
const tituloPrincipal = document.querySelector("main h1");
const conteudoFooter = document.createElement("div");
const footer = document.querySelector("footer");

criaTitulo();
criaRodape();

// Listas
const titulos = document.querySelectorAll("section button");
const conteudo = document.getElementsByClassName("conteudo");
const bolinhas = document.querySelectorAll("section img");
const links = document.querySelectorAll(".conteudo a");

// Elementos
const opcoes = document.getElementById("opcoes");
const botao = document.getElementById("btnAbrir");

// Variáveis
var pressionado = false;

// Eventos

for (let i = 0; i < conteudo.length; i++) {
  titulos[i].addEventListener("click", () => {
    if (conteudo[i].offsetHeight == 0) abreSecao(i);
    else fechaSecao(i);
  });
}

opcoes.addEventListener("change", () => {
  for (let i = 0; i <= opcoes.length; i++) {
    if (opcoes.value.slice(1) == titulos[i].id) {
      abreSecao(i);
      break;
    }
  }
});

botao.innerText = "Abrir Seções";
botao.addEventListener("click", () => {
  for (let i = 0; i < conteudo.length; i++) {
    if (pressionado) {
      fechaSecao(i);
      botao.innerText = "Abrir Seções";
    } else {
      abreSecao(i);
      botao.innerText = "Fechar Seções";
    }
  }
  pressionado = !pressionado;
});

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

// Métodos
function criaRodape() {
  conteudoFooter.innerHTML = window.footerDinamico;
  footer.appendChild(conteudoFooter);
}

function criaTitulo() {
  let titulo = document.createElement("h1");
  titulo.textContent = retornaTituloPagina(document.body.dataset.page);
  main.insertBefore(titulo, main.firstChild)
}

function abreSecao(n) {
  conteudo[n].style.height = "auto";
  bolinhas[n].setAttribute("src", "../Imagens/circulo2.webp");
}

function fechaSecao(n) {
  conteudo[n].style.height = "0px";
  bolinhas[n].setAttribute("src", "../Imagens/circulo1.webp");

  limpaTitulos();
  titulos[n].style.borderWidth = "2px";
  bolinhas[n].setAttribute("src", "../Imagens/circulo1N.webp");
}

function limpaTitulos() {
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.borderWidth = "0px";
    bolinhas[i].setAttribute("src", "../Imagens/circulo1.webp");
  }
}
