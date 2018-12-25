// Day 4 - Count Objects - HackerRank

var count = 0;
function getCount(objects) {
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }    
    return count;
}

// This can also be done using filter method. 

function getCount(objects) {
    let filter = objects.filter(function (o) {
        return (o.x == o.y);
    });

    return filter.length;
    
}