var sessionNum = Number($("#sessionNum").html());
var breakNum =Number($("#breakNum").html());
var sessionTime = Number($("#sessionTime").html());
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

$("#startBtn").click(function(){
  sessionTime *= 60;
  $("#say").html("Keep Working . . .");

    setInterval(function(){
    if (sessionTime>0){
     sessionTime -= 1;
      if (sessionTime%60 >=10){
        $("#sessionTime").html(Math.floor(sessionTime/60) +":"+ sessionTime%60);
      } else {
        $("#sessionTime").html(Math.floor(sessionTime/60) +":0"+ sessionTime%60);
      }
    }
  },1000);

});
