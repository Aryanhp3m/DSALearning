// Problem 1....

function multiplicationTable(n) {
    for (let i=1; i<=10; i++) {
        console.log (n*i);
    }

}

multiplicationTable(5)




// Problem 2....

function sumOfN(n) {
    let sum = 0;

    for (let i=1; i<=n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfN(5));




// Problem 3...

function countVowels(str) {

    let count = 0;
    let vowels = "aeiou"

    str = str.toLowerCase();

    for (let i = 0; i<str.length; i++) {
        if (vowels.includes (str[i])) {
            count ++;
        }
    }

    return `Vowels: ${count}`;
}

console.log(countVowels("Hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("rhythm"));
console.log(countVowels("Extraordinary"));



// Problem 4....

function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }

    }
}

fizzBuzz(15);





//  Problem 5...


function primesInRange(start, end){


    for(let i = start; i<end; i++) {

        let isPrime = true;

    if (i <= 1) {
        isPrime = false;
    }

        for (j=2; j<i; j++) {
            if (i%j ===0 ) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }

}

primesInRange(1, 20);



// Problem 6...

function reverseNumber(n) {


        let str = String(n);
        let reversed = "";
    
        for (let i = str.length - 1; i >= 0; i--) {
            reversed = reversed + str[i];
        }
    
        console.log(Number(reversed));
    }
     
    
    
reverseNumber(1234);
reverseNumber(9870);
reverseNumber(100);
reverseNumber(12345);





// Problem 7...

function sumOfDigits(n) {

    let str = String(n);
    let sum = 0;

    for (let i = 1; i<str.length-1; i++) {
        sum = sum + Numberstr[i];
    }
    return sum;
}