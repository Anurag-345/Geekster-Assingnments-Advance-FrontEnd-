const sidenav = document.querySelector('.sidenav');

const ham = document.getElementById('hamBurger');

ham.addEventListener('click', () => {
   
    sidenav.style.display = "initial";
    
});

const cross = document.getElementById('sidenavCross');
cross.addEventListener('click', () => {
    sidenav.style.display = "none";
});
