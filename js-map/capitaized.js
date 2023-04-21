a = ['ponneelan','maruthu','muthu','thangam']

function returnCapitalized(arr){
    return arr.map((e)=>{
        return e.toUpperCase();
    })
}

console.log(returnCapitalized(a))