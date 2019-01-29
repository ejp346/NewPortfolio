$(document).ready(function() {

  console.log("JavaScript Loaded!");
   
  var heightOfWindow = $(window).scrollTop() + $(window).height();
  var halfOfWindow = heightOfWindow / 2;

  $(document).on('scroll', function() {

    if ($(".content").length > 0) {
      var triggerDivTopPos = $(".content").offset().top - $(window).scrollTop();

      if (triggerDivTopPos < halfOfWindow) {
        $(".bg-img").css("opacity", "0.3");
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

  // This notification will fade in after 2 seconds (2000 miliseconds is how JavaScript determines 2 seconds)
  setTimeout(function() {
    $(".notification").css("opacity", "1");
  }, 2000)

  $(".close").click(function() {
    $(".notification").css("opacity", "0");
  })
})
  