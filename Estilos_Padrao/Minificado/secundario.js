const conteudoFooter=document.createElement("div"),footer=document.getElementsByTagName("footer")[0];criaRodape();const titulos=document.querySelectorAll("section button"),conteudo=document.getElementsByClassName("conteudo"),bolinhas=document.querySelectorAll("button > img"),opcoes=document.getElementById("opcoes"),botao=document.getElementById("btnAbrir");var pressionado=!1;for(let i=0;i<conteudo.length;i++)titulos[i].addEventListener("click",()=>{0==conteudo[i].offsetHeight?abreSecao(i):fechaSecao(i)});function criaRodape(){conteudoFooter.innerHTML=window.footerDinamico,footer.appendChild(conteudoFooter)}function abreSecao(e){conteudo[e].style.height="auto",bolinhas[e].setAttribute("src","../Imagens/circulo2.webp")}function fechaSecao(e){conteudo[e].style.height="0px",bolinhas[e].setAttribute("src","../Imagens/circulo1.webp"),limpaTitulos(),titulos[e].style.borderWidth="2px",bolinhas[e].setAttribute("src","../Imagens/circulo1N.webp")}function limpaTitulos(){for(let e=0;e<titulos.length;e++)titulos[e].style.borderWidth="0px",bolinhas[e].setAttribute("src","../Imagens/circulo1.webp")}opcoes.addEventListener("change",()=>{for(let e=0;e<opcoes.length;e++)if(opcoes.value.slice(1)==titulos[e].id){abreSecao(e);break}}),botao.addEventListener("click",()=>{for(let e=0;e<conteudo.length;e++)pressionado?(fechaSecao(e),botao.innerText="Abrir Se\xe7\xf5es"):(abreSecao(e),botao.innerText="Fechar Se\xe7\xf5es");pressionado=!pressionado});