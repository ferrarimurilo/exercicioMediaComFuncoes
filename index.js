const prompt = require("prompt-sync")({sigint:true});

let qtdeNotas = +prompt("Digite a quantidade de notas que deseja inserir: \n");
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

    for(let i = 0; i < array.lenght; i++){
        soma += array[i];
    }

    return soma;
}


console.log(`A média das notas inseridas é: ${entradaDeNotas(qtdeNotas)}`);