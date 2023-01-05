// Listas
const botoes = document.querySelectorAll(".containerLogo button");

// Elementos
const cabecalho = document.getElementById("principal");
const lateral = document.querySelector("aside");

// Variáveis
var fechado = true;
var scrollPos = 0;

// Eventos
window.addEventListener("scroll", () => {
  if (document.body.getBoundingClientRect().top > scrollPos ||
    window.scrollY <= 300)
    apareceCabecalho();

  else 
  escondeCabecalho();

  scrollPos = document.body.getBoundingClientRect().top;
});

window.addEventListener("click", (e) => {
  var clicouForaAside = !lateral.contains(e.target);
  var clicouForaCabecalho = !cabecalho.contains(e.target);

  if (clicouForaAside && clicouForaCabecalho && !fechado) 
  fechaAside();
});

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    if (fechado) 
    abreAside();

    else 
    fechaAside();
  });
}

// Métodos
function apareceCabecalho() {
  cabecalho.style.opacity = "1";
  cabecalho.style.scale = "1";
  cabecalho.style.transition = "opacity .35s ease .65s";
}

function escondeCabecalho() {
  cabecalho.style.opacity = "0";
  cabecalho.style.scale = "0";
  cabecalho.style.transition = "opacity .35s ease .4s, scale 0s ease .75s";
}

function abreAside() {
  lateral.style.marginLeft = "0";
  lateral.style.visibility = "visible";
  lateral.style.transition = "margin .25s ease 0s";
  fechado = false;
}

function fechaAside() {
  lateral.style.marginLeft = "-400px";
  lateral.style.visibility = "hidden";
  lateral.style.transition = "margin .25s ease 0s, visibility 0s ease .2501s";
  fechado = true;
}
