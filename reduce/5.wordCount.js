words = ['ponneelan','maruthu','maruthu','muthu','muthu','ponneelan','muthu'];


let obj = {};
function getCount(a,b){

    if(!(b in obj)){
        obj[b] = 1;
    }else{
        obj[b] += 1; 
    }
    return obj;
    
}

let count = words.reduce((a,b)=>getCount(a,b),0);

console.log(count);