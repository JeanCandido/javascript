let num = [9,2,3,4,5,1,7]
num.sort()

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

/*
for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/