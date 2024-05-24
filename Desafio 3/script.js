var palavratitulo = "Graziela Lucena";
var espacotitulo = document.querySelector(".titulo-autor");
var tempo = 250;

var numeroletra = 0;

function aparecerTitulo(){
    if (numeroletra < palavratitulo.length) {
        espacotitulo.textContent += palavratitulo.charAt(numeroletra);
        numeroletra++;
        setTimeout(aparecerTitulo, tempo);
    }
}

aparecerTitulo();

var menuMobile = document.querySelector(".menuMobile");
var menu = document.querySelector(".menu");
var seClicarMenu = false;



menuMobile.addEventListener('click', function(){
    seClicarMenu ? menu.classList.add("invisible") + menuMobile.children[0].setAttribute('src', './img/menuMobile1.png') : menu.classList.remove("invisible") + menuMobile.children[0].setAttribute('src', './img/menuMobile2.png');

    

    seClicarMenu = !seClicarMenu
    console.log (seClicarMenu)
})


