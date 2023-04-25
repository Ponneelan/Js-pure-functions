function anagram(val,arr){
    let matched=[];
        arr.map((pick)=>{
            if(val.split('').sort().join('') == pick.split('').sort().join('')){
                matched.push(pick);
            }
        });
        return {word : val , anagram:matched}
}


let arr = ['dog', 'god', 'act', 'cat', 'tac'];
let output = arr.map((val)=>anagram(val,arr));
console.log(output);