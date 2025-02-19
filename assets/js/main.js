/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          menuIcon = document.getElementById('menu-icon'); // Get the icon element

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            
            // Toggle between hamburger and 'X' icon
            if (nav.classList.contains('show')) {
                menuIcon.classList.replace('bx-menu', 'bx-x'); // Show 'X' when menu is open
                menuIcon.classList.add('rotate-icon'); // Add rotate class for animation
            } else {
                menuIcon.classList.replace('bx-x', 'bx-menu'); // Show hamburger when menu is closed
                menuIcon.classList.remove('rotate-icon'); // Remove rotate class
            }
        });
    }
};
showMenu('nav-toggle', 'nav-menu');




/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.card', {
    distance: '20px',
    origin: 'top',
    duration: 2000,  
    interval: 200    
});


// Other elements reveal
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyPtTHfGTxIGeyHWCkO05ammq6cdyXlzOFnI20HRB2lVzwZCAe_Y3QQIkt_MRd0Pt-53A/exec'

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Your form is submitted successfully.");
      form.reset(); // Clear the input fields
    })
    .then(() => { 
      window.location.reload(); 
    })
    .catch(error => console.error('Error!', error.message));
});


// Get the button
let backToTopBtn = document.getElementById("back-to-top");

// Show or hide the button when scrolling
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add("show-back-to-top");
    } else {
        backToTopBtn.classList.remove("show-back-to-top");
    }
};

// Scroll back to top when the button is clicked
backToTopBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});
