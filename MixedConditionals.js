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
    } if( amount <= 0) {
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





// Problem 4....

function universityAdmission(score, isReserved, hasDuesCleared) {

    let result;

    if (!isReserved) {

        if (score >= 85) {
            result = "Admitted — Merit Seat";
        } 
        else if (score >= 70) {
            result = "Admitted — Management Seat";
        } 
        else {
            result = "Not Admitted";
        }

    } else {

        if (score >= 70) {
            result = "Admitted — Merit Seat";
        } 
        else if (score >= 55) {
            result = "Admitted — Management Seat";
        } 
        else {
            result = "Not Admitted";
        }
    }

    if (result !== "Not Admitted" && !hasDuesCleared) {
        return "Admission Hold — Clear dues first";
    }

    return result;
};



// Problem 5....

function applyDiscount(originalPrice, membership, couponCode) {

    let price = originalPrice;
    let message = "";

    if (membership === "Gold") {
        price = price * 0.80
    } else if (membership === "Silver") {
        price = price * 0.90
    } else if (membership === "Bronze") {
        price = price * 0.95
    } 

    if (price > 5000) {
        price = price * 0.90;   
    } 
    else if (price >= 2000 && price <= 5000) {
        price = price * 0.95; 
    } 
    if (couponCode === "SAVE10") {
        price = price - 100; 
    } else if (couponCode === "SAVE20") {
        price = price - 200;
    } else if (couponCode === "FREESHIP") {
        message = "\nFree shipping applied";
    }

    if (price < 0) {
        price = 0;
    }   
    return `Final price: ₹${price.toFixed(2)}${message}`;
};




// Problem 6....

function hotelBill(roomType, nights, season, membership) {

        let pricePerNight;
    
        if (roomType === "Standard") {
            pricePerNight = 2000;
        } 
        else if (roomType === "Deluxe") {
            pricePerNight = 4000;
        } 
        else if (roomType === "Suite") {
            pricePerNight = 8000;
        } 
        else {
            return "Invalid room type";
        }
    
        let price = pricePerNight * nights;
    
        
        if (season === "Peak") {
            price = price*1.30;
        } 
        else if (season === "Off") {
            price = price*0.80;
        } 
        else if (season === "Normal") {
            return "no change"
        } 
        else {
            return "Invalid season";
        }
    
        
        if (membership === "Premium") {
            price = price*0.85;
        } 
        else if (membership === "Regular") {
            price = price*0.95;
        }
        
        if (nights > 7) {
            price = price*0.90;
        } 
        else if (nights >= 3) {
            price = price*0.95;
        }
    
        return `₹${price.toFixed(2)}`;
    }



// Problem 7...

function cabFare(vehicleType, distanceKm, hour, isSurge) {

    let fare;

    if (vehicleType === "Mini") {
        fare = 50 + distanceKm*10;
    } else if (vehicleType === "Sedan") {
        fare = 75 + distanceKm*15;
    } else if (vehicleType === "SUV") {
        fare = 100 + distanceKm*20;
    } else {
        return "Invalid vehicle type";
    }

    if (hour >= 22 || hour <= 5) {
        fare = fare + fare*0.25;
    } else if ((hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 20)) {
        fare = fare + fare*0.15
    } 
    
    if (isSurge ) {
        fare = fare + fare*0.50;
    } 

    if (distanceKm > 30 ) {
        fare = fare*0.90;
    } else if (distanceKm >= 15 && distanceKm <= 30) {
        fare = fare*0.95;
    } 

    return `₹${fare.toFixed(2)}`;
}




//  Problem 8....


function recharge(dailyGb, networkType, budget, wantsAnnual) {

    let planName;
    let price;

    if (dailyGb < 1) {
        planName = "Basic";
        price = 199;
    } 
    else if (dailyGb <= 3) {
        planName = "Standard";
        price = 399; 
    } else {
        planName = "Premium";
        price = 599;
    }
   
        if (networkType === "5G") {
        price = price + price*0.20;
    } 
    else if (networkType === "4G") {
    } 
    else if (networkType === "3G") {
        price = price - price*0.10;
    } 
    else {
        return "Invalid network type";
    } 

    if (price > budget) {
        planName = "Basic";
        price = 199;

        if (networkType === "5G") {
            price *= 1.20;
        } 
        else if (networkType === "3G") {
            price *= 0.90;
        }
    }

    if (wantsAnnual) {
        price *= 10;
    }

    return `Plan: ${planName}, Price: ₹${price.toFixed(2)}`;
} 
