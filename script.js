const slider=document.querySelector(".sliderWrapper");
const menuOption= document.querySelectorAll('.menuitem');

menuOption.forEach((slides, index)=>{
  slides.addEventListener("click",()=>{
    slider.style.transform=`translateX(${-100 * index}vw)`
  })

})