const sr = ScrollReveal();
sr.reveal('.blog-container', {
  delay: 200,
  duration: 800,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
  reset: true
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
