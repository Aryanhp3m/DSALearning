//Problem 1

let number = 0;

    if (number == 0) {
       console.log("Zero")
    } else if (number > 0) {
       console.log ("Positive")
    } else {
        console.log("Negative");
    }




// Problem 2
   
let num = 7;

    if (num%2 != 0) {
            console.log("odd")
    } else {
        console.log("Even")
    }




// Problem 3


// let a = 5;
//    let b =9;
//    let c =15

//    if (a>=b && a>=c) {
//     console.log(a);
//    } else if (b>=a && b>=c) {
//     console.log(b)
//    } else {
//     console.log(c);
//    }




// Problem 4 

let score = 100;
   
    if (score>=90 && score<=100) {
           console.log("A");
       } else if (score >= 75) {
           console.log("B");
       } else if (score >=60) {
           console.log("c");
       } else if (score>=40) {
           console.log("D");
       } else if (score<40) {
           console.log("F")
       }
  



   // Problem 5



   let year = 2000;
   if (year% 400 == 0) {
       console.log("leap year")
    } else if (year% 100 == 0) {
       console.log("not a leap year")
    } else if (year% 4 ==0) {
       console.log("leap year");
    } else {
       console.log("not a leap year")
    }
    

    // Problem 6



    let a = 5;
    let b = 7;
    let c = 9;
    
    if (a + b > c && b + c > a && a + c > b) {
        console.log("Valid Triangle");
    
        if (a == b && b == c) {
            console.log("Equilateral");
        } else if (a != b && b != c && c != a) {
            console.log("Scalene");
        } else {
            console.log("Isosceles");
        }
    
    } else {
        console.log("Not a triangle");
    }



 
// let a = 5;
// let b = 8;
// let c = 9;

// if (a+b>c && b+c>a && a+c>b) {
//     console.log("Valid triangle");

//     if (a==b && b ==c) {
//         console.log("Equilateral");
//     } else if (a==b && b!=c || b==c && c!=a || a ==c && c!=b) {
//         console.log("Isosceles");
//     } else if (a != b && b != c && c != a) {
//         console.log("Scalene")
//     }
// }
  





// Problem 1....

function electricityBills (units) {
let price;

if (units <= 100) {
    price = 2;
} else if (units <= 300) {
    price = 3.5;
} else {
    price = 5;
}

return units * price;

};

console.log(electricityBills(80));
console.log(electricityBills(200));
console.log(electricityBills(350));




// Problem 2...

function digits(n) {

    if (n >=1 && n <=9) {
        return "single digit"   
    } else if (n >=10 && n <=99) {
        return "double digits"
    } else if (n >=100 && n <=1000) {
        return "triple digits"
    } else if (n >= 1000) {
     return "large number"
    }
}

console.log(digits(15));
    


// Problem 3...

function fare(distance) {

 let fare = 50;

if (distance <=5) {
    fare = fare + distance*10;
} else if (distance <=10) {
    fare = fare + (5*10) + (distance - 5) * 8
} else if ( distance > 10 ) {
    fare = fare + (5*10) + (5 * 8) + (distance-10)*6
} 
return fare;

};

console.log (fare(20));

console.log (fare(3));

console.log (fare(8));


console.log (fare(12));






// Problem 4....


function checkDivisibility(n) {
    if (n % 3 === 0) {
        console.log("Divisible by 3");
    }
    if (n % 5 === 0) {
        console.log("Divisible by 5");
    }
    if (n > 100) {
        console.log("Greater than 100");
    }
    if (Number.isInteger(Math.sqrt(n))) {
        console.log("Perfect square");
    }
}


checkDivisibility(15);




// Problem 5....


function taxIncome (income) {
    
    let tax = 0;
    
    if (income <= 250000) {
        tax = 0;
    } 
    else if (income >= 250001 && income <= 500000) {
        tax = (income - 250000) * 0.05;
    }  
    else if (income >= 500001 && income <= 1000000) {
        tax = 12500 + (income - 500000) * 0.20;
    } 
    else if (income > 1000000) {
        tax = 112500 + (income - 1000000) * 0.30;
    }
    
    let rate = (tax / income) * 100;
    let takeHome = income - tax;
    
   
    return {
        tax,
        rate: rate.toFixed(2),
        takeHome
    };
}

const result = taxIncome(200000);
const reulst2 = taxIncome(300000);
const result3 = taxIncome(700000);
const result4 = taxIncome(1200000);
const result5 = taxIncome(2000000);

console.log(result.tax);      
console.log(result.rate);      
console.log(result.takeHome);  
console.log(reulst2);
console.log(result3);
console.log(result4);
console.log(result5);



function tempratureCategory (temp) {

    if (temp<0) {
        return "freezing"
    } else if (temp <= 15) {
        return "Cold"
    } else if (temp <= 30) {
        return "Moderate"
    } else if (temp>30) {
        return "Hot"
    }
} 

let temp = tempratureCategory(-5);
console.log(temp)




function isEligible(age) {
   
    if(age<18) {
        return "not eligible for Vote"
    } else {
        return "eligible for vote"
    }
}  

let age = isEligible(8);
console.log(age);




// function rangeIndentifier (n) {
   
//     if (n>1 && n<=50){
//         return "low"
//     } else if (n<=100) {
//         return "Medium"
//     } else if (n>100) {
//         return "High"
//     }
        
//     let input = rangeIndentifier(6);
// };

// console.log(input);



