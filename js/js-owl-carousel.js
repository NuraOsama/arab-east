(function ($) {


//owl testimonials

let owltestimonials = $('.owl-testimonials');
owltestimonials.owlCarousel({

 items:1,
 loop:true,
 nav:true,
 dots:false,
 margin:15,
 autoplay:true,
 smartSpeed:3000,
 autoplaySpeed: 3000,
 autoplayTimeout:3000,
 autoplayHoverPause: true,
});


//owl partners

let owlpartners = $('.owl-partners');
owlpartners.owlCarousel({

 items:6,
 loop:true,
 nav:false,
 dots:false,
 margin:30,
 autoplay:true,
 smartSpeed:3000,
 autoplaySpeed: 3000,
 autoplayTimeout:3000,
 autoplayHoverPause: true,
 responsiveClass:true,
 responsive:{
  1440:{
    items:6,

  },

  1024:{

    items:6,

  },

  991:{
    items:4,

  },

  768 : {

    items:2,
     
  },

  766 : {

   items:2,
    
 },


 575 : {

    items:1,
     
  },



  500 : {

    items:1,
     
  },
   
   
 425: {

    items:1,
             
  },

  375: {

    items:1,
             
  },

  320: {

      items:1,
    
  },
  300: {

   items:1,
 
},
 200: {

 items:1,

 }
}
 
});

// owl nav projects
$( ".owl-carousel  .owl-prev").html('<span><img src="images/prev-icon.png"/></span>');
$( ".owl-carousel  .owl-next").html('<span><img src="images/next-icon.png"/></span>');

})(jQuery);    