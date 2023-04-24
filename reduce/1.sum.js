function sumNumbers(a,b){
    return a+b;
}
numbers = [1,2,3,4,5]
let sum = numbers.reduce((a,b)=>sumNumbers(a,b));
console.log(sum);

