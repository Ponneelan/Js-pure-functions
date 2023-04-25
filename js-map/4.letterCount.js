str = 'ponneelan'

let obj = {};
let arr = str.split('');

function countCharacter(val){
    obj[val] = (obj[val]||0) + 1;  
}

let output = arr.map((val)=>{countCharacter(val)});
console.log(obj);
