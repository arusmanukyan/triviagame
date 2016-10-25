
$(document).ready(function(){ 
// set timer
    var secondsLeft = 26;
    var interval = setInterval(function() {
         document.getElementById("clockdiv").innerHTML = "Time remaining!  " + --secondsLeft;

        if (secondsLeft <= 0){
          document.getElementById("clockdiv").innerHTML = "Time's up";
        }

    this.reset =  function(sec){
        sec = (typeof(sec) !== "clockdiv") ? sec : 0;
        time = sec;
        generateTime(time);
    }
    }, 1000);



      $("input[name=answer]").change(function(){
      if($("input[name=answer]:checked").val() === "correct1") {
        console.log("You have selected the correct answer!");
      } else if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });

      $("input[name=answer]").change(function(){
      if($("input[name=answer]:checked").val() === "correct2") {
        console.log("You have selected the correct answer!");
      } else if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });
      $("input[name=answer]").change(function(){
      if($("input[name=answer]:checked").val() === "correct3") {
        console.log("You have selected the correct answer!");
      } else if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });
      $("input[name=answer]").change(function(){
      if($("input[name=answer]:checked").val() === "correct4") {
        console.log("You have selected the correct answer!");
      } else if($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });
});
