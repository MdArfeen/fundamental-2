//prefix vs postfix

/*
function prefixPostfixDemo() {
    let a = 5;

    console.log("Initial value of a: " + a);

    
    console.log("Using postfix (a++):");
    console.log("Value before incrementing (postfix): " + a);
    let postfixResult = a++;
    console.log("Value after postfix increment: " + postfixResult); 
    console.log("Current value of a after postfix: " + a); 


    a = 5;
    
    console.log("\nUsing prefix (++a):");
    console.log("Value before incrementing (prefix): " + a);
    let prefixResult = ++a;
    console.log("Value after prefix increment: " + prefixResult); 
    console.log("Current value of a after prefix: " + a); 
}


prefixPostfixDemo();
*/

//prefix & postfixcalculation

/*
function calculatePrefixPostfix(a, b) {
    
    let originalA = a;
    let originalB = b;


    let postfixA = a++;
    let postfixB = b++;

    
    a = originalA;
    b = originalB;


    let prefixA = ++a;
    let prefixB = ++b;

    return {
        postfixResults: {
            a: postfixA,
            b: postfixB
        },
        prefixResults: {
            a: prefixA,
            b: prefixB
        }
    };
}

// Example usage
let results = calculatePrefixPostfix(3, 4);
console.log("Postfix results: ", results.postfixResults);
console.log("Prefix results: ", results.prefixResults);   
*/

//complex prefix and postfix operation

function complexOperation(a, b) {
    console.log("Initial values: a =", a, ", b =", b);
    
    
    let step1 = a++;
    console.log("After postfix increment on a (a++): a =", a, ", step1 =", step1);


    let step2 = ++b;
    console.log("After prefix increment on b (++b): a =", a, ", b =", b, ", step2 =", step2);


    let step3 = b++;
    console.log("After postfix increment on b (b++): a =", a, ", b =", b, ", step3 =", step3);

    
    let step4 = ++a;
    console.log("After prefix increment on a (++a): a =", a, ", b =", b, ", step4 =", step4);

    
    let finalResult = step1 + step2 * step3 - step4;
    console.log("Final result (step1 + step2 * step3 - step4):", finalResult);
    
    return finalResult;
}


let result = complexOperation(3, 4);
console.log("Final calculated result:", result);
