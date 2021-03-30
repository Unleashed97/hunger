// // const navLinksScroll = ()=>{
//     const navLinks = document.querySelectorAll('.nav__link');
//     const blocks = {}

//     navLinks.forEach(item =>{
//         let contentBlock = document.querySelector(`${item.getAttribute('data-target')}`);
//         blocks[item.getAttribute('data-target')] = contentBlock.offsetTop;
//     })
    
//     window.addEventListener('scroll', () =>{
//         for( let key in blocks){
//             if(pageYOffset > blocks[key]){
//                 navLinks.forEach(i=> i.classList.remove('active'));
//                 document.querySelector(`[data-target="${key}"]`).classList.add('active');
//             }
//         }
//     })
// }
// navLinksScroll();


const navLinksScroll = ()=>{
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.querySelector('.header');
    const blocks = {}

    navLinks.forEach(item =>{
        let contentBlock = document.querySelector(`${item.getAttribute('data-target')}`);
        blocks[item.getAttribute('data-target')] = contentBlock.offsetTop;
    })
    console.log(blocks)
    window.addEventListener('scroll', () =>{
        for( let key in blocks){
            if(pageYOffset + (window.screen.height / 2) > blocks[key] + header.offsetHeight){
                navLinks.forEach(i=> i.classList.remove('active'));
                document.querySelector(`[data-target="${key}"]`).classList.add('active');
            }
        }
    })
}
navLinksScroll();