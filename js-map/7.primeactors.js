function primeFactors(val){
    let obj = {};
        count = 0
        for(i=1;i<=val;i++){
            if(val %i == 0){
                count++;
                obj['factor '+count] = i;
            }
        }
        return {numer : val,factors:obj}
    
}

numbers = [2,4,6,8,9,12,14,15]
let output = numbers.map((val)=>primeFactors(val)) ;

console.log(output);