
const menu = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');

menu.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menu.setAttribute('aria-expanded', 'false');
  });
});

// Gallery filters

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');

filters.forEach(button => {
  button.addEventListener('click', () => {

    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.filter;

    cards.forEach(card => {
      card.hidden =
        category !== 'all' &&
        card.dataset.category !== category;
    });

  });
});
