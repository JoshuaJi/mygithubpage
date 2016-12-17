particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});


function showHome(){
  $('#home').siblings('div').addClass('animated fadeOut');
  setTimeout(function(){
    $('#home').siblings('div').removeClass('animated fadeOut isActive');
    $('#home').addClass('animated fadeIn isActive');
  }, 500);
}

function showPortfolio(){
  $('#portfolio').siblings('div').addClass('animated fadeOut');
  setTimeout(function(){
    $('#portfolio').siblings('div').removeClass('animated fadeOut isActive');
    $('#portfolio').addClass('animated fadeIn isActive');
  }, 500);
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
