$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
    
  });
});


$('.form-floating-label input, .form-floating-label textarea').focusin(function(){
  $(this).parent().addClass('has-value');
});

$('.form-floating-label input, .form-floating-label textarea').blur(function(){
  if(!$(this).val().length > 0) {
    $(this).parent().removeClass('has-value');
  }
});

