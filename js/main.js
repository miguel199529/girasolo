jQuery(document).ready(function ($) {
  // Header fixed and Back to top button
  $(window).scroll(function () {
    const element = document.getElementById('logoGira');
    const element2 = document.getElementById('icono');
    if ($(this).scrollTop() > 100) {
      element.src = "img/Logo_Girasolo.png"
      element2.style.color = "#fff";
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      element.src = "img/Logo_Girasolo_Negro.png"
      element2.style.color = "#000";
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1000);
      }
    }
  });
});

function myFunction(x) {
  const element = document.getElementById('btns-carousel');
  const element1 = document.getElementById('info1-carousel');
  const element2 = document.getElementById('info2-carousel');
  const element3 = document.getElementById('info3-carousel');
  const element4 = document.getElementById('bigpink-btn');
  const element5 = document.getElementById('contacto-info');
  const element6 = document.getElementById('contacto-header');
  const element7 = document.getElementById('servicios-header');
  
  if (x.matches && element && element1 && element2 && element3 
      && element4 && element5 && element6 && element7 ) { // If media query matches
    element.setAttribute("align", "center");
    element1.setAttribute("align", "center");
    element2.setAttribute("align", "center");
    element3.setAttribute("align", "center");
    element4.setAttribute("align", "center");
    element5.setAttribute("align", "center");
    element6.setAttribute("align", "center");
    element7.setAttribute("align", "center");
    element8.setAttribute("align", "center");
    
  } else if (element && element1 && element2 && element3
             && element4 && element5 && element6 && element7){
    element.setAttribute("align", "");
    element1.setAttribute("align", "");
    element2.setAttribute("align", "");
    element3.setAttribute("align", "");
    element4.setAttribute("align", "");
    element5.setAttribute("align", "");
    element6.setAttribute("align", "");
    element7.setAttribute("align", "");
    element8.setAttribute("align", "");
  }
}
var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

