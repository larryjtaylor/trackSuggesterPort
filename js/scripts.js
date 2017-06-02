$(document).ready(function(){
  $(".question-box").submit(function(event) {

    var co_size = $("select#co_size").val();
    var platform = $("select#platform").val();
    var stack = $("select#stack").val();
    var city = $("select#city").val();

    if(co_size === "large" && platform === "web" && stack === "back" && city ==="ca") {
      $("#temp, #java, #css").hide();
      $("#ruby").show();
    } else if(co_size === "medium" && platform === "mobile" && stack === "full" && city === "ny"){
      $("#temp, #ruby, #css").hide();
      $("#java").show();
    } else {
      $("#temp, #ruby, #java").hide();
      $("#css").show();
    }
    event.preventDefault();
  });
});
