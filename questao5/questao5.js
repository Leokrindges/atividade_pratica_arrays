// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

let nomes = ["Léo", "Jéssica", "Vilson", "Silvania", "Leandro"]

document.write(`Entrada: `)
for (const nome of nomes) {
    document.write(`${nome} `)
}

document.write(`<br> Inversa: `)
for (let i = nomes.length - 1; i >= 0; i--) {
    document.write(`${nomes[i]} `)
}