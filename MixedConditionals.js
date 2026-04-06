// problem 1....


function jobFilter(age, experience, isBlacklisted) {

    if (age < 21 || age > 45) {
        return "Rejected — Too young/old";
    }

    if (experience < 2) {
        return "Rejected — Insufficient experience";
    }

    if (isBlacklisted) {
        return "Rejected — Blacklisted";
    }

    return "Shortlisted";
}




// Problem 2....


function validateOrder(tableNumber, amount, isKitchenOpen)  {

    if (tableNumber < 1 || tableNumber > 20) {
        return "Invalid table number";
    } if( amount < 0) {
        return "Invalid order amount";

    } if (!isKitchenOpen) {
        return "Kitchen is closed";
    }
    return "Order Confirmed"
}


// Problem 3....

function insurancePremium(age, bmi, isSmoker) {

    let premium;

   
    if (age < 25) {
        premium = 500;
    } 
    else if (age <= 45) {
        premium = 1000;
    } 
    else {
        premium = 2000;
    }

    
    if (bmi < 18.5 || bmi > 30) {
        premium = premium + 500;
    }

    if (isSmoker) {
        premium = premium + (premium * 0.25);
    }

    return "₹" + premium;
}