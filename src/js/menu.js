const menu = () =>{
    const menuItems = document.querySelectorAll('.menu__link');
    menuItems.forEach(item =>{
        item.addEventListener('click', e =>{
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        })
    })
}
menu();