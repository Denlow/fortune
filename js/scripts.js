var fortuneCount = 0;

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortuneSigns]:checked").each(function(){
      fortuneCount+=2;
      $("#output").show();
      $("form").hide();
    });
    if (fortuneCount<4){
      $("#output").append("you are gonna die");
    } else if (fortuneCount>=4 && fortuneCount<10) {
      $("#output").append("you are going to be rich");
    } else {
      $("#output").append("everything will stay the same");
    }
  });
});
