function getData(arr,grade){
    data = arr.filter((val)=>{
        return (val.grade >= grade)
    });
    return data;
}

obj = [{'name':'Ponneelan','grade':60},{'name':'maruthu','grade':90},{'name':'muthu','grade':50},{'name':'thangam','grade':40},{'name':'aravind','grade':70},];


console.log(getData(obj,60));