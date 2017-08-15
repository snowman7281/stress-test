$(document).ready(function(){
  $("#stress-form").submit(function(event){
    event.preventDefault();
    var surveyTotal = 0;
    $("#experience").show();
    $("input:checkbox[name=exp]:checked").each(function() {
      var userExp = $(this).val();
      $("#experience").append(userExp + "<br>");
      surveyTotal ++;
    });
    $("#health").show();
    $("input:checkbox[name=health]:checked").each(function() {
      var userHealth = $(this).val();
      $("#health").append(userHealth + "<br>");
      surveyTotal ++;
    });
    if (surveyTotal >= 6) {
      $("#danger").show();
    }else if(surveyTotal >= 4){
      $("#warning").show();
    }else {
      $("#good").show();
    }
    $("#stress-form").hide();
  });
});
