import $ from 'jquery';

$(".footer-links-wrapper h3").on("click", function () {
  if ($(window).width() < 768) {
    if ($(this).next("ul").fadeToggle()) $(this).toggleClass("expanded");
  }
  $(window).on("resize", function () {
    window.location.reload();
  });
});


// Get all h3 elements within the .footer-links-wrapper element
// const h3Elements = document.querySelectorAll('.footer-links-wrapper h3');

// // Attach a click event listener to each h3 element
// h3Elements.forEach(function(h3Element) {
//   h3Element.addEventListener('click', function() {
//     // Check if the window width is less than 768 pixels
//     if (window.innerWidth < 768) {
//       // Get the next ul element and toggle its display using CSS opacity
//       const ulElement = this.nextElementSibling;
//       ulElement.style.transition = "opacity 0.3s ease-in-out";
//       ulElement.style.opacity = ulElement.style.opacity === "1" ? "0" : "1";

//       // Toggle the 'expanded' class on the clicked h3 element
//       this.classList.toggle('expanded');
//     }
//   });
// });

// // Attach a resize event listener to the window
// window.addEventListener('resize', function() {
//   // Reload the page when the window is resized
//   Location.reload();
// });
