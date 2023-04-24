a = ['ponneelan','maruthu','muthu','thangam']

function returnCapitalized(arr){
    return arr.map((e)=>{
        e[0].toUpperCase();
        return e;
    })
}

console.log(returnCapitalized(a))