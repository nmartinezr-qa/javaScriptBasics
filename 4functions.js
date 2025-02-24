function add(a, b) {
    return a + b;
}   

function subtract(a, b) {
    return a - b;
}

console.log(add(2, 3)); // 5

// Anonymous function -- function without a name -- function expression
const multiply = function(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6