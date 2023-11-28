let listaDeNumerosSorteados = [];
let quantidadeNumerosLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

};

function exibirTextoInicial(){
    
    exibirTextoNaTela('h1', 'jogo do numero secreto' );
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10:' );
};

exibirTextoInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}, Parabens!!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        };
        tentativas++;
        limpaCampo();
    };
};

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * quantidadeNumerosLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == quantidadeNumerosLimite){
        listaDeNumerosSorteados = [];
    };
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    };
};

function limpaCampo(){
    chute = document.querySelector('input')
    chute.value = ''
};

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limpaCampo();
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};