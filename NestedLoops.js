// Problem 1....


function rectangle(rows, cols) {

let n = 4;

for (let i = 0; i<n; i++) {
    let row = ""
    for(j=0;j<n;j++) {
        row = row + "*"
    }
    console.log(row);
}
};

rectangle(4, 3);




// Problem 2...


function printStars(n) {

    for (let i = 0; i < n; i++) {

        let row = "";

        for (let j = 0; j < i + 1; j++) {
            row = row + "*";
        }

        console.log(row);
    }
}

printStars(4);



// Problem 3...

function printPattern(n) {

    for (let i = 0; i < n; i++) {

        let row = "";

        for (let j = 0; j < i + 1; j++) {
            row = row + (i + 1);
        }

        console.log(row);
    }
}

printPattern(5);
    



// Problem 4....


function printNumberPattern(n) {

    for (let i = 0; i < n; i++) {

        let row = "";

        for (let j = 0; j < i + 1; j++) {
            row = row + (i + 1);
        }

        console.log(row);
    }
}

printNumberPattern(4);




// Problem 5....

function printReversePattern(n) {

    for (let i = 0; i < n; i++) {

        let row = "";

        for (let j = 0; j < (n - i); j++) {
            row = row + (j + 1);
        }

        console.log(row);
    }
}

printReversePattern(5);




// Problem 6......


function printRightTriangle(n) {

    for (let i = 0; i < n; i++) {

        let row = "";

       
        for (let j = 0; j < n - (i + 1); j++) {
            row = row + " ";
        }

        for (let k = 0; k < i + 1; k++) {
            row = row + "*";
        }

        console.log(row);
    }
}

printRightTriangle(5);




