// Gerando Elementos
const main = document.querySelector("main");
const tituloPrincipal = document.querySelector("main h1");
const conteudoFooter = document.createElement("div");
const footer = document.querySelector("footer");

criaTitulo();
criaRodape();

// Listas
const titulos = document.querySelectorAll("section button");
const paragrafos = document.querySelectorAll("section p");
const conteudo = document.getElementsByClassName("conteudo");
const bolinhas = document.querySelectorAll("section img");
const links = document.querySelectorAll(".conteudo a");

// Elementos
const opcoes = document.getElementById("opcoes");
const botao = document.getElementById("btnAbrir");

// Variáveis
var pressionado = false;
var ultimoClipBoard = null;

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

links.forEach((a) => {
  a.addEventListener("click", () => {
    for (let t = 0; t < titulos.length; t++) {
      if (a.toString().split("#")[1] == titulos[t].id) {
        abreSecao(t);
        break;
      }
    }
  });
});

paragrafos.forEach((p) => {
  let codigos = Array.from(p.getElementsByTagName("code"));

  codigos.forEach((code) => {
    code.addEventListener("click", () => {
      let comando = code.textContent;
      navigator.clipboard.writeText(comando.trim());
      mudaEstadoCopia(code);
    });
  });

  if (codigos.length == 0) {
    p.addEventListener("click", () => {
      copiaComando(p.childNodes);
      mudaEstadoCopia(p);
    });
  }
});

// Métodos
function criaRodape() {
  conteudoFooter.innerHTML = window.footerDinamico;
  footer.appendChild(conteudoFooter);
}

function criaTitulo() {
  tituloPrincipal.textContent = retornaTituloPagina(document.body.dataset.page);
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

function copiaComando(conteudoTag) {
  let comando = "";
  conteudoTag.forEach((filho) => {
    if (filho.nodeType == Node.TEXT_NODE || filho.nodeName == "SPAN") {
      comando += filho.textContent;
    }
  });

  navigator.clipboard.writeText(comando.trim());
}

function mudaEstadoCopia(tag) {
  if (ultimoClipBoard && tag != ultimoClipBoard) {
    ultimoClipBoard.classList.remove("copiado");
  }
  tag.classList.add("copiado");
  ultimoClipBoard = tag;
}
