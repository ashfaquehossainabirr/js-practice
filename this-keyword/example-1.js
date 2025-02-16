const display = document.getElementById("demo");

// Create an object
const person = {
    firstName: "Abir",
    lastName: "Hossain",
    age: 24,
    location: "Dhaka",

    summary: function() {
        return this.firstName + " " + this.lastName + "'s age is " + this.age + ", and he lives in " + this.location + ".";
    }
};

display.innerHTML = person.summary();