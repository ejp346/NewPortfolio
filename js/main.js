$(document).ready(function() {

  console.log("JavaScript Loaded!");
   
  var heightOfWindow = $(window).scrollTop() + $(window).height();
  var halfOfWindow = heightOfWindow / 2;

  $(document).on('scroll', function() {

    if ($(".content").length > 0) {
      var triggerDivTopPos = $(".content").offset().top - $(window).scrollTop();

      if (triggerDivTopPos < halfOfWindow) {
        $(".bg-img").css("opacity", "0.2");
        $(".fade-out").css("opacity", "0");
      } else {
        $(".bg-img").css("opacity", "1");
        $(".fade-out").css("opacity", "1");
      }
    }

    if ($(".casestudy-wpr").length > 0) {
      var caseStudyWprTop = $(".casestudy-wpr").offset().top - $(window).scrollTop();

      if (caseStudyWprTop < halfOfWindow) {
        $(".fade-out").css("opacity", "0");
      } else {
        $(".fade-out").css("opacity", "1");
      }
    }
    
  })

  // This notification will fade in after 2 seconds
  setTimeout(function() {
    $(".notification").css("transform", "translateX(0%)");
  }, 2000)

  $(".close").click(function() {
    $(".notification").css("transform", "translateX(200%)");
  })
})


$(function() {

  var documentEl = $(document),
      fadeElem = $('.fade-scroll');

      documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function() {
          var $this = $(this),
          elemoffsetTop = $this.offset().top;
          if (currScrollPos > elemoffsetTop) $this.css('opacity', 1 - (currScrollPos - elemoffsetTop)/400)

        });
      });
  });
