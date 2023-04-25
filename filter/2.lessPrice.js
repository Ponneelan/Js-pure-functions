function getObj(val,amount){
    return (val.price <= amount);
}

arr = [{'procudt': 'soap','price':100},{'procudt': 'cake','price':300},{'procudt': 'oil','price':150},{'procudt': 'cream','price':200},{'procudt': 'rice','price':250},{'procudt': 'cookie','price':100},{'procudt': 'dosa','price':50}]
let data = arr.filter((val)=>getObj(val,150));
console.log(data);