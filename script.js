const sr = ScrollReveal();

sr.reveal('.about-two', {
  delay: 600,
  duration: 800,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
  reset: true
});

sr.reveal('.works', {
  delay: 200,
  duration: 800,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
});

sr.reveal('.blog-container', {
  delay: 200,
  duration: 800,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
});



const menuBtn = document.querySelector('.fa-bars');
const navList = document.querySelector('.navlist');
menuBtn.onClick = function() {
  menuBtn.classList.toggle('fa-xmark');
  navList,classList.toggle('active');
}


const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  loadElement.classList.add("loaded");
});



const filterButtons = document.querySelectorAll('.filter-btn');
const teamMembers = document.querySelectorAll('.team-member');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.dataset.filter;

    teamMembers.forEach((member) => {
      member.style.display = 'none';

      if (filterValue === 'all' || member.classList.contains(filterValue)) {
        member.style.display = 'block';
      }
    });
  });
});
