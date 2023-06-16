
const findVowelOrNot = () => {
    let char = 'i';
    //or can do char= char.toLocaleLowerCase() 
    if(char== 'a' || char== 'e' || char== 'i' || char== 'o' || char== 'u' || char== 'A' || char== 'E' || char== 'I' || char== 'O' || char== 'U'){
        console.log(`${char} is a vowel`);
    }
    else{
        console.log(`${char} is a consonent`);
    }
}

findVowelOrNot();