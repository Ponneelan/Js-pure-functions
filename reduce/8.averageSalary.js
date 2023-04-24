obj = [{'name':'ponneelan','salary':21000},{'name':'thangam','salary':20000},{'name':'muthu','salary':20000},{'name':'rahul','salary':19000},{'name':'deva','salary':20000}];

function getAvgsalary(a,b){
    return a+b.salary;
}

let avgsalary = obj.reduce((a,b)=>getAvgsalary(a,b),0);

console.log(avgsalary/obj.length);