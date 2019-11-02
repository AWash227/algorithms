// @format

// ANDREW WASHBURN
// ALGORITHMS

// INSERTION SORT

// DIVIDE AND CONQUER

//   swap([], key): []      // RECURSIVE
//     Needs to swap pairwise items in an array until
//     it is in the correct location

//   insertionSort([]): []  // NON-RECURSIVE
//     Just needs to call swap on every item in array

// NOTE
// I'm not sure if this is the fastest way to perform
// insertion sort, but it is the technique I came up
// with on my own.

const swap = (array: number[], key: number): number[] => {
  // Don't mutate original array
  let arr = [...array];

  // BASE CASE
  // On arr[0] || item is in correct place, return arr
  if (key === 0 || arr[key] >= arr[key - 1]) {
    return arr;
  }
  // RECURSIVE CASE
  // If item is in incorrect place, swap recursively until it is
  else if (arr[key] < arr[key - 1]) {
    // SWAP THE items
    let item = arr[key - 1];
    arr[key - 1] = arr[key];
    arr[key] = item;

    // Return recursive answer
    return swap(arr, key - 1);
  }
};

const insertionSort = (array: number[]) => {
  // Don't mutate original array
  let arr = [...array];

  // Swap until we reach end of array
  for (let i = 0; i < arr.length; i++) {
    arr = swap(arr, i);
  }

  // Return the SORTED array
  return arr;
};

// Put any array of numbers you'd like into insertionSort()
// and it will return a sorted array

console.log(insertionSort([4, 2, 1, 5, 9, 12, 32, 31, 18]));
