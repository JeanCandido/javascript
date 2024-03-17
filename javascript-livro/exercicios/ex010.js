function calc(nota1, nota2){
    var media = (nota1 + nota2) / 2
    if (media >= 7){
        console.log("Aluno aprovado com a média " + media)
    }else{
        console.log("Aluno reprovado com a média " + media)
    }
}

calc(6.99,6.99)

calc(70, -56)