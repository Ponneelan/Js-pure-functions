let  a = [1,2,3,-1,-4,5];
let sum = 0;
a.forEach(element=>{
    if(element>0){
        sum+=element;
    }
})

console.log(sum);