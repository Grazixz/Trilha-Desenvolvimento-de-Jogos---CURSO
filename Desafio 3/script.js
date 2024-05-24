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
