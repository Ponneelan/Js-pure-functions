function getAvg(a,b){
    return (a+b);
}

arr=[1,2,3,4,5]

let avg = arr.reduce((a,b)=>getAvg(a,b),0);

console.log(avg/arr.length);
