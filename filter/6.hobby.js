function getData(val,key){
    return ((val.hobby).includes(key));
    
}

obj = [{'name':'Ponneelan','hobby':['cricket','code','learn']},{'name':'maruthu','hobby':['code','learn']},{'name':'muthu','hobby':['cricket','learn']},{'name':'thangam','hobby':['learn']},{'name':'aravid','hobby':['cricket']},]
let data = obj.filter((val)=>getData(val,'code'));
console.log(data);