$(document).ready(function(){
$("#startBreak").hide();
var sessionNum = Number($("#sessionNum").html());
var breakNum =Number($("#breakNum").html());
var sessionTime = Number($("#sessionTime").html());
var breakTime = Number($("#breakTime").html());


  $("#startBtn").click(function(){
  sessionTime *= 60;
  $(".header").hide();
  $("#say").html("Keep Working . . .");
   var counter = setInterval(timer,1000);

   function timer(){
     sessionTime -= 1;
     if (sessionTime === 0){
       clearInterval(counter);
       $("#say").hide();
       $("#startBreak").show();
     }
     if (sessionTime%60 >=10){
        $("#sessionTime").html(Math.floor(sessionTime/60) +":"+ sessionTime%60);
      } else {
        $("#sessionTime").html(Math.floor(sessionTime/60) +":0"+ sessionTime%60);
      }
   }
});

$("#startBreakBtn").click(function(){
    breakTime *= 60;
  console.log(breakTime);
   var breakCounter = setInterval(breakTimer,1000);

   function breakTimer(){
     breakTime -= 1;
     if (breakTime === 0){
       clearInterval(breakCounter);
       // reset everything here
       $("")
     }
     if (breakTime%60 >=10){
        $("#breakTime").html(Math.floor(breakTime/60) +":"+ breakTime%60);
      } else {
        $("#breakTime").html(Math.floor(breakTime/60) +":0"+ breakTime%60);
      }
   }
});

$("#minus5session").click(function(){
  if (sessionNum >= 5){
    sessionNum -= 5;
  }
  $("#sessionNum").html(sessionNum);
  sessionTime = sessionNum;
  $("#sessionTime").html(sessionTime);
});

$("#plus5session").click(function(){
  sessionNum += 5;
  $("#sessionNum").html(sessionNum);
  sessionTime = sessionNum;
  $("#sessionTime").html(sessionTime);
});

$("#minus5break").click(function(){
  if (breakNum >= 5){
    breakNum -= 5;
  }
  $("#breakNum").html(breakNum);
});

$("#plus5break").click(function(){
  breakNum += 5;
  $("#breakNum").html(breakNum);
});



});
