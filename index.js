const prompt = require("prompt-sync")({sigint:true});

let qtdeNotas = +prompt("Digite a quantidade de notas que deseja inserir: ");
console.log(qtdeNotas);
function entradaDeNotas(qtde){
    let notas = [];
    let nota = 0;

    for(let i = 0; i < qtde; i++){
        nota = +prompt(`Digite uma nota ${i+1}: `)
        notas.push(nota);        
    }

    return somaValoresArrey(notas);
}

function somaValoresArrey(array){
    let soma = 0;

    //o erro estava na escrita lenght
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
   
    return calculaMedia(soma, array.length);
}

function calculaMedia(soma, qtde){
    let media = soma / qtde;
    return media;
}

console.log(`A média das notas inseridas é: ${entradaDeNotas(qtdeNotas)}`);