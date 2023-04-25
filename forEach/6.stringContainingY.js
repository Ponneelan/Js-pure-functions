let a = ['ponneelan','sky','fly','muthu']

a.forEach((val)=>{
    if(val.includes('y')){
        console.log("yes");
        return;
    }
    console.log("no");
});