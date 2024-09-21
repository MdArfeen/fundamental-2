//comparison operators

/*
function compareNumbers(a,b){
    if(a>b){
        console.log("greater than")
    }
    else if(a<b){
        console.log("smaller than")
    }
    else if(a==b){
        console.log("equal to")
    }
}
compareNumbers(1,10)
compareNumbers(10,1)
compareNumbers(10,10)
*/

//comparison tables
/*

function compareNumbers(list, value) {
    for (let i = 0; i < list.length; i++) {
        let num = list[i];

        console.log("Comparing " + num + " with " + value + ":");
        console.log("  " + num + " <  " + value + ": " + (num < value));
        console.log("  " + num + " >  " + value + ": " + (num > value));
        console.log("  " + num + " <= " + value + ": " + (num <= value));
        console.log("  " + num + " >= " + value + ": " + (num >= value));
    }
}

// Example usage
var numbersList = [3, 5, 7, 9, 1];
var compareValue = 5;

compareNumbers(numbersList, compareValue);
*/


//comparison challenges
function comparethreenum(a,b,c){
    if(a<b){
        console.log(b,"is greater")
    }
    if(a>c){
        console.log(a,"is smaller")
    }
    if(b>c){
        console.log(b,"is greater")
    }
}
comparethreenum(10,11,12);
