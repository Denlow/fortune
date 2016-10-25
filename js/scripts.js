var fortuneCount = 0;
//business logic//

// UI front logic starts //
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortuneSigns]:checked").each(function(){
      fortuneCount+=2;
      $("#output").fadeIn();
      $("form").fadeOut();
    });
    if (fortuneCount<4){
      $("#output").append("you gon' die, mon!");
    } else if (fortuneCount>=4 && fortuneCount<10) {
      $("#output").append("You is going be rich man, mon!");
    } else {
      $("#output").append("Nutting be different, mon!");
    }
  });
  $("#output button").click(function(){
     location.reload();
   });
});
