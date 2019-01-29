 $(document).ready(function() {

  console.log("JavaScript Loaded!");

  if ($(window).width() > 450) {

    jQuery('body').css('display','none');

    jQuery(document).ready(function() {
      jQuery('body').fadeIn();
      jQuery('.logo').on('click',function(event) {
        var thetarget = this.getAttribute('target')
        if (thetarget != "_blank"){     
          var thehref = this.getAttribute('href')
          event.preventDefault();
          jQuery('body').fadeOut(function() {
            // alert(thehref)
            window.location = thehref         
          });
        }
      });
    });

    setTimeout(function() {
      jQuery('body').fadeIn();
    }, 1000)
  }
   
  var heightOfWindow = $(window).scrollTop() + $(window).height();
  var halfOfWindow = heightOfWindow / 2;

  // This notification will fade in after 2 seconds (2000 miliseconds is how JavaScript determines 2 seconds)
  setTimeout(function() {
    $(".notification").css("opacity", "1");
  }, 2000)

  $(".close").click(function() {
    $(".notification").css("opacity", "0");
  })
})
  