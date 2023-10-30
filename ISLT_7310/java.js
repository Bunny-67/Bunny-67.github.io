


function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
  }
  
  function toggleMobileSubMenu() {
    const mobileSubMenu = document.querySelector('.mobile-sub-menu');
    mobileSubMenu.classList.toggle('mopen');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#hamburger-icon').addEventListener('click', function () {
        console.log('#Hamburger Clicked');
        toggleMobileMenu();
    });
  
    document.querySelector('#mobile-sub-menu-btn').addEventListener('click', function (event) {
      event.stopPropagation(); 
      toggleMobileSubMenu();
    });

  });
  

  const imageContainer = document.querySelector(".image-container");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const images = document.querySelectorAll(".image");

  // Add click event listeners to each image in the gallery
  images.forEach(image => {
      image.addEventListener("click", () => {
          const src = image.querySelector("img").getAttribute("src");
          fullscreenImage.setAttribute("src", src);
          imageContainer.style.display = "flex"; // Display the fullscreen container
          document.body.style.overflow = "hidden"; // Prevent scrolling on the background content
      });
  });

  // When the user clicks the fullscreen container, hide it
  imageContainer.addEventListener("click", () => {
      imageContainer.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling
  });