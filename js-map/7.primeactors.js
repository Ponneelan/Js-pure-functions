function isPrime(num){
    if(num > 1){
        for(let i = 2; i<=num/2; i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
}

function getPrimeFactors(val){
    let temp = val;
    let factors = [];
    if(isPrime(temp)){
        factors.push(temp);
    }else{
        for(let i=2;i<=temp;i++){
            if(isPrime(i) && (temp%i == 0)){
                factors.push(i);
                temp = temp/i;
                i = 1;
                if(isPrime(temp)){
                    factors.push(temp);
                    break;
                }
            }
        }
    }
    return  {numer : val,factors:factors};
    
}

numbers = [2,4,6,12];
let output = numbers.map((val)=>getPrimeFactors(val));
console.log(output)
