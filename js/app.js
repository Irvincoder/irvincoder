function toggleMenu(){
    const menuToggle = document.querySelector('.menu-open');
    const NavbarToggle = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    NavbarToggle.classList.toggle('active');
}
function toggleClose(){
    const toggleMenu = document.querySelector('.menu-close');
    const NavbarToggle = document.querySelector('.navigation');
    toggleMenu.classList.remove('active');
    NavbarToggle.classList.remove('active');
}