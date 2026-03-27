//Q. for unique element remaining...

// let arr = [10, 45, 18, 9, 9, 10, 45, 10, 10]

// let set = new Set();

// for(let i =0; i<arr.length; i++ ) {
//     if (set.has(arr[i])) {
//         set.delete(arr[i])
//     } else set.add(arr[i])
// }

// console.log(set);


// Q. duplicacy hata do aur unique rakh lo...

// let set = new Set(arr);
// console.log(set);


// sentence is Pangram or not ...

var checkIfPangram = function (sentence) {
    let set = new Set();
    for (let i=0; i<sentence.length;i++) {
        let ch = sentence.charAt(i);
        set.add(ch);
    } 

    return set.size == 26;
}


//Map....

// let map = new Map() 

// map.set("name" , "aryan");
// map.set("age" , 20);
// map.set("ispassed", true);
// map.set("contact" , [98765, 98765])

// console.log(map);


// all methods...

// let map = new Map() 
// map.set("raj", 6);
// map.set("amit", 4);
// map.set("aryan", 8);
// map.set("raghav", 2)

// map.delete("amit");
// console.log(map);
// console.log(map.has("aman"));

// har entry ko traverse karna hai...

// for (let [key,value] of map) {
//     console.log(key +"->" + value);
// }

// sirf key ko traverse karna hai..

// for (let key of map.keys()) {
//     console.log(key);
// }

// sirf value ko traverse karna hai...

// for (let key of map.values()) {
//     console.log(value);
// }


//Q. Print frequency of each number..

// let arr = [10, 3, 5, 6, 10, 1, 3, 5, 5, 7];
// let map = new Map();

// for(let i=0; i<arr.length;i++) {
//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) +1)
//     } else {
//         map.set(arr[i],1);
//     }
// }

// console.log(map);


// Q.sort the people...

// let names = ["Marry" , "John" , "Emma"];
// let heights =[180, 165, 170];

// let map = new Map();

// for (let i=0; i<names.length;i++) {
//     map.set(heights[i], names[i]);
// }
// heights.sort((a,b) => b-a) 

// for (let i=0; i<heights.length;i++) {
//     names[i] = map.get(heights[i]);
// }


// console.log(names);



// Q. Two sum.....

// Given an array integers nums and an integer target, return indices of the two numbers such that they add up to target 
// you may assume that each input would have exactly one solution, and you may not use the same element twice...


var twoSum = function (nums, target) {
    let map = new Map();

    for (let i=0; i<nums.length;i++) {
        if(map.has(target-nums[i])) {
            return [i, map.get(target-nums[i])];
        } else 
            map.set(nums[i], i)
    }
    return[-1,-1];
}