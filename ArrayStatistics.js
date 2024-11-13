// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//create function that has argument which pass an array
//find sum
//find average
//find min and max
function arrayStats(arr){
            
    let sum=arr.reduce(accumulator);
    let average=sum/(arr.length);
    let maxNumber=Math.max(...arr);
    let minNumber=Math.min(...arr);


    function accumulator(values,add){
        return values+=add;
    }
     let arrStats={
         sum:sum,
         avg:average,
         maxNumber:maxNumber,
         minNumber:minNumber

    }
    // let avg=sum/arrayStats.length
    return arrStats;
}
console.log(arrayStats([1,2,3,4,5,6,7,8,9]));
