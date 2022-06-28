
function snapCrackle(maxValue){
    
    let arrayString = ""

    for(let numero = 1 ; numero <= maxValue; numero++){
        
        if(numero % 2 == 1 && numero % 5 == 0 ){

            arrayString += "snapCrakle"
            
        }else if(numero % 5 == 0 ){
            
            arrayString += 'crackle'

        }else if(numero % 2 == 1){
            
            arrayString += 'snap'

        }else{

             arrayString += (` ${numero} `)
        }

    }

    let resultadoFinal = arrayString.split(" ")

    return resultadoFinal

}

console.log(snapCrackle(12))


