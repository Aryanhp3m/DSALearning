// Problem 1..

let n = 5;
let i = n;

while (i >= 0) {
    if (i === 0) {
        console.log("Go!");
    } else {
        console.log(i);
    }
    i--;
}






// Problem 2...


function guessSimulation(secret, guesses) {

        let i = 0;
        let found = false;
    
        while (i < guesses.length && !found) {
    
            if (guesses[i] === secret) {
                console.log("Correct!");
                found = true;
            } 
            else if (guesses[i] < secret) {
                console.log("Too low");
            } 
            else {
                console.log("Too high");
            }
    
            i++;
        }
    
        if (!found) {
            console.log(`Game over — number was ${secret}`);
        }
    }




// Problem 3.....



function digitalRoot(n) {

    while (n >= 10) {

        let sum = 0;
        let temp = n;

        while (temp>0) {
            sum = sum + temp%10;
            temp = Math.floor(temp/10);

        }

        console.log(`${n} sum of digits = ${sum}`);
        n = sum;
    }
        
    console.log(`Digital root: ${n}`);
}




// Problem 4....


function collatz(n) {

    let steps = 0;
    let sequence = String(n);
    let start = n;

    while (n !== 1) {
        if(n % 2 === 0) {
            n = n/2;
        } else if (n%2 !== 0 ) {
            n = 3 * n + 1;
        } 
        steps ++;
        sequence = sequence + " ->" + n;
    }

    if (start === 27) {
        console.log(`${steps}`);

    } else {
        console.log(sequence);
        console.log(`${steps}`)
    }
} 

 


// Problem 5...


function bankSimulator(amount, transactions) {

    let balance = amount;
    let i =0;

    let transactions = [
        { type: "deposit", amount: 50000 },
        { type: "withdraw", amount: 10000 },
        { type: "interest", amount: 5 },
        { type: "withdraw", amount: 60000 },
        { type: "deposit", amount: 20000 }
    ];

    while (i < transactions.length) {
        if (transactions[i].type === "deposit" ) {
            balance = balance + transactions[i].amount;
        } 
        if(transactions[i].type === "withdraw") {
            balance = balance - transactions[i].amount;
        }
    }
}



