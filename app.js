// crtl + shift + i
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

//lista de numeros sorteados
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //numero aleatorio
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    //verificação se esta na lista
    return gerarNumeroAleatorio(); //recursão
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido); //se não tiver adiciona na lista
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

//função com parametro
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

//função sem retorno
function verificarChute() {
  let numeroSecreto = gerarNumeroAleatorio();
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto é menor");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

//limpar campo
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

//função com retorno
// function gerarNumeroAleatorio() {
//   return parseInt(Math.random() * 10 + 1);
// }

//função reiniciar jogo
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

//função exibir mensagem inicial
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();
