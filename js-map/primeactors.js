function primeFactors(arr){
    prime = arr.map((val)=>{
        obj = {}
        count = 0
        for(i=0;i<=val;i++){
            if(val %i == 0){
                count++;
                obj['factor'+count] = i;
            }
        }
        return {numer : val,factors:obj}
    });
    return prime
}

numbers = [2,4,6,8,9,12,14,15]

console.log(primeFactors(numbers));