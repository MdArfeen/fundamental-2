//simple if statement

/*
function isodd(value){
if(value%2==0){
    console.log("even")
}else{
    console.log("odd")
}
}

isodd(42)
*/

//Grade evaluation
/*
function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";
    } else {
        return "Invalid score"; 
    }
}

console.log(evaluateGrade(95)); 
console.log(evaluateGrade(85)); 
console.log(evaluateGrade(75)); 
console.log(evaluateGrade(65)); 
console.log(evaluateGrade(50)); 
console.log(evaluateGrade(110)); 
*/


//Discount calculation

function calculateDiscount(price, isMember) {
    let discount = 0;

    if (isMember) {
        discount = 0.10; 
    }
    let discountedPrice = price - (price * discount);
    return discountedPrice;
}

// Example usage
console.log(calculateDiscount(100, true));  
console.log(calculateDiscount(100, false)); 
console.log(calculateDiscount(50, true));   
console.log(calculateDiscount(50, false));  

