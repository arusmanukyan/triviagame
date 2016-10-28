
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



    // var questions =
    // {
    //     question1: "What color is Mars", 
    //     answer1:
    //     {
    //       yellow: "Yellow",
    //       red: "Red",
    //       green: "Green",
    //     }
    //     question2: "How old is the sun?", 
    //     answer2:
    //     {
    //       two: "2 million years old",
    //       three: "3 billion years old",
    //       fourPointFive: "4.5 billion years old";
    //     }
    //     question3: "What are meteor showers?", 
    //     answer3:
    //     {
    //       rocks: "Rocks",
    //       dust: "Dust",
    //       water: "Water";
    //     }
    // }


      // console.log correct or wrong answer. 

      $("input[name=answer]").change(function(){
       if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });

      $("input[name=correct1]").change(function(){
      if($("input[name=correct1]:checked").val() === "correct1") {
        console.log("You have selected the correct answer!");
      }else if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });

      $("input[name=correct2]").change(function(){
      if($("input[name=correct2]:checked").val() === "correct2") {
        console.log("You have selected the correct answer!");
      }else if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });
      $("input[name=correct3]").change(function(){
      if($("input[name=correct3]:checked").val() === "correct3") {
        console.log("You have selected the correct answer!");
      }else  $("input[name=answer]").change(function(){
       if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });
    });
      $("input[name=correct4]").change(function(){
      if($("input[name=correct4]:checked").val() === "correct4") {
        console.log("You have selected the correct answer!");
      }else  $("input[name=answer]").change(function(){
       if ($("input[name=answer]:checked").val() === "wrong"){
        console.log("You have selected the wrong answer!");
      }
    });
    });
});
