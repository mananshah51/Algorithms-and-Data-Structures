// Day 1 -Functions

function factorial(n) {
    if (n >= 1 && n <= 10) { 
        for (let i = n - 1; i >= 1; i--) { 
            var n = n * i;
        }
    }
    return n;
}
factorial(4);