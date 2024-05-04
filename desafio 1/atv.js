//Exercício 1
function atv1() {
    let nome = prompt("Digite o nome do(A) Aluno(A):");
    let nota1 = prompt("Digite a primeira nota:");
    let nota2 = prompt("Digite a segunda nota:");
    let nota3 = prompt("Digite a terceira nota:");
    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3
    alert ("Sistema Escolar\nAluno(A): " + nome + "\n1º Nota: " + nota1 + "\n2º Nota: " + nota2 + "\n3º Nota: " + nota3);
    alert ("Calculando a Média...");
    alert ("A média é: " + media + "!");  

}

//Exercício 2
function atv2() {
    let n1 = [15,8, 90, 75, 102, 6, 2];
    let maior = Math.max(...n1);
    let menor = Math.min(...n1);
    alert ("Loteria\nLista de Números:" + n1);
    alert (n1 + "\nO maior número é: "+ maior + "\nO menor número é: " + menor);
}

//Exercício 3
function atv3() {
    let n2 = [12, 5, 23, 17, 8, 14, 3, 19];  
    alert("Guilda dos Alquimistas\n Números dos frascos:" + n2);
    function compararNumeros(a, b) {
        return a - b;
    }
    alert("Ordem Crescente: " + n2.sort(compararNumeros));
    n2 = [12, 5, 23, 17, 8, 14, 3, 19];
};

//Exercício 4
function atv4() {
    let n4 = [23, 16, 11, 8, 19, 14, 5, 21];
    let primos = [];
    alert ("Pequena Vila\nNúmeros dos campos: " + n4)
    n4.forEach((valor)=>{
        let divisor = 0;
        for (let contador = 1; contador <= valor; contador++){
            if (valor % contador === 0) {
                divisor++;
            }
        }
        if (divisor === 2) {
            primos.push(valor);
        }
    })
    alert ("Números dos campos: " + n4 + "\nOs números Primos são: " + primos);
    divisor = 0
    primos = []
}

//Exercício 5
function atv5() {   
    let p1 = ("What is Lorem Ipsum?");
    let cont2 = p1.split(" ",-1).length;
    alert(p1 +"\nNúmero de Palavras: " + cont2);
}

//Exercício 6
function atv6(){ 
    let n6 = prompt("Digite um número para encontrar a fatorial:");  
    let fator = 1;
        if (Number.isInteger(parseFloat(n6)) == true) {    
            while (parseFloat(n6)>0) { 
                fator = fator*n6;
                console.log(n6);
                n6--
            }
            console.log(fator)
            alert ("A fatorial é:\n"+fator);
            // return fator;
        } else {
        alert ("O número não é inteiro!");
        }
    
}   

//Exercício 7
let prod1 
let cont = 0;
let soma = 0;
function atv7() {
    alert ("Loja de Conveniência");
    cont = 0;
    soma = 0;
    while (cont < 3) {
        prod1 = parseFloat(prompt("Digite o valor do produto:"));
        soma = parseFloat(soma) + prod1;
        cont++
    }
    alert ("O valor total é: R$" + soma);
}

//Exercício 8 
let diaAtraso = 0;
let valorAtraso = 0.50;
let somaAtraso = 0;
let contAtraso = 0;
let inteiros
function atv8() {
    valorAtraso = 0.50;
    diaAtraso = parseFloat(prompt("Digite os Dias de atraso da Devolução do Livro:"));
    while (contAtraso < diaAtraso) {
       somaAtraso = somaAtraso + valorAtraso;
       contAtraso++
    }
    inteiros = Number.isInteger(somaAtraso)? '' : '0';
    alert ("Sistema da Biblioteca\nDevolução de Livros Atrasado\nValor da Multa: R$" + somaAtraso + inteiros)
    contAtraso = 0;
    somaAtraso = 0;
}

//Exercício 9 
let jogador
let personHp = 100;
let ataqueDano = 20;
let quantDano = 0;
function atv9() {
    personHp = 100;
    quantDano = 1
    alert ("Jogo RPG: Survive The World")
    jogador = prompt("Digite o nome do Jogador:");
    alert("Jogador: "+ jogador +"\nHP: "+personHp)
    alert (jogador + " está andando pela floresta e acaba encontrando um goblin gigante sacando um facão.\n O goblin ataca.");
    while (quantDano < 4) {
        personHp = personHp - ataqueDano;
        alert("Você sofreu contra o ataque do goblin e sofre o "+ quantDano +"º Dano!\nDano: -"+ ataqueDano + "\nHP: " + personHp);
        quantDano++
    }
    alert("Jogador: "+ jogador +("\nHP: ")+personHp);;
} 

//Exercício 10
let frase = ("LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY");
function letraM(txs) {
    let contMas = 0;
    for (let contm = 0; contm < txs.length; contm++) {
        if (txs[contm] === txs[contm].toUpperCase() && txs[contm] !== txs[contm].toLowerCase()) {
            contMas++
        }
    }
    return contMas
}

function atv10() {
    console.log (letraM(frase));
    contMas = 0;
    // contMas = frase.toUpperCase.length? contMas++ : contMas
    alert (frase + "\nValor de letras maiúsculas: " + letraM(frase));
}

//Exercício 11
let dataN ;
let dataAtual = new Date;
let nasc = new Date;
let diferenca = 0;
let idade = new Date;
function saberIda(idad) {
    dataAtual = new Date();
    nasc = new Date(idad);
    diferenca = dataAtual.getTime() - nasc.getTime();
    idade = new Date(diferenca);
    return idade.getFullYear() - 1970;

}
function atv11() {
    dataN = prompt("Digite a data do seu nascimento nesse formato 'yyyy-MM-dd':")
    alert ("Você tem " + saberIda(dataN) + " Anos!");
}

