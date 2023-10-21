// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.


let arrayPerfeito = []
let contador = 1
let quantidadeNumerosPerfeitos = 0


while (quantidadeNumerosPerfeitos < 4) {
    let soma = 0
    for (let i = 1; i < contador; i++) {
        if (contador % i == 0) {
            soma += i;
        }
    }

    if (contador == soma) {
        arrayPerfeito.push(soma)
        console.log("è perfeito")
        quantidadeNumerosPerfeitos++
    }
    contador++
}
document.write(arrayPerfeito)