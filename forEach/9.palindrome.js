a = ['ponneelan','malayalam','appa'];

a.forEach(element => {
    if(element.split('').reverse().join('') == element){
        console.log(`${element} is palindrome`);
    }else{
        console.log(`${element} is Not a palindromes`);
    }
});