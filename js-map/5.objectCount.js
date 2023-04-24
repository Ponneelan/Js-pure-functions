function objcetCount(arr){
    obj = {}
    arr.map((val)=>{
        if(!(val.category in obj)){
            obj[val.category] = []
        }
        obj[val.category].push(val.favorite);
    });
    return obj
}


arr = [ { 'category':'cricket','favorite':'rohit'},{ 'category':'kabadi','favorite':'at'},{ 'category':'footbal','favorite':'cr7'},{ 'category':'hokey','favorite':'muthu'},{ 'category':'cricket','favorite':'polly'}]

console.log(objcetCount(arr));