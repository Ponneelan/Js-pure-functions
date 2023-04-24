function getData(arr,key){
    data = arr.filter((val)=>{
        return ((val.hobby).includes(key));
    });
    return data;
}

obj = [{'name':'Ponneelan','hobby':['cricket','code','learn']},{'name':'maruthu','hobby':['code','learn']},{'name':'muthu','hobby':['cricket','learn']},{'name':'thangam','hobby':['learn']},{'name':'aravid','hobby':['cricket']},]

console.log(getData(obj,'code'))