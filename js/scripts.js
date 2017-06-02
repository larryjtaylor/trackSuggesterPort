$(document).ready(function(){
  $(".question-box").submit(function(event) {

    var co_size = $("select#co_size").val();
    var platform = $("select#platform").val();
    var stack = $("select#stack").val();
    var city = $("select#city").val();

    if(co_size === ("large" || "medium") && platform === ("full" || "both") && stack === ("back" || "full") && city === ("ca" || "ny")) {
      $("#temp, #java, #css").hide();
      $("#ruby").show();
    } else if(co_size === ("large" || "medium") && platform === "mobile" && stack === ("front" || "both") && city === ("ca" || "or")){
      $("#temp, #ruby, #css").hide();
      $("#java").show();
}
    // } else {
    //   $("#temp, #ruby, #java").hide();
    //   $("#css").show();
    // }
    event.preventDefault();
  });
});
