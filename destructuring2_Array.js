const [a] = [10]
console.log(a)
const [n1, ,n3, ,n5,n6 = 0] = [10,23,34,45]
console.log(n1,n3,n5,n6)
const [ ,[ , nota]] = [[ , 6, 8], [5,4,3]]
console.log(nota)