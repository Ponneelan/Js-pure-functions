a = ['ponneelan','maruthu','muthu','thangam']

function returnCapitalized(e){
    return e[0].toUpperCase() + e.slice(1);
}

let capitalized = a.map((val)=>returnCapitalized(val));
console.log(capitalized)