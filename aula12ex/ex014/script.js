var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var phora = document.querySelector('p#hora')
var img = document.querySelector('img#img')


phora.innerText = `Agora São ${hora}:${minuto}`

if (hora < 6 ){
    img.src = 'https://images.pexels.com/photos/3489072/pexels-photo-3489072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    document.body.style.background = '#010111'
}else if (hora < 12) {
    img.src = 'https://images.pexels.com/photos/633814/pexels-photo-633814.jpeg?auto=compress&cs=tinysrgb&w=300'
    document.body.style.background = '#e2cd9f'
}else if (hora < 18) {
    img.src = 'https://images.pexels.com/photos/547050/pexels-photo-547050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    document.body.style.background = '#b9846f'
}
