// function temp (n) {
//     if(n==0) return 
//     console.log("hello world")
//     temp(n-1);
// }
// temp(5)


// in reverse order...

// function temp (n) {
//     if(n==0) return;
//     console.log(n);
//     temp(n-1);
// }
// temp(10)



// print number 1 to 10...


// function temp (n) {
//     if(n==0) return;
//     temp(n-1);
//     console.log(n);
// }

// temp(10)



// sum...

function sum(n) {
    if(n==1) return 1;

    return n+sum(n-1);
}
console.log(sum(5));



// factorial....

function fact(n) {
    if(n==1) return n;
    return n*fact(n-1);
}

console.log(fact(5));




// let n = 10;
// let first = 0 , second = 1;

// process.stdout.write(first+" "+ second+" ")

// for (let i=1; i<=n-2; i++) {
//     let third = first + second;
//     first = second;
//     second = third

//     process.stdout.write (third+" ")
// }


// function fiboNterms(n, first , second) {
//     if (n==0) return 
//     let third = first+second;
//     process.stdout.write (third+" ")
// }



function fibo(n) {
    if (n==0 || n==1) return n;
    return fibo (n-1) + fibo (n-2);
}

let n = 6;

console.log(fibo(n));



// let arr = [1, [2, 3], [4, [5, 6]], 7];


// function flattenArray(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(flattenArray(arr));


