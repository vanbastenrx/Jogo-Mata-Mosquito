'use strict'
//Iniciando o jogo.

document.getElementById('start').addEventListener('click', function(){
        let nivel = document.getElementById('nivel').value;
        window.location.href = 'app.html?' + nivel;   
});

