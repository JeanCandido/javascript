let num = [5,8,2,9,3]
num.push(7)
num.push(3928)

console.log(`Nosso vetor tem ${num.length} elementos sendo eles ${num} em ordem fica ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)

if (pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor esta na posião ${pos}`)
}