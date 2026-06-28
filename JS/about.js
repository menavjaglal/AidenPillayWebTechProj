// jQuery enhancements for About page
$(document).ready(function() {
  
  // Fade in the content when the page loads
  $(".container").hide().fadeIn(1000);

  // Add hover animation to navigation links
  $("nav a").hover(
    function() {
      $(this).css("color", "#ffcc00"); // highlight on hover
    },
    function() {
      $(this).css("color", "#fff"); // revert back
    }
  );

  // Slide toggle for About section when clicking headings
  $("h2").click(function() {
    $(this).nextAll("p, ul").slideToggle();
  });

});
