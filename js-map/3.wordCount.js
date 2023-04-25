words = ['hi','hello','hi','how','hi','hello']

function countWord(arr){
    let obj= {}
    arr.map((val)=>{
            obj[val] = (obj[val] || 0) + 1;
    });
    return obj;
}

console.log(countWord(words))