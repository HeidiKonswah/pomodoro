var sessionNum = Number($("#sessionNum").html());
var breakNum =Number($("#breakNum").html());

$("#minus5session").click(function(){
  if (sessionNum >= 5){
    sessionNum -= 5;
  }
  $("#sessionNum").html(sessionNum);
});

$("#plus5session").click(function(){
  sessionNum += 5;
  $("#sessionNum").html(sessionNum);
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
