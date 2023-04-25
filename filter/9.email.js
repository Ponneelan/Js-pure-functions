function getData(val,key){
    index = val.mail.indexOf('@');
        domain = val.mail.substring(index+1)
        return (domain == key)
}

obj = [{'name':'Ponneelan','mail':'ponneelan@gmail.com'},{'name':'maruthu','mail':'maruthu@yahoo.com'},{'name':'thangam','mail':'thangam@gmail.com'},{'name':'muthu','mail':'muthu@zohomail.com'},{'name':'rahul','mail':'rahul@gmail.com'},{'name':'deva','mail':'deva@deva.com'},];

let data = obj.filter((val)=>getData(val,'gmail.com'));

console.log(data);