str = 'ponneelan'

function countCharacter(text){
    obj = {}
    arr = text.split('');
    arr.map((val)=>{
        if(val in obj){
            obj[val] += 1;
        }else{
            obj[val] = 1;
        }
    });
    return obj;
}

console.log(countCharacter(str))