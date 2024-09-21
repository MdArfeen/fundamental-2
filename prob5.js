//Basic logical operations


/*
function logicalOperations(a, b) {

    let andResult = a && b;   
    let orResult = a || b;    
    let notA = !a;            
    let notB = !b;           

    
    return {
        and: andResult,
        or: orResult,
        notA: notA,
        notB: notB
    };
}

// Example usage
let result = logicalOperations(true, false);
console.log("AND result: " + result.and);  
console.log("OR result: " + result.or);    
console.log("NOT a: " + result.notA);
console.log("NOT b: " + result.notB);
*/

//eligbilty check

/*
function isEligible(age, hasPermission) {

    if (age >= 18 && hasPermission) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}


console.log(isEligible(20, true)); 
console.log(isEligible(16, true));  
console.log(isEligible(19, false)); 
console.log(isEligible(18, true));  
*/

//complex logic

function evaluateCondition(a, b, c) {
    if (a > 0 && b < 0) {
        return "a is positive and b is negative";
    } else if (b === 0 && isNaN(c)) {
        return "b is zero and c is not a number";
    } else if (a !== b || c > 10) {
        return "a is not equal to b or c is greater than 10";
    } else {
        return "No condition met";
    }
}

// Example usage
console.log(evaluateCondition(5, -3, "test")); 
console.log(evaluateCondition(1, 0, NaN));     
console.log(evaluateCondition(2, 2, 11));       
console.log(evaluateCondition(3, 3, 5));       
