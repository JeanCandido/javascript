function podeVotar(idade){
    if(idade < 16){
        console.log('Não pode votar')
    }else if(idade < 18 || idade > 70){
        console.log('Voto opcional')
    }else if (idade >= 18 ){
        console.log('Voto Obrigatorio')
    }
} 

podeVotar(15)