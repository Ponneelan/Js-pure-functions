let obj = {};

function objcetCount(val){
        if(!(val.category in obj)){
            obj[val.category] = []
        }
        obj[val.category].push(val.favorite);
}


arr = [ { 'category':'cricket','favorite':'rohit'},{ 'category':'kabadi','favorite':'at'},{ 'category':'footbal','favorite':'cr7'},{ 'category':'hokey','favorite':'muthu'},{ 'category':'cricket','favorite':'polly'}]

let output = arr.map((val)=>{objcetCount(val)});
console.log(obj);
