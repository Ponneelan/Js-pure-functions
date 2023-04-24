function mapAge(obj){
    let mapped={};
    obj.map((val)=>{
        if(!(val.age.toString() in mapped)){
            mapped[val.age] = [];
        }
        mapped[val.age].push(val.name)

    });
    console.log(mapped)
}


obj = [{name:'Ponneelan',age:21},{name:'muthu',age:20},{name:'thangam',age:20},{name:'deva',age:21},{name:'rahul',age:21}]

console.log(mapAge(obj))