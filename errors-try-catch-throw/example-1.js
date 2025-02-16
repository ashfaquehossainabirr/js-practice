const input = document.getElementById("input");
const displayText = document.getElementById("displayText");

function validation() {
    let inputValue = input.value;
    displayText.innerHTML = "";
    try {
        if(inputValue.trim() == "") throw "is empty";
        if(isNaN(inputValue)) throw "is not a number";
        let inputNumber = Number(inputValue);
        if(inputNumber > 10) throw "is too high";
        if(inputNumber < 5) throw "is too low";
    }
    catch(err) {
        displayText.innerHTML = "Input " + err;
    }
    finally {
        inputValue = "";
    }
};