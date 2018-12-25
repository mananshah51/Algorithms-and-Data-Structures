//Day 3 - Throw

function isPositive(a) {

    if (a > 0) {
        return ("YES");
    }
    else if (a === 0) {
        return("Zero Error")
    }
    else { 
        return("Negative Error");
    }   
}

// This is with an another method

function isPositive(a) {
    if (a > 0) {
        return "YES";
    }
    else if (a === 0) {
        throw new Error("Zero Error");
    }
    else { 
        throw new Error("Negative Error");
    }
}