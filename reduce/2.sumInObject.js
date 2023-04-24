arr = [{'procudt': 'soap','price':100},{'procudt': 'cake','price':300},{'procudt': 'oil','price':150},{'procudt': 'cream','price':200},{'procudt': 'rice','price':250},{'procudt': 'cookie','price':100},{'procudt': 'dosa','price':50}]

function getSum(a,b){
    return a+b.price
}
let sum =  arr.reduce((a,b)=>getSum(a,b),0);
console.log(sum);