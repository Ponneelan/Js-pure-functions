let mapped={};
function mapAge(val){
    
    if(!(val.age.toString() in mapped)){
        mapped[val.age] = [];
    }
    mapped[val.age].push(val.name)
};

obj = [{name:'Ponneelan',age:21},{name:'muthu',age:20},{name:'thangam',age:20},{name:'deva',age:21},{name:'rahul',age:21}]

let  output = obj.map((val)=>mapAge(val));
console.log(mapped)