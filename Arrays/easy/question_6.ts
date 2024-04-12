function leftRotateByK(nums: number[], n: number, k: number) {
    k = k % n;
    let temp: number[] = [];
  
    // Store the first 'k' elements in temp array
    for (let i = 0; i < k; i++) {
      temp.push(nums[i]);
    }
  
    // Shift the remaining elements to the left by 'k' positions
    for (let i = k; i < n; i++) {
      nums[i - k] = nums[i];
    }
  
    // Copy the elements from temp array back to nums array
    for (let i = n - k, j = 0; i < n; i++, j++) {
      nums[i] = temp[j];
    }
    return nums;
  }

  console.log(leftRotateByK([1, 2, 3, 4, 5], 5, 3)); 
