const header=document.createElement("header"),aside=document.createElement("aside"),cabecalhoFixo=document.getElementById("cabecalhoFixo");criaCabecalho();const tituloCabecalho=document.querySelector("header#principal h3");modificaCabecalho();const botoes=document.querySelectorAll(".containerLogo button");var fechado=!0,scrollPos=0;window.addEventListener("scroll",()=>{document.body.getBoundingClientRect().top>scrollPos||window.scrollY<=300?apareceCabecalho():escondeCabecalho(),scrollPos=document.body.getBoundingClientRect().top}),window.addEventListener("keyup",function(e){"Escape"==e.key&&fechaAside()}),window.addEventListener("click",e=>{var a=!aside.contains(e.target),o=!header.contains(e.target);a&&o&&!fechado&&fechaAside()});for(let i=0;i<botoes.length;i++)botoes[i].addEventListener("click",()=>{fechado?abreAside():fechaAside()});function criaCabecalho(){header.id="principal",header.innerHTML=window.headerDinamico,aside.innerHTML=window.asideDinamico,cabecalhoFixo.appendChild(header),cabecalhoFixo.appendChild(aside)}function modificaCabecalho(){tituloCabecalho.textContent=retornaTituloPagina(document.body.dataset.page)}function apareceCabecalho(){header.style.opacity="1",header.style.scale="1",header.style.transition="opacity .35s ease .65s"}function escondeCabecalho(){header.style.opacity="0",header.style.scale="0",header.style.transition="opacity .35s ease .4s, scale 0s ease .75s"}function abreAside(){aside.style.marginLeft="0",aside.style.visibility="visible",aside.style.transition="margin .25s ease 0s",fechado=!1}function fechaAside(){aside.style.marginLeft="-384px",aside.style.visibility="hidden",aside.style.transition="margin .25s ease 0s, visibility 0s ease .2501s",fechado=!0}function retornaTituloPagina(e){switch(e){case"css":return"Declara\xe7\xf5es Css";case"docker":return"Comandos Docker";case"html":return"Tags e atributos/par\xe2metros Html";case"git":return"Comandos Git Bash";case"inicio":return"Todos os Comandos de Programa\xe7\xe3o que anotei na Germinatech";case"mobile":return"Passo a passo desenvolvimento Mobile (Android Studio)";case"mongodb":return"Comandos MongoDb";case"sqlpostgres":return"Comandos PostgreSQL";case"sqlserver":return"Comandos SQL Server";case"ubuntu-linux":return"Comandos Linux/Ubuntu"}}