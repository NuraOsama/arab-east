(function ($) {

    "use strict";
    new WOW().init();


    //preloader

   let  mainStatus  = $('.preloader-status');
   let mainBody = $('body');
   let mainPreloader  = $('.preloader');
   window.onload = function() {
    mainStatus.fadeOut();
    mainPreloader.delay(500).fadeOut('slow');
    mainBody.addClass('loaded').delay(500).css({
        'overflow': 'auto'
    });

  }

   

// responsive collapse navbabr   

$(".collapse").on('show.bs.collapse', function () {

  $(".navbar-light").addClass('slidedown')

});

$(".collapse").on('hide.bs.collapse', function () {

  $(".navbar-light").removeClass('slidedown')

});
   //sticky navbar
   
 $(window).scroll(function () {


  if ($(window).scrollTop()) {
      $('.navbar-light').addClass('sticky-top').animate({

      }, 4000);


      $(".collapse").on('show.bs.collapse', function () {

        $(".navbar-light").removeClass('slidedown')
      
      });
      
      $(".collapse").on('hide.bs.collapse', function () {
      
        $(".navbar-light").removeClass('slidedown')
      
      });

  } 
  else {
      $('.navbar-light').removeClass('sticky-top').animate({

      }, 4000);

      $(".collapse").on('show.bs.collapse', function () {

        $(".navbar-light").addClass('slidedown')
      
      });
      
      $(".collapse").on('hide.bs.collapse', function () {
      
        $(".navbar-light").removeClass('slidedown')
      
      });
  

  }

});


  // active links
  
  $('.nav-link').filter(function(){
    return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
  

      // scroll to top
          
      $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
      
          $(".auto-scroll-to-top").removeClass("non-hover");                 
          $(".auto-scroll-to-top").addClass("visible");  

         } 
         else {

          $(".auto-scroll-to-top").addClass("non-hover");
          $(".auto-scroll-to-top").removeClass("visible");

         }    

        });
           

       $('.auto-scroll-to-top').on('click touchend', function(event) {
        $("html, body").animate({scrollTop: 0}, 1000);
        event.preventDefault();
      });
  

})(jQuery);
