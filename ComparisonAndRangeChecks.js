// Problem 1...

function bmiCalculator(weight, height) {

    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } 
    else {
        return "Obese";
    }
}

console.log(bmiCalculator(70, 1.75));



// Problem 2..


function electricityBill(units) {

    let price;

    if (units <= 100) {
        price = 2;
    } 
    else if (units <= 300) {
        price = 3;
    } 
    else if (units <= 500) {
        price = 5;
    } 
    else {
        price = 7;
    }

    return "₹" + (units * price);
}



// Problem 3...

function getGrade(score) {

    if (score < 0 || score > 100) {
       return "Invalid score";
    } else if (score >= 90) {
        return "A+ — Outstanding";
    } else if (score >= 80 ) {
        return "A — Excellent";
    } else if (score >= 70 ) {
        return "B — Good";
    } else if (score >= 60 ) {
        return "C — Average";
    } else if ((score >= 50)) {
        return "D — Below Average";
    } else {
        return "F — Fail"
    }

};




// Problem 4 ....

function speedTest(mbps) {

    if (mbps < 0) {
        return "Invalid speed";
    } 
    else if (mbps < 1) {
        return "Very Slow — Barely usable";
    } 
    else if (mbps <= 10) {
        return "Slow — Suitable for basic browsing";
    } 
    else if (mbps <= 50) {
        return "Moderate — Good for streaming";
    }  
    else if (mbps <= 200) {
        return "Fast — Great for gaming and HD video";
    } 
    else {
        return "Ultra Fast — Excellent for everything";
    }
}





// Problem 5....


function trainTicket(distance, age, travelClass) {
    let rate;

    if (travelClass === "Sleeper") {
        rate = 1;
    } else if (travelClass === "AC3") {
        rate = 2;
    } else if (travelClass === "AC1") {
        rate = 4;
    }

    let price = distance * rate;

    
    if (age < 5) {
       price = 0;
    } else if (age <= 12) {
        price = price * 0.5;
    } else if (age >= 60) {
        price = price * 0.6;
    }

    if (distance > 1000) {
        price = price + (price * 0.10);
    } else if (distance >= 500) {
        price = price + (price * 0.05);
    }

    return "₹" + price.toFixed(2);
}   




