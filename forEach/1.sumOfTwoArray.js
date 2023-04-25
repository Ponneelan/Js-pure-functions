let a = [1,2,3,4,5];
let b = [6,7,8,9,10];

let combined = a.concat(b);
let sum = 0;
combined.forEach((val)=>{
    sum += val;
})

console.log(sum);