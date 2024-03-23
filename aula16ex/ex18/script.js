var nums = []
var list = document.querySelector('#list')

function add(){

    var ntxt = document.getElementById('num')
    var num = ntxt.value

    if ( num < 1 || num > 100 || isNaN(num)){
        alert('Numero invalido')
    }else if (nums.includes(num)){
        alert('Voce não pode inserir um numero 2 vezes')
    }else {
        var noption = document.createElement('option')
        nums.push(num)

        noption.innerText = `numero ${num} adicionado`;
        

        list.add(noption)
    }

    ntxt.value = ''
    ntxt.focus()
}

function finalizar(){
    if (nums.length == 0 ){
        alert('adicione numeros')
    }else{
        list.innerText = ''
        nums.sort()
        var res = document.querySelector('#res')
        let maior = nums[nums.length - 1]
        let menor = nums[0]


        res.innerHTML += `<p>Ao todo temos ${nums.length} numeros cadastrados</p>`
        res.innerHTML += `<p>maior valor inserido foi ${maior}</p>`
        res.innerHTML += `<p>menor valor inserido foi ${menor}</p>`


    }
}