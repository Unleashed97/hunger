const navScrollToBlock = ()=>{
    const menuLinks = document.querySelectorAll('[data-target]');
    menuLinks.forEach(item =>{
        item.addEventListener('click', e =>{
            e.preventDefault();
            let blockId = item.getAttribute('data-target');
            document.querySelector(`${blockId}`).scrollIntoView({behavior: 'smooth'});
        })
    })
}
navScrollToBlock();