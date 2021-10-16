let numeroAlunos = 6

let listaAlunos = ['Francisco', 'Marília', 'Helena', 'Caio', 'Edgar', 'Rebeca']

for(let contador = 0; contador < listaAlunos.length; contador++){
    //console.log(contador)

    if(contador == 0){
        console.log(contador + ': ZERO: ' + listaAlunos[contador]) //concatenação
    } else if (contador % 2 == 1) {
        console.log(`${contador}: ÍMPAR: ${listaAlunos[contador]}`) //interpolação - template strings
    } else {
        console.log(`${contador}: PAR: ${listaAlunos[contador]}`)
    }
}