document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const navList = document.getElementById('navList');
  const closeBtn = document.getElementById('closeBtn');

  menuBtn.addEventListener('click', () => {
    navList.classList.add('show');
    menuBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    navList.classList.remove('show');
    menuBtn.style.display = 'block';
  });
});
