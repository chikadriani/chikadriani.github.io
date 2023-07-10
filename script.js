const menuToggle = document.querySelector('.menu-toggle input');
const navMid = document.querySelector('nav .NavBar .GroupNav .Mid');

menuToggle.addEventListener('click', function(){
    navMid.classList.toggle("tampil");
});