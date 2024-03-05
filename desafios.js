//Curso JS Funções

function exibirNaTela(){
    console.log('ola mundo')
}

exibirNaTela();

function exibirNome(txt){
	console.log(`ola, ${txt} !`)
}

exibirNome('witalo'); // "Olá, Witalo!"

function retornaDobro(num){
    console.log(num * 2);
}

let resultado = retornaDobro(100);
console.log(typeof resultado); // Isso imprimirá "number"

function media(n1,n2,n3){
    let media = (n1 + n2 + n3) / 3;
    console.log(media);
}


media(7,7,7);

function maior(n1,n2){
    if (n1 > n2){
        console.log('O primeiro é maior')
    } else {
        console.log('O segundo é maior')
    }
}

maior(21,14)

function multipla(n1){
    console.log(n1 * n1);
}

multipla(8)



function verificaNumero(num) {
  if (Number.isInteger(num)) {
    if (num > 0) {
      console.log("Número é positivo");
    } else if (num < 0) {
      console.log("Numero negativo");
    } else if (num == 0) {
      console.log("numero igual a zero");
    }
  } else {
    console.log("invalido");
  }
}

verificaNumero(10); // "Número é positivo"
verificaNumero("10"); // "numero invalido"
verificaNumero(3.14); // "numero invalido"
verificaNumero(-10);
verificaNumero(0);

