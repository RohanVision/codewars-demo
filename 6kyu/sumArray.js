// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


// My solution
function betterThanAverage(classPoints, yourPoints) {
    let classSum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        classSum += classPoints[i];
        var avg = classSum / classPoints.length
        console.log(" final " + avg)
    }
    if (avg < yourPoints) {
        return true
    } else if (avg > yourPoints) {
        return false
    }
}


// others solution

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++) {
        classAvg += classPoints[i];
    }
    classAvg = classAvg / classPoints.length;
    return yourPoints > classAvg;
}



function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce(function (a, b) {
        return a + b / classPoints.length
    }, 0)
}