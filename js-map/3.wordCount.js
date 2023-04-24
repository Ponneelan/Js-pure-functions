words = ['hi','hello','hi','how','hi','hello']

function countWord(arr){
    obj= {}
    arr.map((val)=>{
        if(!(val in obj)){
            obj[val] = 1;
        }else{
            obj[val] += 1
        }
    });
    return obj;
}

console.log(countWord(words))