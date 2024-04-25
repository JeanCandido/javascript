function MaiorEntre(n1, n2, n3){
    if(n1>n2 && n1>n3){
        console.log(`${n1} é maior que ${n2} e ${n3}`)
    }else if(n2>n1 && n2>n3){
        console.log(`${n2} é maior que ${n1} e ${n3}`)
    }else if(n3>n1 && n3>n1){
        console.log(`${n3} é maior que ${n1} e ${n2}`)
    }
}

MaiorEntre(9, 100, 100)