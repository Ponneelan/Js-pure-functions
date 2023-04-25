const arr = ["apple", "banana", "pear", "orange"];


let large = arr.reduce((a,b)=>{return a.length > b.length ? a : b},'');

console.log(large);