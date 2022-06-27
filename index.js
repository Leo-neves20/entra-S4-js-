
function snapCrackle(maxValue){

    for(let numero = 1 ; numero <= maxValue; numero++){
        
        if(numero % 2 == 1 && numero % 5 == 0 ){

            console.log("SnapCrackle")
            
        }else if(numero % 5 == 0 ){
            
            console.log("Crackle")

        }else if(numero % 2 == 1){
            
            console.log("Snap")

        }else{

            console.log(numero)
            
        }

    }

}

console.log(snapCrackle(12))


