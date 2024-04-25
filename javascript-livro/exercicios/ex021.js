function estacao(n){
    if(n < 3 || n === 12){
        console.log('Verão')
    }else if(n < 6){
        console.log('Outono')
    }else if(n < 9){
        console.log('Inverno')
    }else{
        console.log('Primavera')
    }
}

estacao(4)