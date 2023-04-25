function getData(val,key){
    return (val.gender === key);
}
arr = [{'name':'Ponneelan','gender':'male'},{'name':'Maruthu','gender':'male'},{'name':'uma','gender':'female'},{'name':'divya','gender':'female'},{'name':'muthu','gender':'male'},]

let data = arr.filter((val,key)=>getData(val,'male'));
console.log(data);
