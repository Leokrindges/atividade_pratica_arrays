// Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numero = Number(prompt("Digite um número para ver se está no array"))
let estaDentro = 0
let naoAchou = 0

for (const valor of numerosInteiros) {
    if (valor == numero) {
        estaDentro = numero
    } else {
        naoAchou++
    }
}

if (naoAchou == numerosInteiros.length) {
    document.write(`O número ${numero} NÃO está dentro do array`)
} else {
    document.write(`O número ${estaDentro} está dentro do array`)
}