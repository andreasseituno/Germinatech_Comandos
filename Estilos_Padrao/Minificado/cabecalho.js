const header=document.createElement("header"),aside=document.createElement("aside"),cabecalhoFixo=document.getElementById("cabecalhoFixo");criaCabecalho();const botoes=document.querySelectorAll(".containerLogo button");var fechado=!0,scrollPos=0;window.addEventListener("scroll",()=>{document.body.getBoundingClientRect().top>scrollPos||window.scrollY<=300?apareceCabecalho():escondeCabecalho(),scrollPos=document.body.getBoundingClientRect().top}),window.addEventListener("keyup",function(e){"Escape"==e.key&&fechaAside()}),window.addEventListener("click",e=>{var a=!aside.contains(e.target),s=!header.contains(e.target);a&&s&&!fechado&&fechaAside()});for(let i=0;i<botoes.length;i++)botoes[i].addEventListener("click",()=>{fechado?abreAside():fechaAside()});function criaCabecalho(){header.id="principal",header.innerHTML=window.headerDinamico,aside.innerHTML=window.asideDinamico,cabecalhoFixo.appendChild(header),cabecalhoFixo.appendChild(aside)}function apareceCabecalho(){header.style.opacity="1",header.style.scale="1",header.style.transition="opacity .35s ease .65s"}function escondeCabecalho(){header.style.opacity="0",header.style.scale="0",header.style.transition="opacity .35s ease .4s, scale 0s ease .75s"}function abreAside(){aside.style.marginLeft="0",aside.style.visibility="visible",aside.style.transition="margin .25s ease 0s",fechado=!1}function fechaAside(){aside.style.marginLeft="-384px",aside.style.visibility="hidden",aside.style.transition="margin .25s ease 0s, visibility 0s ease .2501s",fechado=!0}