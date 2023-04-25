function getWords(val,len){
    return (val.length >= len)
}

arr = ['hi','hello','hi','how','hi','hello']
let words = arr.filter((val)=>getWords(val,3));
console.log(words);
