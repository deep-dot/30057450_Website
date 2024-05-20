
// navbar

window.addEventListener('DOMContentLoaded', (event) => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  fetch('./components/navbar.html')
    .then(response => response.text())
    .then(html => {
      navPlaceholder.innerHTML = html;
      initNavbar(); // Initialize navbar interactions after the HTML is loaded
      burgerMenu();
    })
    .catch(error => {
      console.warn('Error loading the navigation:', error);
    });
});

function initNavbar() {
  var navbar = document.querySelector('.navbar');
  console.log('navbar===', navbar);
  var more = document.querySelector('.more > a');
  console.log('more===', more);
  var dropdown = document.querySelector('.more .dropdown-content');

  var navsection = document.querySelector('.navsection');
  var bodyContent = document.querySelector('.body-content');

  function closeDropdown() {
    dropdown.style.display = 'none';
    navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
    navsection.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
    bodyContent.style.paddingTop = 0;
  }

  more.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (dropdown.style.display === 'flex') {
      closeDropdown();
    } else {
      dropdown.style.display = 'flex';
      navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 100%, rgba(255,224,158,1) 15%)';
      navsection.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 100%, rgba(255,224,158,1) 15%)';
      let height = navbar.offsetHeight;
      bodyContent.style.paddingTop = `${height}px`;
    }
  });

  document.body.addEventListener('click', function () {
    closeDropdown();
  });
}


function burgerMenu() {
  const burger = document.querySelector('.burger');
  if (burger) {
    const navLinks = document.querySelector('.nav-links')
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        navLinks.style.width = '100%';
        navLinks.style.left = '0';
      } else {
        navLinks.style.width = '';
        navLinks.style.left = '';
      }
    });
  } else {
    console.error('Burger menu button not found!');
  }
};




// footer
window.addEventListener('DOMContentLoaded', (event) => {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  fetch('./components/footer.html')
    .then(response => response.text())
    .then(html => {
      footerPlaceholder.innerHTML = html;
    })
    .catch(error => {
      console.warn('Error loading the footer:', error);
    });
});

