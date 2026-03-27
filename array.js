// const prompt = require("prompt-sync")();
// let arr = [];
// arr[0] = Number(prompt("Enter a value: "));
// console.log(arr);


// let arr = new Array (5);

// for (let i=0; i<arr.length;i++) {
//     arr [i] = Number(prompt("enter a value"))
// }

// console.log(arr);


// let arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i<arr.length; i++) {
//     sum = sum + arr[i];
// }

// console.log(sum);


// let arr = [10,2,78,100,4];

// let max = 0;
// for (let i=1; i<arr.length;i++) {
//     if (max<arr[i]) {
//         max= arr[i];
//     }
// }

// console.log(max);


// second largest element

// let arr = [10, 30, 56, 43, 29, 64, 49, 60];

// let max = Math.max(arr[0], arr[1]); 
// let sMax = Math.min(arr[0], arr[1]);

// for (let i=2; i<arr.length;i++) {
//     if (arr[i]> max) {
//         sMax = max;
//         max = arr[i];
//     } else if (arr[i] > sMax) {
//         sMax = arr[i];
//     }
// }

// console.log(sMax);




// one cornercase here ....



// let arr = [10, 30, 40, 40, 40];

// let max = Math.max(arr[0], arr[1]); 
// let sMax = Math.min(arr[0], arr[1]);

// for (let i=2; i<arr.length;i++) {
//     if (arr[i]> max) {
//         sMax = max;
//         max = arr[i];
//     } else if (arr[i] > sMax && max!= arr[i]) {
//         sMax = arr[i];
//     }
// }
// console.log(sMax);



// reverse the array ...
// M1 with extra space ...

// let arr = [10, 20, 30, 40, 50]; 
// let temp = new Array (arr.length);

// let  j = 0;

// for (let i = arr.length-1; i>=0; i--) {
//     temp [j] = arr [i];
//     j++
// }

// console.log (temp);


// M1 without extra space 

// let arr = [10, 20, 30, 40, 50 ];

// let i = arr.length-1; j=0;

// while (i!=j) {
//     let temp = arr[i]
//     arr [i] = arr[j];
//     arr[j] = temp
//     j++
//     i--
// }

// console.log (arr);



// move all zeroes on left side , Move all one's on right side...

// two pointer method.....

// let arr = [ 1, 1, 0, 1, 0, 1, 1, 0, 0];

// let i =0; j=0;

// while (i<arr.length) {
//     if (arr[i] == 0) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr);



// advance array questions....


// Q. left rotation by 1 element...

// let arr = [1, 2, 3, 4, 5,9,10]
// let copy = arr[0]

// for (let i=0; i<arr.length-1; i++) {
//     // console.log("Arr[",i,"]=",arr[i]);
//     // console.log("Arr[",i,"+1]=",arr[i+1]);
//     arr[i] = arr[i+1];
// }

// arr [arr.length-1] = copy 
// console.log (arr);






var reverseString= function(s) {
    let len = s.length;
    let halflen = Math.floor(len/2);

    for(let i =0; i<halflen; i++) {
        //swapping s[i] , s[len-1-i]

        let temp = s[i] ;
        s[i] = s[len-1-i];
        s[len-1-i] = temp;

    }
};


// Best time to buy and sell stocks...


var maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length;i++) {
        if (prices[i]-min > maxProfit) {
            maxProfit = prices[i] - min;
        } if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
};



// Merge shorted array..

var merge = function( nums1, m, nums2, n) {

    let p1 = m-1;
    let p2 = n-1;

    for(let i = m+n-1; i>=0; i--) {
        if(p2<0) break;

        if(p1>=0 && nums1[p1]> nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};


// Move zeroes...

var moveZeroes = function(nums) {
    let x = 0;
    for(let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for(let i=x; i<nums.length;i++) {
        nums[i] = 0;
    }
};
        

// let arr =[50, 0, -7, 10, 8, 17,1];
// let res = findLargest(arr);

// function findLargest (arr) {
//     let largest = -1;
//     for (let i=0; i<arr.length;i++) {
//         if (arr[i]>largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log (res);



// function secondLargest(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for(let i=0; i<arr.length; i++) {
//         if (arr[i]> firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// let arr =[4,9,0,2,8,7,1];

// let result = secondLargest(arr);

// console.log(result);




// corner cases.....

// What if the array has empty..
//what if only has one element..
// what if array has duplicates..(else if (arr[i] > secondLargest)  && arr[i] != firstLargest)


var isPalindrome = function(x) {
    if (x <0) return false;

    let xCopy = x;

    let rev =0;

    while (x>0) {
        let rem = x%10;
        rev = (10*rev) + rem;
        x = Math.floor(x/10);
    }
    //  if (rev == xCopy) {
    //     return true;
    //  } else {
    //     return false;
    //  }

    return rev == xCopy;
};





function countDigits (n) {
    if (n == 0) return 1;

    // converting negative numbers to positive..

    n = Math.abs(n);

    let count = 0;
    while(n>0) {
        n = Math.floor(n/10);
        count ++; 
    }
    return count;
}

let num = 298;
let result = countDigits(num);

console.log(result);




var reverse = function(x) {
    let xCopy = x;
    x = Math.abs(x);

    let rev = 0;

    while(x>0) {
        let last = x%10;
        rev = (10*rev) + last;
        x = Math.floor(x/10);
    }

    let limit = Math.pow(2,31);
    if(rev < -limit || rev > limit) return 0;
    
    return (xCopy<0) ? -rev : rev;
}




