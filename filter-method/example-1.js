// Variables
let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

const companies = [
    {name: "Company One", category: "Retail", start: 2003, end: 2010},
    {name: "Company Two", category: "Technology", start: 2005, end: 2014},
    {name: "Company Three", category: "Finance", start: 2002, end: 2007},
    {name: "Company Four", category: "Auto", start: 2001, end: 2015},
    {name: "Company Five", category: "Retail", start: 2004, end: 2008},
];



// Filter Polyfill
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
};




// filter method - 1
// let canApply = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 18) {
//         canApply.push(ages[i]);
//     };
// };

// console.log(canApply);


// filter method - 2
// const canDrink = ages.filter(function(age) {
//     if(age >= 18) {
//         return true;
//     };
// });

// const canDrink = ages.filter(age => age >= 21)

// console.log(canDrink);

// const retailCompanies = companies.myFilter(function(company) {
//     if(company.category === "Retail") {
//         return true;
//     };
// });

// console.log(retailCompanies);