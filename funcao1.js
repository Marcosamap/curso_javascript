function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(20 , 30)
imprimirSoma(3)
imprimirSoma(2, 4, 7)
imprimirSoma()

function soma(a, b = 10){
    return a + b
}

console.log(soma(2, 7))
console.log(soma(2))