// M1 length -> returns string length..

// let s = "sheriyans"
// console.log(s.length);


// M2 -> slice (start,end) Extracts substring...

// let s = "sheryians"

// console.log(s.slice(1,5));

// console.log(s.slice(-4,s.length));


// M3 -> Substring (start, end) -> similar to slice , but no negative indexes...

// M4 -> lowercase , uppercase..


// M5 -> concat() -> concatenates string....

// let s = "sheryians"

// console.log (s.concat(" ", "world"));



// M6 -> trim() -> removes spaces from both sides...

// let s = "    sheryians    "
// console.log (s.trim());



// Q. Print each character on newline..

// let s = "sheryians";
// for (let i =0; i<s.length;i++) {
//     console.log (s[i]);
// }


// reverse character ...

// let s = "sheryians";

// for (let i = s.length-1; i>=0; i--) {
//     console.log (s.charAt(i))
// }
    


// print in reverse order...


// let s = "sheryians";
// let rev = "";

// for (let i= s.length-1; i>=0; i--) {
//     rev = rev + s.charAt(i);
// }

// console.log (rev);



// Q. check if string is pallindrome or not....

// const prompt = require("prompt-sync")();
// let s = prompt("enter a string: ");

// let isPalindrome = true;

// let i=0 , j = s.length-1;
// while (i<j) {
//     if (s.charAt(i) != s.charAt(j)) {
//         isPalindrome = false;
//         break
//     }
//     i++
//     j--
// }

// if (isPalindrome) console.log("palindrome");
// else console.log ("no palindrome");




// Q. toggle each character....

// const prompt = require("prompt-sync")();
// let s = prompt ("Enter a string")
// console.log(s);

// let toggle = "";
// for (let i=0; i<s.length-1; i++) {
//     let ch = s.charCodeAt(i);

//     if (ch>=65 && ch<=90) {
//         toggle = toggle+ String.fromCharCode(ch + 32 )
//     } else if (ch>=97 && ch<=122) {
//         toggle = toggle + String.fromCharCode(ch - 32)
//     }
// }

// console.log(toggle);



// Q. frequency of each character....

// const prompt = require("prompt-sync")();
// let s = prompt ("enter a number");
// let arr = new Array(128).fill(0);

// for (let i=0; i<s.length; i++) {
//     let indx = s.charCodeAt(i);
//     arr [indx] = arr[indx] + 1;
// }

// for (let i=0; i<arr.length;i++) {
//     if (arr[i]>0) {
//         console.log(String.fromCharCode(i)+ "appears at " + arr[i] + "times" );
//     }
// }





// var lengthOfLastWord = function(s) {
//     s = s.trim();
//     s = s.split(" ");
//     return s[s.length-1].length;
// }


var lengthOfLastWord = function(s) {
    console.log(s);
    s = s.trim();
    console.log(s);
    s = s.split(" ");
    console.log(s);
    console.log (s[s.length-1]);
    s[s.length-1].length;
    return s[s.length-1].length;
}


console.log(lengthOfLastWord("Hello World"));




var lengthOfLastWord = function(s) {
  // trim all the spaces at the end 
  let n = s.length-1; // start from last character

  while (n>=0) {
    if (s[n] == " ") {
        --n;
    } else {
        break;
    }
  }

  // n is the point where my last word starts..

  // count the character till you reach a space

  let count =0;
  while(n>=0) {
    if (s[n] != " ") {
        --n;
        ++count;
    } else {
        break;
    }
  }
  return count;
};


var findWordsContaining = function (words, x) {
    let res = [];
    for (let i = 0; i< words.length; i++) {
        if (words[i].includes(x)) {
            res.push(i);
        }
    }
    return res;
};


// using inbuilt function .includes...


// var numJewelsInStones = function(jewels, stones) {
//     let count = 0;
//     for (let i =0; i<stones.length; i++) {
//         if (jewels.includes(stones[i])) {
//             count++;
//         }
//     }
//     return count;
// };



var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                count++;
                break;
            }
        }
    }

    return count;
};


var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set ();
    for (let i=0; i < jewels.length; i++) {
        jSet.add(jewels[i]);
    } 

    let count = 0;
    for(let i =0; i<stones.length; i++) {
        if(jSet.add(stones[i])) {
            count++;
        }
    } 
    return count;
};


var maxFreqSum = function (s) {
    // store all the values with frequency in a map...

    let map = {} ;
    for (let i=0; i<s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1;
        }
    }
}


// find the maxVowel and consonant inside the map...

let vowel = ['a' , 'e' , 'i' , 'o' , 'u']
let maxVowel = 0;
let maxConsonant = 0;

for(let i=0; i<s.length; i++) {
    // vowels..
    if(vowel.includes(s[i])) {
        if(map[s[i]] >maxVowel) {
            maxVowel = map[s[i]];
        }
    } else {
        if(map[s[i]] > maxConsonant) {
            maxConsonant = map[s[i]];
        }
    }
    return maxConsonant + vowel;
}