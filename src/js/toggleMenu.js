const toggleMenu = ()=>{
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burgerBtn.addEventListener('click', ()=>{
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    })
}
toggleMenu();