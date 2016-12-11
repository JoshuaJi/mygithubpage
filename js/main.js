var trans_speed = 200;

function showHome(){

  $('#portfolio').fadeOut(trans_speed,function(){
    $('#home').fadeIn(trans_speed);
  });

  console.log("home displayed");
}

function showPortfolio(){

  $('#home').removeClass("animated fadeIn").fadeOut(trans_speed,function(){
    $('#portfolio').fadeIn(trans_speed);
  });

  console.log("portfolio displayed");
}

$(document).ready(function(){
  $('#portfolio').hide();
  $('#portfolio').css({'display':'block'});
  $('#portfolio').hide();

});

$(function() {
  $(".nav-item").on("click", function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
});
