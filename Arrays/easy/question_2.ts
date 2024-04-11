//*Second Largest Number in an Array

// !* Brute Force Solution

function SecondLargestNumber_BRUTE(arr: number[], n: number): number {
  arr.sort((a, b) => a - b);
  let Largest = arr[n - 1];
  let secondLargest = Number.MIN_SAFE_INTEGER;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== Largest) {
      secondLargest = arr[i];
      break;
    }
  }
  return secondLargest;
}

// !* Better Solution

function SecondLargestNumber_BETTER(arr: number[], n: number): number {
  let Largest = arr[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (arr[i] > Largest) {
      Largest = arr[i];
    }
  }

  for(let i=0;i<n;i++)
    {
        if(arr[i]>secondLargest && arr[i] !== Largest)
        {
            secondLargest = arr[i]
        }
    }

    return secondLargest;

}


// !* Optimal Solution

function SecondLargestNumber_OPTIMAL(arr: number[], n: number): {Largest:number,secondLargest:number} {
    let Largest = arr[0];
    let secondLargest = Number.MIN_SAFE_INTEGER;
    
    for(let i=1;i<n;i++)
        {
            if(arr[i]>Largest)
                {
                    secondLargest = Largest;
                    Largest = arr[i];
                }
                else if(arr[i]<Largest && arr[i]>secondLargest)
                    {
                        secondLargest = arr[i];
                    }
        }
    return {Largest,secondLargest};
}


// !* Test Case
console.log(SecondLargestNumber_BRUTE([12, 35, 1, 10, 34, 1], 6)); // 34
console.log(SecondLargestNumber_BETTER([12, 35, 1, 10, 34, 1], 6)); // 34
console.log(SecondLargestNumber_OPTIMAL([12, 35, 1, 10, 34, 1], 6)); // { Largest: 35, secondLargest: 34 }