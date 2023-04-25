function getData(val,grade){
    return (val.grade >= grade)
}

obj = [{'name':'Ponneelan','grade':60},{'name':'maruthu','grade':90},{'name':'muthu','grade':50},{'name':'thangam','grade':40},{'name':'aravind','grade':70},];
let data = obj.filter((val)=>getData(val,60));
console.log(data);