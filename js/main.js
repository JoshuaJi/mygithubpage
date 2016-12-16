var trans_speed = 200;
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});


function showHome(){
  $('#home').siblings('div').addClass('animate-out');
  setTimeout(function(){
    $('#home').siblings('div').removeClass('animate-out isActive');
    $('#home').addClass('isActive');
  }, 300);
}

function showPortfolio(){
  $('#portfolio').siblings('div').addClass('animate-out');
  setTimeout(function(){
    $('#portfolio').siblings('div').removeClass('animate-out isActive');
    $('#portfolio').addClass('isActive');
  }, 300);
}

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(function() {
  $(".nav-item").on("click", function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
});
