const nav = ()=>{
    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');
    window.addEventListener('scroll', () =>{
        if(pageYOffset > intro.clientHeight / 5){
            header.classList.add('active');
        }
        else header.classList.remove('active');
    })
}
nav();