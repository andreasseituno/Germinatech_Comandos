// Gerando Cabecalho
const header = document.createElement("header");
const aside = document.createElement("aside");
const cabecalhoFixo = document.getElementById("cabecalhoFixo");

criaCabecalho();

// Listas
const botoes = document.querySelectorAll(".containerLogo button");

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
  aside.innerHTML = window.cabecalhoDinamico;

  cabecalhoFixo.appendChild(header);
  cabecalhoFixo.appendChild(aside);
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
  aside.style.marginLeft = "-400px";
  aside.style.visibility = "hidden";
  aside.style.transition = "margin .25s ease 0s, visibility 0s ease .2501s";
  fechado = true;
}