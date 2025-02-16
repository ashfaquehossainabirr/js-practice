const convertObject = (input_array) => {
    const outputObject = {};
    for (const item of input_array) {
        const key = Object.keys(item)[0];
        const value = item[key];
        outputObject[key] = value;
    }
    return outputObject;
}

let todoLists = [
    {
        1: "code"
    },
    {
        2: "run"
    }
];

console.log(convertObject(todoLists));