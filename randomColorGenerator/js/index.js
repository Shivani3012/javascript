const getColor = () => {
    //Hex code
    const randonNumber = Math.floor(Math.random() * 16777215) ; //multiplied for getting hex codes
    //console.log(randonNumber);
    const randomCode = "#"+randonNumber.toString(16); //16 stands hexadecimal 
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener('click', getColor);

getColor();