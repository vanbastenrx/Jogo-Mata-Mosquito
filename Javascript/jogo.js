'use strict'

//Declarando variáveis.
let altura = 0;
let largura = 0;
let classe = 0;
let lado = 0;
let vidas = 1;
let tempo = 15;
let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if(nivel === 'muitodificil') {
    criaMosquitoTempo = 750;
}



function ajustaTamanhoPalcoJogo () {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura,altura );
}

ajustaTamanhoPalcoJogo();


let cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);


//Criando a spawn aleatório dos mosquitos.
function posicaoRandom() {

//Remover o mosquito anterior a cada novo spawn.
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();

    //Perdendo pontos de vida.
    if(vidas > 3) {
        window.location.href = 'fim_de_jogo.html';
    } else {
    document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
    vidas++;
    }
}


let posicaoX = Math.trunc(Math.random() * largura) -90;
let posicaoY = Math.trunc(Math.random() * altura) -90;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

console.log(posicaoX, posicaoY);

//Criar o elemento HTML
const mosquito = document.createElement('img');
mosquito.src = 'imagens/mosca.png';
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
mosquito.style.left = posicaoX + 'px';
mosquito.style.top = posicaoY + 'px';
mosquito.style.position = 'absolute';
mosquito.id = 'mosquito';

// Adicionando o click que vai matar o mosquito.
mosquito.onclick = function () {
    this.remove()
}

document.body.appendChild(mosquito);

console.log(ladoAleatorio());
console.log(tamanhoAleatorio());
}

//Fazendo um tamanho aleatório de 1 a 3.
function tamanhoAleatorio () {
    classe = Math.trunc(Math.random() * 3);
    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

//Criando lado aleatório dos mosquitos, olhando pra esquerda ou direita.
function ladoAleatorio() {
    lado = Math.trunc(Math.random() * 2);
    switch(lado) {
        case 0:
            return 'ladoA';
        case 1:
            return 'LadoB';
        
    }
}

//Criando o intervalo de tampo de spawm dos mosquitos.
let criaMosquito = setInterval(function(){
    posicaoRandom();
}, criaMosquitoTempo);


