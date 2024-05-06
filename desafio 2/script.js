
irEtapa1();
function irEtapa1(){
    var pagina1 = document.getElementById("inicio");
    var inscrevese = document.getElementById("botaoInscrever");
    var etapa1 = document.getElementById("et1");
    inscrevese.addEventListener('click', function(){
        pagina1.style.display = 'none';
        etapa1.style.display = 'flex';
    });
};

function mostrarSenha(){
    var senha = document.getElementById('espacoSenha');
    var mostra = document.getElementById('mostrar');

    if (senha.type === 'password'){
        senha.setAttribute('type','text');
        mostra.classList.replace('bi-eye', 'bi-eye-slash-fill');
    } else {
        senha.setAttribute('type', 'password');
        mostra.classList.replace('bi-eye-slash-fill','bi-eye');
    }

}

irEtapa2();
function irEtapa2() {
    etapa1 = document.getElementById("et1");
    var prox1 = document.getElementById("proximo1");
    var etapa2 = document.getElementById("et2");
    prox1.addEventListener('click', function(){
        etapa1.style.display = 'none';
        etapa2.style.display = 'flex';
    });
};

voltaEtapa1();
function voltaEtapa1() {
    etapa1 = document.getElementById("et1");
    etapa2 = document.getElementById("et2");
    var voltar1 = document.getElementById("volta1");
    voltar1.addEventListener('click', function(){
        etapa2.style.display = 'none';
        etapa1.style.display = 'flex';
    });
};

irEtapa3();
function irEtapa3() {
    etapa2 = document.getElementById("et2");
    var etapa3 = document.getElementById("et3");
    var prox2 = document.getElementById("proximo2")
    prox2.addEventListener('click', function(){
        etapa2.style.display = 'none';
        etapa3.style.display= 'flex';
    });
};

voltaEtapa2();
function voltaEtapa2() {
    etapa2 = document.getElementById("et2");
    etapa3 = document.getElementById("et3");
    var voltar2 = document.getElementById("volta2");
    voltar2.addEventListener('click', function(){
        etapa3.style.display = 'none';
        etapa2.style.display = 'flex';
    });
};

irEtapa4();
function irEtapa4() {
    etapa3 = document.getElementById("et3");
    var etapa4 = document.getElementById("et4");
    var prox3 = document.getElementById("proximo3")
    prox3.addEventListener('click', function(){
        etapa3.style.display = 'none';
        etapa4.style.display= 'flex';
    });
};

voltaEtapa3();
function voltaEtapa3() {
    etapa3 = document.getElementById("et3");
    etapa4 = document.getElementById("et4");
    var voltar3 = document.getElementById("volta3");
    voltar3.addEventListener('click', function(){
        etapa4.style.display = 'none';
        etapa3.style.display = 'flex';
    });
};

enviarArquivos();
function enviarArquivos(){
    document.querySelector('#RG').addEventListener('change', function(){
        document.querySelector('.nomeArquivo1').textContent = this.files[0].name;
    })
    document.querySelector('#comprovanteEs').addEventListener('change', function(){
        document.querySelector('.nomeArquivo2').textContent = this.files[0].name;
    })
    document.querySelector('#comprovanteRe').addEventListener('change', function(){
        document.querySelector('.nomeArquivo3').textContent = this.files[0].name;
    })
}

function enviar(){
    alert("Inscrição Concluída!")
    etapa4.style.display = 'none';
    pagina1.style.display = 'flex';
}
