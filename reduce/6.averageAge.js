obj = [{'name':'ponneelan','age':21},{'name':'thangam','age':20},{'name':'muthu','age':20},{'name':'rahul','age':19},{'name':'deva','age':20}];

function getAvgAge(a,b){
    return a+b.age;
}

let avgAge = obj.reduce((a,b)=>getAvgAge(a,b),0);

console.log(avgAge/obj.length);

