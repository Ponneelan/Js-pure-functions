function getObj(arr,amount){
    data = arr.filter((val)=>{
        return (val.price <= amount);
    });
    return data;
}

arr = [{'procudt': 'soap','price':100},{'procudt': 'cake','price':300},{'procudt': 'oil','price':150},{'procudt': 'cream','price':200},{'procudt': 'rice','price':250},{'procudt': 'cookie','price':100},{'procudt': 'dosa','price':50}]

console.log(getObj(arr,150));