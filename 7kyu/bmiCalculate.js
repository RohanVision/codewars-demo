function bmi(weight, height) {
    let bmi = (weight / (height * height));
    console.log(bmi)
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    } else if (bmi > 30) {
        return "Obese"
    }
}

console.log(bmi(80, 1.80))