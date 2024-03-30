function situacaoEstudante(mediaFinal){
    if(mediaFinal < 7){
        console.log('EM RECUPERAÇÂO')
    }else if(mediaFinal < 5){
        console.log('REPROVADO')
    }else{
        console.log('APROVADO')
    }
}

situacaoEstudante()