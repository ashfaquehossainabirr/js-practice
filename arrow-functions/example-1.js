const demo = document.getElementById("demo");
const btn = document.getElementById("btn");
let hello = "";

hello = () => {
    demo.innerHTML += this;
};

// The window object calls the function
window.addEventListener("load", hello);

// A button object calls the function
btn.addEventListener("click", hello);