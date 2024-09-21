//Basic Arithmetic

/*
function Arithmetic(a,b){
let add=a+b;
let multi=a*b;
let sub=a-b;
let div=a/b

console.log(add,"addition")
console.log(multi,"multiplication")
console.log(sub,"subtraction")
console.log(div,"division")
}
Arithmetic(10,5)
*/

//calculate avg
/*
function calculateAverage(numbers){
    let sum=0
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
let avg=sum/numbers.length
console.log(avg)
}

calculateAverage([1,2,3,4,5,6])
*/

//complex calculation

function complexcalculation(a,b,c){
    let result =(a+b)*c/(b-a)
    console.log(result)
}
complexcalculation(2,4,6)
