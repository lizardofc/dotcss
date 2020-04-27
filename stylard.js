//=============== Navbar ===============//
if(document.querySelector('.navbar-horizontal')){
    const navbar = document.querySelector('.navbar-horizontal');
    const navbarLinks = document.querySelector('.navbar-links');
    const burger = document.createElement('button');
    burger.classList.add('burger');
    const line1 = document.createElement('div');
    line1.classList.add('line1');
    const line2 = document.createElement('div');
    line2.classList.add('line2');
    const line3 = document.createElement('div');
    line3.classList.add('line3');
    navbar.appendChild(burger);
    burger.appendChild(line1);
    burger.appendChild(line2);
    burger.appendChild(line3);

    burger.addEventListener('click', ()=>{
        navbarLinks.classList.toggle('navbar-active');
        burger.classList.toggle('burger-active');
    });
}
//======================================//
