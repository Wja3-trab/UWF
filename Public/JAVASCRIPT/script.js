document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.vertical-tabs');
  const closeBtn = document.querySelector('.close-menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.add('show');
    menuBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('show');
    menuBtn.style.display = 'block';
  });
});
