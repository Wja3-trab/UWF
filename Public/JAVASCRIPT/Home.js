document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const headList = document.querySelector('.headList');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', () => {
        headList.classList.add('show');
        menuBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        headList.classList.remove('show');
        menuBtn.style.display = 'block';
    });

});