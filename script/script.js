const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");



// mostra a sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// fecha a sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display= 'none';
})

// muda thema

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

