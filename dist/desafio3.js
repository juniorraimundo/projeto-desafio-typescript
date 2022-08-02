"use strict";
/**

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});


    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
//Solução
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
;
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoAtual = 0;
// para o saldo iniciar zerado
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoAtual += soma;
        campoSaldo.innerHTML = saldoAtual.toString();
        limparInputSoma();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        saldoAtual = 0;
        campoSaldo.innerHTML = saldoAtual.toString();
        limparInputSoma();
    }
}
function limparInputSoma() {
    soma.value = '';
}
botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
