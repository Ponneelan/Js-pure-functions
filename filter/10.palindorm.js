function palindrom(arr){
    data = arr.filter((val)=>{
        let letter = val.split('');
        let arrayOfchar = letter.reverse();
        let reverse = arrayOfchar.join('');
        return (val == reverse);
    });
    return data;
}


let words = ['amma','malayalam','appa','hello','hi','thagam']

console.log(palindrom(words));