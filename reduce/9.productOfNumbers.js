function porductOfNumber(a,b){
    return a*b;
}
numbers = [1,2,3,4,5]
let porduct = numbers.reduce((total,element)=>porductOfNumber(total,element),1);
console.log(porduct);

