// Day 3 = Try, Catch and Finally - This is one solution 

function reverseString(s) {
    if (typeof (s) === 'string') {
        var spil = s.split("");

        var rev = spil.reverse();

        var tog = rev.join("");
        console.log(tog);
    }
    else { 
        console.log("s.split is not a function");
        console.log(s);
    }
}

// This is another Solution for Try, Catch and Finally. 

 
function reverseString(s) {
    try {
        var spil = s.split("");

        var rev = spil.reverse();

        var tog = rev.join("");
        console.log(tog);
    }
    catch (err) {
        console.log(err.message);
        console.log(s);
    }
    
}