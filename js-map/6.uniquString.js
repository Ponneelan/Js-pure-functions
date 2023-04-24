function uniqueString(arr){
    let uniq = [];
    arr.map((val)=>{
        if(!(uniq.includes(val) )){
            uniq.push(val)
        }
   })
   return uniq;
}
chars = ['w','e','q','w','e','r','w','c','x']

console.log(uniqueString(chars));