function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var div = document.createElement('div')

        div.setAttribute('id' , 'fundo')
        div.style = 'background-color:#000000; width:250px; height: 250px; border-radius:50%; display: flex; flex-direction: column; align-items: center;'
        img.setAttribute('id', 'foto')
        img.style = 'background-color:#0044FF; width:200px; height: 200px; border-radius:50%;'
        
        if (fsex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade < 10){
                //Criança
            }else if (idade < 21){
                //jovem
            }else if (idade < 60){
                //Adulto
            }else {
                //Idoso
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança

            }else if (idade < 21){
                //jovem
            }else if (idade < 60){
                //Adulto
            }else {
                //Idoso
            }
        }
        res.innerHTML = `Voce é ${genero} e tem ${idade} anos`
        res.appendChild(div)
        div.appendChild(img)
    }
}