let word = 'ponneelan';

let output ='';
 word.split('').forEach((val,index)=>{
    let str = ((index > 0) && (index % 2 !== 0))? val.toUpperCase():val;
    output = output +''+  str
});

console.log(output);