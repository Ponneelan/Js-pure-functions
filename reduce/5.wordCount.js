words = ['ponneelan','maruthu','maruthu','muthu','muthu','ponneelan','muthu'];

function getCount(a,b){

    a[b] = (a[b]|| 0) + 1
    return a;
}

let wordCount = words.reduce((a,b)=>getCount(a,b),{});

console.log(wordCount);