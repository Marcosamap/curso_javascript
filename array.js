const valores = [7.7, 3.3, 5.5, 9.9, 2.2, ]
console.log(valores[0], valores[4])
console.log(valores[5])

valores[5] = 100
console.log(valores)

valores.push({id: 3}, false, true, 'Marcos')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
valores[6] = 40
console.log(valores)