
// problem 1....



function isLeapyear (year) {
    
    if(year%400 === 0) {
        return "leap year"
    } else if (year%4 === 0 && year%100 != 0) {
        return "leap year"
    } else {
        return "not a leap year"
    }
} 

let input = isLeapyear(400);
console.log(input);



// problem 2...


function isWeekend(day) {

    if (day === "Saturday" || day === "Sunday") {
        console.log("Weekend!");
    } else {
        console.log("Weekday");
    }

}



isWeekend("Saturday"); 
isWeekend("Monday");   
isWeekend("Sunday"); 


// Problem 3..


function canRide(age, isWithAdult) {

    if((age>=12 || isWithAdult) && age<60) {
        console.log("can ride")
    } else {
        console.log("cannot ride")
    }
  
}
 
canRide(10, true);
canRide(50, false);
canRide(55, false);



// Problem 4...

function checkPassword(password) {

    if (
        password.length >= 8 &&
        password.split('').some(c => c >= '0' && c <= '9') &&
        password !== "password" &&
        password !== "12345678"
    ) {
        console.log("Strong");
    } else {
        console.log("Weak");
    }
}

checkPassword("hello");


// Problem 5...

function canBoard(hasTicket, isPassportExpired, minutesBeforeDeparture, baggageKg, paidExcessFee) {
    if (!hasTicket) {
        console.log("Cannot Board - No ticket");
        return;
    } else if (isPassportExpired) {
        console.log("Cannot Board - Passport expired");
        return ;
    } else if (minutesBeforeDeparture<20) {
        console.log("Cannot Board - Too late")
        return;
    } else if (baggageKg >= 25 && !paidExcessFee) {
        console.log("Cannot Board - Excess baggage");
        return ;
    }
    console.log("board");
}

canBoard(true, false, 30, 30, true);




// Problem 6....


function shouldTurnOnLight(isNight, isPowerOn) {
    if(isNight && isPowerOn) {
        return "power is on"
    } else {
        return "no light"
    }
}

let value = shouldTurnOnLight(false, true);
console.log(value);



// Problem 7.....


function loanEligibility(age, income, hasExistingLoan) {

    if (age>=21 && income >=25000 && !hasExistingLoan) {
        console.log("Eligible for Loan");
    } else {
        console.log("Not Eligible");
} 
};


loanEligibility(25, 30000, false);
loanEligibility(19, 30000, false); 
loanEligibility(25, 20000, false); 
loanEligibility(25, 30000, true);



// Problem 8...



function  parkEntry(age, hasSpecialPass) {
    if ((age >=5 && age <=70) || hasSpecialPass) {
        console.log("Welcome!");
    } else {
        console.log("Entry Denied")
    }
        
}

parkEntry(25, false);
parkEntry(3, false); 
parkEntry(3, true);  
parkEntry(75, false); 
parkEntry(75, true);



// Problem 9....


function activateNightMode(hour, allAsleep, isArmed, lightsOff, onlyBedroomOn) {
    

    if (!(hour >= 22 || allAsleep)) {
        console.log("Night Mode Off - Time/Sleep condition not met");
        return;
    }


    if (!isArmed) {
        console.log("Night Mode Off - Security not armed");
        return;
    }


    if (!(lightsOff || onlyBedroomOn)) {
        console.log("Night Mode Off - Lights not clear");
        return;
    }


    console.log("Night Mode Activated");
};


activateNightMode(23, false, true, true, false);


activateNightMode(20, false, true, true, false);


activateNightMode(23, false, false, true, false);


activateNightMode(23, false, true, false, false);


activateNightMode(20, true, true, false, true);
