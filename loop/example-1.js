// let i = 0;

// do{
//     console.log("The number is " + i);
//     i++;
// } while(i <= 10);





// DOM Section
const display = document.getElementById("display");
let text = "";
let i = 0;

do{
    text += "<br>The number is " + i;
    i++;
} while(i <= 10);

display.innerHTML = text;