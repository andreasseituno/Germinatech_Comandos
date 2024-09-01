// Gerando Cabecalho
const header = document.createElement("header");
const aside = document.createElement("aside");
const cabecalhoFixo = document.getElementById("cabecalhoFixo");

criaCabecalho();

const tituloCabecalho = document.querySelector("header#principal h3");

modificaCabecalho();

// Listas
const botoes = document.querySelectorAll(".containerLogo button");
const botoesNavegacao = document.querySelectorAll("aside nav a");

// Elementos

// Variáveis
var fechado = true;
var scrollPos = 0;

botoesNavegacao.forEach((a) => {
  if (a.dataset.page == document.body.dataset.page) a.classList.add("inativo");
  else a.classList.remove("inativo");
});

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

botoes.forEach((button) => {
  button.addEventListener("click", () => {
    if (fechado) abreAside();
    else fechaAside();
  });
});

// Métodos
function criaCabecalho() {
  header.id = "principal";
  header.innerHTML = window.headerDinamico;
  aside.innerHTML = window.asideDinamico;

  cabecalhoFixo.appendChild(header);
  cabecalhoFixo.appendChild(aside);
}

function modificaCabecalho() {
  tituloCabecalho.textContent = retornaTituloPagina(document.body.dataset.page);
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

function retornaTituloPagina(pagina) {
  switch (pagina) {
    case "css":
      return "Declarações Css";
    case "docker":
      return "Comandos Docker";
    case "html":
      return "Tags e atributos/parâmetros Html";
    case "git":
      return "Comandos Git Bash";
    case "inicio":
      return "Todos os Comandos de Programação que anotei na Germinatech";
    case "mobile":
      return "Passo a passo desenvolvimento Mobile (Android Studio)";
    case "mongodb":
      return "Comandos MongoDb";
    case "sqlpostgres":
      return "Comandos PostgreSQL";
    case "sqlserver":
      return "Comandos SQL Server";
    case "ubuntu-linux":
      return "Comandos Linux/Ubuntu";
  }
}
