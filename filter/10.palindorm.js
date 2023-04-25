function palindrom(val){
    return (val == val.split('').reverse().join(''));
}


let words = ['amma','malayalam','appa','hello','hi','thangam']
let data = words.filter((val)=>palindrom(val));
console.log(data);