let uniq = [];
function uniqueString(val){
    if(!(uniq.includes(val) )){
        uniq.push(val)
    }
}

chars = ['w','e','q','w','e','r','w','c','x']
let output  = chars.map((val)=>uniqueString(val));
console.log(uniq);