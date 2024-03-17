function calcular(){
    var num = document.querySelector('input#num').value
    var list = document.querySelector('select#list')

    if (num === '') {
        alert('O campo está vazio. Por favor, digite um número.');
    } else if (isNaN(num)) {
        alert('Não é possível contar! Digite um número válido.');
    } else {
        list.innerHTML = ''

        for (var i = 1; i <= 10; i++){
            var option = document.createElement('option')
            option.value = num * i
            option.textContent = num + ' x ' + i + ' = ' + (num * i)
            list.appendChild(option)
        }
    }
}