function getEvenNymbers(val){
    return (val % 2 == 0)
}

arr = [1,2,3,4,5,6,7,8,9,10]
let evenNumber = arr.filter((val)=>getEvenNymbers(val));

console.log(evenNumber);