function getWords(arr,len){
    words = arr.filter((val)=>{
        return (val.length >= len)
    })
    return words
}

arr = ['hi','hello','hi','how','hi','hello']

console.log(getWords(arr,4));
