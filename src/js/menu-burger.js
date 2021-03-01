const menuBurger = () =>{
    const burgerMenuBtn = document.querySelector('.menu-burger');
    const menuList = document.querySelector('.menu__list');
    const menuItems = document.querySelectorAll('.menu__item');
    const menuContent = document.querySelector('.menu-list');
    burgerMenuBtn.addEventListener('click', ()=>{
        burgerMenuBtn.classList.toggle('active');
        menuList.classList.toggle('active');
        menuItems.forEach(item =>{
            item.addEventListener('click', () =>{
            let menuContentOffsetTop = menuContent.offsetTop - 60;
                window.scrollTo({
                    top: menuContentOffsetTop,
                    behavior: 'smooth'
                })
            })
        })
    })

}
menuBurger();