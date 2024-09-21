//basic relational check

/*
function checkRelation(a, b) {
    if (a > b) {
        return a + " is greater than " + b;
    } else if (a < b) {
        return a + " is less than " + b;
    } else {
        return a + " is equal to " + b;
    }
}

console.log(checkRelation(5, 3));  
console.log(checkRelation(2, 8));  
console.log(checkRelation(7, 7));  
*/

//range check

/*
function isRange(value, min, max) {
    if (value >= min && value <= max) {
        return true;  
    } else {
        return false; 
    }
}


console.log(isRange(5, 1, 10));  
console.log(isRange(0, 1, 10));  
console.log(isRange(10, 1, 10)); 
console.log(isRange(11, 1, 10)); 
*/

//complex relational logic

function evaluateCondition(a, b, c) {
    if (a > b && a > c) {
        return "a is the largest";
    } else if (b > a && b < c) {
        return "b is between a and c";
    } else if (c < a && c < b) {
        return "c is less than a and b";
    } else {
        return "No condition met";
    }
}


console.log(evaluateCondition(10, 5, 2));  
console.log(evaluateCondition(3, 5, 7));   
console.log(evaluateCondition(8, 9, 2));   
console.log(evaluateCondition(3, 4, 5));
