// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
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
      answerbox.innerHTML = "SOFISTICADO:  Busca obtener una elevada rentabilidad tomando posiciones de mayor riesgo. Es conocedor del mercado y los riesgos inherentes al mismo. Se hace responsable de sus propias inversiones.";
    }
    else{
      if (total <= 14) { // If user chooses the first choice the most, this outcome will be displayed.
        answerbox.innerHTML = "ADVERSO AL RIESGO: Prefiere una menor exposición al riesgo, esto podría significar una menor rentabilidad y una myor probabilidad de preservar el capital.";
      }
      if (total >=15 && total <=28) { // If user chooses the second choice the most, this outcome will be displayed.
        answerbox.innerHTML = "MODERADO: Está dispuesto a invertir parte de su capital en títulas con cierta exposición al riesgo, esperando una mayor rentabilidad.";
      }
      if (total >29 && total <=64) { // If user chooses the third choice the most, this outcome will be displayed.
        answerbox.innerHTML = "PROPENSO AL RIESGO: Asume una fuerte exposición al riesgo, apostando a obtener una elevada rentabilidad.";
      }
    }
    // If you add more choices, you must add another response below.
  }
  
  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
    location.reload();
    return false;
  }
