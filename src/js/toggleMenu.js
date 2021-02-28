const toggleMenu = ()=>{
    const burgerBtn = document.querySelector('.burger');
    burgerBtn.addEventListener('click', ()=>{
        burgerBtn.classList.toggle('active');
    })
}
toggleMenu();