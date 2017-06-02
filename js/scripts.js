$(document).ready(function(){
  $("select.question-box").submit(function() {
    var co_size = document.getElementById("#co_size");
      var selection = co_size.options[co_size.selectedIndex].value;
    var platform = document.getElementById("select#platform");
    var stack = document.getElementById("select#stack");
    var city = document.getElementById("select#city");

    if(selection === "large") {
      alert("it works");
      // $("#temp").hide();
      // $("#ruby").show();
    } else if () {
      $("#temp").hide();
      $("#java").show();
    } else () {
      $("#temp").hide();
      $("#css").show();
    }
  });
});
