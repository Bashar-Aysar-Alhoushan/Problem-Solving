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

