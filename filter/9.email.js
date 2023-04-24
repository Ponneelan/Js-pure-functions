function getData(arr,key){
    data = arr.filter((val)=>{
        index = val.mail.indexOf('@');
        domain = val.mail.substring(index+1)
        return (domain == key)
    });
    return data
}

obj = [{'name':'Ponneelan','mail':'ponneelan@gmail.com'},{'name':'maruthu','mail':'maruthu@yahoo.com'},{'name':'thangam','mail':'thangam@gmail.com'},{'name':'muthu','mail':'muthu@zohomail.com'},{'name':'rahul','mail':'rahul@gmail.com'},{'name':'deva','mail':'deva@deva.com'},];

console.log(getData(obj,'gmail.com'));