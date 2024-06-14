// even or odd number

function evenOdd(value){
    if(value % 2 === 0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(evenOdd(22))

// sum of positive

function sumOfPositive(arr){
    let initValue = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i] > 0){
            initValue += arr[i]
        }  
    }

    return initValue;

}
console.log(sumOfPositive([0,5,10,-5,-2,5]));



// sumWhithOutHighestAndLoowestNumber

function sumWhithOutHighestAndLoowestNumber(arr){
    if(arr == null) return 0;
    return arr
    .sort((a,b) => a-b)
    .slice(1 , -1)
    .reduce((acc, current) => acc + current, 0);

}

console.log(sumWhithOutHighestAndLoowestNumber([1,5,6,8,9,3]))

// Repate str

function repateStraing(number,str){
let newStrin = "";
for(let i = 0; i < number; i++){
newStrin += str;
}
return newStrin;

}

console.log(repateStraing(5,"Bashar"))



