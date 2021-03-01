const toggleMenu = ()=>{
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    burgerBtn.addEventListener('click', ()=>{
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');

        navLinks.forEach(item =>{
            item.addEventListener('click', ()=>{
                burgerBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            })
        })
    })
}
toggleMenu();