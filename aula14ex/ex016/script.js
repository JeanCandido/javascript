function calcular(){
    var inicio = parseInt(document.getElementById('inicio').value)
    var fim = parseInt(document.getElementById('fim').value)
    var passo = parseInt(document.getElementById('passo').value)
    var cres = document.getElementById('cres')
    var pres = document.getElementById('pres')

    var numeros = ''

    if (isNaN(passo) || passo === 0){
        alert('Passo inválido! fazendo a contagem de 1 em 1')
        pres.innerText ='Contando:'
        passo = 1
    }

    if (isNaN(inicio) || isNaN(fim) || inicio >= fim){
        pres.innerText = 'Impossivel Contar!'
        cres.innerText = ''
    }else{
        pres.innerText = 'Contando:'

        for(var i = inicio; i <= fim; i += passo){
            numeros += i + ' &#128077;'
        }

        cres.innerHTML = numeros + '&#127937;'
    }
    
}