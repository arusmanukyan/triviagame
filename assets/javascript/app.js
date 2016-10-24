
$(document).ready(function(){ 
// set timer
    var secondsLeft = 26;
    var interval = setInterval(function() {
         document.getElementById("clockdiv").innerHTML = --secondsLeft;

        if (secondsLeft <= 0)
        {
          document.getElementById("clockdiv").innerHTML = "Times up";
        }

    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== "clockdiv") ? sec : 0;
        time = sec;
        generateTime(time);
    }
    }, 1000);

   var correctAnswer = 0;
   var wrongAnswer = 0;

   function userAnswer() {
    document.getElementById("correct");
  }
 
    console.log("correctAnswer");


 });