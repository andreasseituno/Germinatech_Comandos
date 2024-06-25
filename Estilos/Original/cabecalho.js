// Gerando Cabecalho
const header = document.createElement("header");
const aside = document.createElement("aside");
const cabecalhoFixo = document.getElementById("cabecalhoFixo");

criaCabecalho();

const tituloPrincipal = document.querySelector("header#principal h3");

modificaCabecalho();

// Listas
const botoes = document.querySelectorAll(".containerLogo button");

// Elementos

// Variáveis
var fechado = true;
var scrollPos = 0;

// Eventos
window.addEventListener("scroll", () => {
  if (
    document.body.getBoundingClientRect().top > scrollPos ||
    window.scrollY <= 300
  )
    apareceCabecalho();
  else escondeCabecalho();

  scrollPos = document.body.getBoundingClientRect().top;
});

window.addEventListener("keyup", function (event) {
  if (event.key == "Escape") fechaAside();
});

window.addEventListener("click", (e) => {
  var clicouForaAside = !aside.contains(e.target);
  var clicouForaCabecalho = !header.contains(e.target);

  if (clicouForaAside && clicouForaCabecalho && !fechado) fechaAside();
});

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    if (fechado) abreAside();
    else fechaAside();
  });
}

// Métodos
function criaCabecalho() {
  header.id = "principal";
  header.innerHTML = window.headerDinamico;
  aside.innerHTML = window.asideDinamico;

  cabecalhoFixo.appendChild(header);
  cabecalhoFixo.appendChild(aside);
}

function modificaCabecalho() {
  var page = document.body.dataset.page;

  switch (page) {
    case "css":
      tituloPrincipal.textContent = "Declarações Css";
      break;
    case "docker":
      tituloPrincipal.textContent = "Comandos Docker";
      break;
    case "html":
      tituloPrincipal.textContent = "Tags e atributos/parâmetros Html";
      break;
    case "git":
      tituloPrincipal.textContent = "Comandos Git Bash";
      break;
    case "inicio":
      tituloPrincipal.textContent =
        "Todos os Comandos de Programação que anotei na Germinatech";
      break;
    case "mobile":
      tituloPrincipal.textContent =
        "Passo a passo desenvolvimento Mobile (Android Studio)";
      break;
    case "mongodb":
      tituloPrincipal.textContent = "Comandos MongoDb";
      break;
    case "sqlpostgres":
      tituloPrincipal.textContent = "Comandos PostgreSQL";
      break;
    case "sqlserver":
      tituloPrincipal.textContent = "Comandos SQL Server";
      break;
    case "ubuntu-linux":
      tituloPrincipal.textContent = "Comandos Linux/Ubuntu";
      break;
  }
}

function apareceCabecalho() {
  header.style.opacity = "1";
  header.style.scale = "1";
  header.style.transition = "opacity .35s ease .65s";
}

function escondeCabecalho() {
  header.style.opacity = "0";
  header.style.scale = "0";
  header.style.transition = "opacity .35s ease .4s, scale 0s ease .75s";
}

function abreAside() {
  aside.style.marginLeft = "0";
  aside.style.visibility = "visible";
  aside.style.transition = "margin .25s ease 0s";
  fechado = false;
}

function fechaAside() {
  aside.style.marginLeft = "-384px";
  aside.style.visibility = "hidden";
  aside.style.transition = "margin .25s ease 0s, visibility 0s ease .2501s";
  fechado = true;
}
