const scrollBtn = () =>{
    const introDownBtn = document.querySelector('.intro__down');
    const aboutBlock = document.querySelector('.section--about');
    introDownBtn.addEventListener('click', ()=>{
        aboutBlock.scrollIntoView({ behavior: "smooth"});
    })
}
scrollBtn();