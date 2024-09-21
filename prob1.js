//Check Truthiness
/*
function istruthy(value){
if(value==1){
    console.log(true)
}else{
    console.log(false)
}
}

istruthy(1)
istruthy(0)
istruthy("")
istruthy("hello")
istruthy([])
istruthy(null)
*/

//falsy values count

/*
function countfalsyvalues(arr){
let count=0
for(let i=0;i<arr.length;i++){
    if(!arr[i]){
        count++
    }
}
console.log(count)
}
countfalsyvalues([1,0,0,0,1])
*/

//filter truthy values

function filterTruthy(value) {
    return value >= 1;
  }
  
  const filtered = [1,0,0,1,1].filter(filterTruthy);
  console.log(filtered)