


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
  