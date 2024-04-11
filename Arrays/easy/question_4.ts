// Remove duplicates from Sorted array


// BRUTE FORCE APPROACH

function removeDuplicatesB(nums:number[] , n:number):number{
   let st = new Set<number>();
    for(let i=0;i<n;i++)
    {
         st.add(nums[i]);
    }
    let i = 0;
    for(let val of st)
    {
        nums[i] = val;
        i++;
    }
    return st.size;
}


// Time complexity: O(n)
// Space complexity: O(1)

function removeDuplicates(nums:number[] , n:number):number{
   let i = 0;
   for(let j=1;j<n;j++)
    {
        if(nums[j]!==nums[i])
        {
            nums[i+1] = nums[j];
            i++;
        }
    }
    return i+1;


}


console.log(removeDuplicates([1,1,2],3)); //2