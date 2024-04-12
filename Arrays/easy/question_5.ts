// Left rotate an array by one

function leftRotateByOne(nums: number[], N: number) {
  let temp = nums[0];
  for (let i = 1; i < N; i++) {
    nums[i - 1] = nums[i];
  }

  nums[N - 1] = temp;

  return nums;
}

  

console.log(leftRotateByOne([1, 2, 3, 4, 5], 5)); //[2,3,4,5,1]
