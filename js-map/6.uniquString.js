function uniqueString(arr){
    let uniq = [];
    arr.map((val)=>{
        if(!(val in uniq )){
            uniq.push(val)
        }
   })
   return uniq;
}
chars = ['w','e','q','w','e','r','w','c','x']

console.log(uniqueString(chars));