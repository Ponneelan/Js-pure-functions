arr = [{'procudt': 'soap','price':100},{'procudt': 'cake','price':300},{'procudt': 'oil','price':150},{'procudt': 'cream','price':200},{'procudt': 'rice','price':250},{'procudt': 'cookie','price':100},{'procudt': 'dosa','price':50}]

function getSum(a,b){
    
    console.log(a,"......",b,"......"); 
    if(a !== NaN){
        return a.price+b.price
    }
    return a.price+b.price
}

let reduced = arr.reduce((a,b)=>getSum(a,b));
console.log(reduced);