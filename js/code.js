// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var ascore = 0;
    var bscore = 0;
    var cscore = 0;
    var sofisticado = 0;
    var total = 0;
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    console.log(choices);
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        total += parseInt(choices[i].value);
        console.log(total);
        if(choices[i].name && choices[i].name == "q12")
          sofisticado = 1;
        // If you add more choices and outcomes, you must add another if statement below.
      }
    }
    
    // Find out which choice got the highest score.
    // If you add more choices and outcomes, you must add the variable here.
    //var maxscore = Math.max(c1score,c2score,c3score,c4score);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    
    if (sofisticado ==1) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "SOFISTICADO";
    }
    else{
      if (total <= 14) { // If user chooses the first choice the most, this outcome will be displayed.
        answerbox.innerHTML = "ADVERSO AL RIESGO.";
      }
      if (total >=15 && total <=28) { // If user chooses the second choice the most, this outcome will be displayed.
        answerbox.innerHTML = "MODERADO";
      }
      if (total >29 && total <=64) { // If user chooses the third choice the most, this outcome will be displayed.
        answerbox.innerHTML = "PROPENSO AL RIESGO";
      }
    }
    // If you add more choices, you must add another response below.
  }
  
  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }
