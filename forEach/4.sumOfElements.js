let a = [1,2,3,4,5,6,7];
let b = [8,9,10,11,12,13,14];

let output = []
a.forEach((val,index)=>{
    output.push(val+b[index])
});

console.log(output);