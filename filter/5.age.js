function getData(val,key){
    return (val.age <= key)
    
}

obj = [{'name':'Ponneelan','age':21},{'name':'mathu','age':20},{'name':'maruthu','age':21},{'name':'thangam','age':20},{'name':'aravith','age':20},{'name':'rahul','age':21},{'name':'saravanan','age':21},];
let data = obj.filter((val)=>getData(val,20));

console.log(data);