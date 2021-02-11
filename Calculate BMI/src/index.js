// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// Write the function to find the bmi obtained.
function bmi(weight, height) {
     //your code here
     let ans=((weight)/Math.pow(height,2))
     if(ans <= 18.5)
      return "Underweight"
    else if (ans <= 25.0)
      return "Normal"
    else if (ans <= 30.0)
      return "Overweight"
    else
      return "Obese"
    
  }
//Use SpecRunner to check the Test Cases.