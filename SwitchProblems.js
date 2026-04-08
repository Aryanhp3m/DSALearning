// Problem 1....

function getDayType(day) {
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":

        return "Weekday";

        case "Saturday":
        case "Sunday":

            return "Weekend"
        default:

        return "Invalid day"
        
    }
};

console.log(getDayType("Monday"));   
console.log(getDayType("Saturday")); 
console.log(getDayType("Sunday"));   
console.log(getDayType("Funday")); 



// Problem 2....

function trafficLight(color) {
    switch (color) {
        case "Red":
            console.log("Stop");
           break;
           
           case "Yellow":

           console.log("Slow down");
            break;

            case "Green": 
            console.log("Go");
            break;

            default:
               
            console.log("Invalid signal");
    }
};


trafficLight("Red");     
trafficLight("Green");   
trafficLight("Blue");



// Problem 3....

function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;

         case "-":
            return  a - b; 
            
          case "*":
            return a * b;

            case "/":
             if (b === 0) {
               return "cannot divide by zero";
             }   else {
                    return a/b;
             } 

             default:
               return "unknown operator";
        
    }    
};


console.log (calculate(10, "+", 5));
console.log (calculate(10, "-", 5));
console.log (calculate(10, "*", 5));
console.log (calculate(10, "/", 5));
console.log (calculate(10, "%", 5));



// Problem 4....


function getSeason(month) {
    switch(month) {
        case 12:
        case 1:
        case 2:
        return  "Winter";

        case 3:
        case 4:
        case 5:

        return "Spring";

        case 6:
        case 7:
        case 8:
        
        return "Summer";

        case 9:
        case 10:
        case 11:

        return "Autumn"

        default: 

        return "invalid month";
            
    }
};

console.log(getSeason(1));
console.log(getSeason(5));
console.log(getSeason(8));
console.log(getSeason(11));
console.log(getSeason(13));




// Problem 5.....



function support(department, option) {
    switch(department) {

        case "Billing":

        switch (option) {
            case 1: 
            return "Connecting to billing agent";

            case 2:
             return "Showing your invoice history";

             case 3: 
             return "Processing refund request"

             default:

             return "Invalid option for this department";


        }
             case "Technical":

             switch(option) {
                case 1:
                  return  "Running diagnostics";

                  case 2: 
                  return "Resetting your device remotely";

                  default:
                    return "Invalid option for this department";

             }
                  case "General":

                  switch(option) {
                    case 1:
                        return "Showing FAQ";

                        case 2:
                        return "Connecting to general agent";
                        
                        default:
                         
                        return "Invalid option for this department";
                  }

                    default:
                    return "Invalid department";

             } 
        };



console.log (support("Billing", 2));    
console.log (support("Technical", 1));  
console.log(support("General", 3));   
console.log(support("HR", 1));





// Problem 6....

function planetWeight(planet, weightOnEarth) {
    switch (planet) {
        case "Mercury":
        case "Mars":     
        return weightOnEarth * 0.38;

        case "Venus":
        return weightOnEarth *0.91;
        
        case "Jupiter":
        return weightOnEarth * 2.34;

        case "Saturn": 
        return weightOnEarth * 1.06;

        default :
        return "Unknown planet";

    } 

};



console.log(planetWeight("Mars", 70)); 
console.log(planetWeight("Jupiter", 70));  
console.log(planetWeight("Pluto", 70));     



// Problem 7.....

function toRoman(num) {
    switch(num) {
        case 1:
        return "I";
        case 2: 
        return "II";
        case 3:
        return "III";
        case 4:
        return "IV";
        case 5:
        return "V";
        case 6:
        return "VI";
        case 7:
        return "VII";
        case 8:
        return "VIII";
        case 9:
        return "IX";
        case 10:
        return "X";

        default: 
        return "Out of range";
    }
}

console.log(toRoman(1));  
console.log(toRoman(4));  
console.log(toRoman(9));  
console.log(toRoman(10)); 
console.log(toRoman(11)); 


// Problem 8...

function shippingCost(destination, weightKg) {
    switch (destination) {
        case "Local": 
        return 50 + weightKg * 10;

        case "National":
        return 100 + weightKg * 20;

        case "International":
        return 500 + weightKg * 50; 

        default: 
           return  "Invalid destination";
    }
}


// Problem 9....


function canDonate(donorType, recipientType) {
    switch(donorType) {
        case "O-" : 
        return "Compatible";

        case "O+": 
        if (recipientType === "O+" || recipientType === "A+" || recipientType === "B+" || recipientType === "AB+") {
            return "Compatible";

        } else {
            return "Incompatible";
        } 

        case "A-":
         if (recipientType === "A-" || recipientType === "A+" || recipientType === "AB-" || recipientType === "AB+") {
            return "Compatible"; 
         }  else {
            return "Incompatible";
         } 

         case "A+":
            if (recipientType === "A+" || recipientType === "AB+") {
                return "Compatible"; 
             }  else {
                return "Incompatible";
             }  
            
             case "B-":
                if (recipientType === "B-" || recipientType === "B+" || recipientType === "AB-" || recipientType === "AB+") {
                    return "Compatible"; 
                 }  else {
                    return "Incompatible";
                 }  

                 case "B+":
                    if (recipientType === "B+" || recipientType === "AB+") {
                        return "Compatible"; 
                     }  else {
                        return "Incompatible";
                     }  
                   
                     case "AB-":
                        if (recipientType === "AB-" || recipientType === "AB+") {
                            return "Compatible"; 
                         }  else {
                            return "Incompatible";
                         } 

                         case "AB+":
                            if (recipientType === "AB+") {
                                return "Compatible"; 
                             }  else {
                                return "Incompatible";
                             } 

                            default: 

                            return "Incompatible"
                        }

                    }
              
                    console.log(canDonate("O-", "AB+"));
                    console.log(canDonate("O-", "A+"));
                    console.log(canDonate("A+", "B+"));
                    console.log(canDonate("AB+", "O-"));
                    console.log(canDonate("B-", "AB-"));








// Problem 10....


function  atm(action, accountBalance, amount) {
        switch (action) {

            case "balance":
            return `Your balance is ₹${accountBalance}`;
 
            case "withdraw":
              if (amount === 0 || amount <0) {
               return  "Invalid amount"
              }  else if (amount % 100 !== 0) {
                return "Please enter amount in multiples of ₹100";
            } else if (amount>accountBalance) {
                return "Insufficient funds"
            }  
                 else {
                    return `Dispensing ₹${amount}. Remaining balance: ₹${accountBalance - amount}`;
                }
            

            case "deposit":
                if (amount === 0 || amount <0) {
               return  "Invalid amount"
            } else {
                return `₹${amount} deposited. New balance: ₹${accountBalance + amount}`;
            }

           default: 
            return "Invalid action";

        }  
}

