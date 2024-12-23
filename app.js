function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

exibirMensagemInicial();

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Muito bem você acertou em ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', ' O número Secreto é Menor');
        }else{
            exibirTextoNaTela('p', 'O núero secreto é Maior');
        }
        tentativas++;

    }
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
