 var myWords = ["EGG", "MILK", "BUTTER", "JAM", "OATS", "SUGAR","BREAD","RUSK"];
$(document).ready(function(){
    arrangeGame();                   
});
function arrangeGame()
{
  $.each(myWords, function(key, item){
      $("#hint").append("<p>" + item + "</p>");
  })
}
