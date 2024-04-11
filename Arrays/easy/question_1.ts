// Find the Largest element of the array

function FindLargest_1(arr:number[],n:number):number{
    arr.sort((a,b)=>a-b);
    let largestNumber = arr[n-1];
    return largestNumber;
}



function FindLargest_2(arr:number[] , n:number):number{
    let largestNumber = arr[0];
    for(let i=0;i<n;i++)
        {
        if(arr[i]>largestNumber)
            {
                largestNumber = arr[i];
            }
        }
    return largestNumber;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let n = arr.length;
let result = FindLargest_1(arr,n); //brute
let result_2 = FindLargest_2(arr,n); //optimized
console.log(result_2); // 10