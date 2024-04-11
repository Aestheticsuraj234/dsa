function isSorted(arr:number[],n:number):boolean{
    for(let i=1;i<n-1;i++)
        {
           if(arr[i]>=arr[i+1])
            {

            }
            else return false;
        }
    return true;

}


// use

let arr = [1,2,3,4,5,6,7,8,9,10];
let n = arr.length;
console.log(isSorted(arr,n)); // true