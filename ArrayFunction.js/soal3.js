// Formula : BMI = weight (kg) / (height (meter))2
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi < 25.0) {
        return "ideal";
    } else if (bmi < 30.0) {
        return "overweight";
    } else if (bmi < 40.0) {
        return "very overweight";
    } else {
        return "obesity";
    }
}
const weight = 66 ; // in kilograms
const height = 169; // in meters
const bmiCategory = calculateBMI(weight, height);
console.log(bmiCategory); // Outputs the BMI category
