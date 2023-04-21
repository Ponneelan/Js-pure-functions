function objcetCount(arr){
    obj = {}
    arr.map((val)=>{
        obj[val.category] = val;
    });
    return obj
}


arr = [ { 'category':'cricket','favorite':'rohit'},{ 'category':'kabadi','favorite':'at'},{ 'category':'footbal','favorite':'cr7'},{ 'category':'hokey','favorite':'muthu'}]

console.log(objcetCount(arr));