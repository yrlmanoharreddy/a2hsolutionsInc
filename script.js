document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class 'scroll-link'
  var scrollLinks = document.querySelectorAll('.scroll-link');

  // Add a click event listener to each link
  scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
          event.preventDefault();

          // Get the target section's ID from the link's href attribute
          var targetId = link.getAttribute('href').substring(1);

          // Scroll smoothly to the target section
          document.getElementById(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});


