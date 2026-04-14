// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//   ];


//   for (let i = 0; i < arr.length; i++) {      
//     let row = "";
  
//     for (let j = 0; j < arr[i].length; j++) { 
//       row += arr[i][j] + " ";
//     }
  
//     console.log(row);
//   }




// let rows = 3;
// let cols = 4;
// let arr = [];


// for (let i = 0; i < rows; i++) {
//   arr[i] = [];
//   for (let j = 0; j < cols; j++) {
//     arr[i][j] = i * cols + j + 1;
//   }
// }


// for (let i = 0; i < arr.length; i++) {
//   let row = "";
//   for (let j = 0; j < arr[i].length; j++) {
//     row += arr[i][j] + " ";
//   }
//   console.log(row);
// }    







// function isPresent(arr, target, rows, cols) {

//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
  
//         if (arr[i][j] === target) {
//           return true;
//         }
  
//       }
//     }
  
//     return false;
//   }
  
//   let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//   ];
  
//   let target = 7;
  
//   if (isPresent(arr, target, 3, 4)) {
//     console.log("Element Found");
//   } else {
//     console.log("Element Not Found");
//   }



//   Row wise sum....

//   let arr = [
//     [1,2,3,4],
//     [5,6,7,8],a
//     [9,10,11,12]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
  
//     let sum = 0;
  
//     for (let j = 0; j < arr[i].length; j++) {
//       sum = sum + arr[i][j];
//     }
  
//     console.log("Row", i, "Sum =", sum);
//   }




// Largest row sum Problem...

//   let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//   ];
  
//   let maxSum = -Infinity;
//   let rowIndex = -1;
  
//   for (let i = 0; i < arr.length; i++) {
  
//     let sum = 0;
   
//     for (let j = 0; j < arr[i].length; j++) {
//       sum = sum + arr[i][j];
//     }
  
//     if (sum > maxSum) {
//       maxSum = sum;
//       rowIndex = i;
//     }
  
//   }
  
//   console.log("Largest Row Sum:", maxSum);
//   console.log("Row Index:", rowIndex);




  
//   Wave print....

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//   ];
  
//   let rows = arr.length;
//   let cols = arr[0].length;
//   let result = "";
  
//   for (let j = 0; j < cols; j++) {
  
//     if (j % 2 === 0) {
  
//       for (let i = 0; i < rows; i++) {
//         console.log(arr[i][j]);
//       }
  
//     } else {
  
//       for (let i = rows - 1; i >= 0; i--) {
//         console.log(arr[i][j]);
//       }
  
//     }
  
//   }




// spiral matrix...


  let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
  ];
  
  let rows = arr.length;
  let cols = arr[0].length;
  
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  
  while (top <= bottom && left <= right) {
  
    
    for (let i = left; i <= right; i++) {
      console.log(arr[top][i]);
    }
    top++;
  
   
    for (let i = top; i <= bottom; i++) {
      console.log(arr[i][right]);
    }
    right--;
  
   
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        console.log(arr[bottom][i]);
      }
      bottom--;
    }
  
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        console.log(arr[i][left]);
      }
      left++;
    }
  
  }