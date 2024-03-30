function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    if(imc < 18.5){
        console.log('Abaixo do Peso')
    }else if(imc < 25){
        console.log('Normal')
    }else{
        console.log('Gordo')
    }
}

calcularIMC(60, 1.70)