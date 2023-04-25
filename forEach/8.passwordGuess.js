let pin = 1234;
let attempts = 0;

let guesses = [1111, 1234, 2222, 1212, 1234, 1120];

function geussPassword(option) {
    attempts++;
    if (option == pin) {
        console.log('correct');
        return true;
    }
    console.log('wrong');
    return false;
}

guesses.forEach((val) => {
    if (attempts <4) {
        geussPassword(val);
        return
    }else{
        console.log("attempts exceed");
    }
});