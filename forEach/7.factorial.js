let a = [1,2,3,4,5];

a.forEach((val)=>{
    console.log(`factorial of ${val} is ${fact(val)}`);
});

function fact(number){
    if(number==1)
        return 1
    return number*fact(number-1);
}
