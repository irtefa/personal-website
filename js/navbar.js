$(document).ready(function(){
    $(".projects-text").css('display', 'none');
    $(".jobs-text").css('display', 'none');
    $(".contact-text").css('display', 'none');

  $(".about").click(function(){
    $(".projects-text").css('display', 'none');
    $(".jobs-text").css('display', 'none');
    $(".contact-text").css('display', 'none');
  });
  $(".projects").click(function(){
    $(".about-text").css('display', 'none');
    $(".projects-text").css('display', 'block');
    $(".jobs-text").css('display', 'none');
    $(".contact-text").css('display', 'none');
  });
  $(".jobs").click(function(){
    $(".about-text").css('display', 'none');
    $(".projects-text").css('display', 'none');
    $(".jobs-text").css('display', 'block');
    $(".contact-text").css('display', 'none');
  });
  $(".contact").click(function(){
    $(".about-text").css('display', 'none');
    $(".projects-text").css('display', 'none');
    $(".jobs-text").css('display', 'none');
    $(".contact-text").css('display', 'block');
  });
});

