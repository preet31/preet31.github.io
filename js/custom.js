$(window).scroll(function(){
  $(".container").css("opacity", 1 - $(window).scrollTop() / 250);
});