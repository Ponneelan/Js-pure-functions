obj = [{'category':'ponneelan','cost':21000},{'category':'thangam','cost':20000},{'category':'ponneelan','cost':20000},{'category':'thangam','cost':19000},{'category':'deva','cost':20000}];
 

let totalCost = obj.reduce((a,b)=>{
    category = b.category;
    cost = b.cost;
    a[category] = (a[category] || 0 ) + cost;
    return a;
},{});

console.log(totalCost);