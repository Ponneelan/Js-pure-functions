function anagram(arr){
    let anagrams = arr.map((val)=>{
        let matched=[];
        arr.map((pick)=>{
            if(val.split('').sort().join('') == pick.split('').sort().join('')){
                matched.push(pick);
            }
        });
        return {word : val , anagram:matched}
    });

    return anagrams;
}


arr = ['dog', 'god', 'act', 'cat', 'tac'];

console.log(anagram(arr));