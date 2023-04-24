function getData(arr,key){
    data = arr.filter((val)=>{
        return (val.gender === key);
    });
    return data;
}
arr = [{'name':'Ponneelan','gender':'male'},{'name':'Maruthu','gender':'male'},{'name':'uma','gender':'female'},{'name':'divya','gender':'female'},{'name':'muthu','gender':'male'},]

console.log(getData(arr,'female'));
