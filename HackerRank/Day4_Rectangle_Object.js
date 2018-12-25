// Day 4 - Create a Rectangle Object

/*
 * Complete the Rectangle function - The below solution is using the Constructor Function
 */ 
function Rectangle(a, b) {
    this.length = a;
    this.width = b; 
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

// Also trying with some other method. 
function Rectangle(a, b) {
    var o = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area : a * b
    }
    return o;
}

//This is another example

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area : a * b
    }
}
