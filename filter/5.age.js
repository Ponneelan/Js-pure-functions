function getData(arr,key){
    data = arr.filter((val)=>{
        return (val.age <= key)
    });
    return data;
}

obj = [{'name':'Ponneelan','age':21},{'name':'mathu','age':20},{'name':'maruthu','age':21},{'name':'thangam','age':20},{'name':'aravith','age':20},{'name':'rahul','age':21},{'name':'saravanan','age':21},];


console.log(getData(obj,20));