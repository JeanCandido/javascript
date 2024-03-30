function verificarPalindromo(palavra){
    var palavraInvertida = palavra.split('').reverse().join('')
    if(palavra == palavraInvertida){
        console.log(palavra + " é um palíndromo")
    }else{
        console.log(palavra + ' não é um palíndromo')
    }
}

verificarPalindromo('gato')