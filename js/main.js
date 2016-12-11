function showPortfolio(){
  // $(".title").css({"animation-duration":"1s"});
  // $(".title").addClass("fadeOut hidden");
  // $("#portfolio").addClass("animated fadeIn");
  $("#portfolio").removeClass("hidden");

  // setTimeout(function(){
  //   $(".title").css({"display": "none"});
  //   $("#portfolio").css({"display":"block"});
  // },300);
  console.log("portfolio displayed");
}

$(function() {
  $(".nav-item").on("click", function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
});
