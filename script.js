const slider=document.querySelector(".sliderWrapper");
const menuOption= document.querySelectorAll('.menuitem');

const product=[
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  }
];

let choosenProduct = product[0];
const choosenProductImg=document.querySelector('.productimg');
const choosenProductTitle=document.querySelector(".productTitle");
const chooseProductPrice=document.querySelector(".productPrice");
const chooseProductColor=document.querySelectorAll('.color');
const chooseProductSize=document.querySelectorAll('.size');
console.log(choosenProduct);
menuOption.forEach((slides, index)=>{
  slides.addEventListener("click",()=>{
    //slide changing 
    slider.style.transform=`translateX(${-100 * index}vw)`

  // change product
  choosenProduct=product[index];

  // change product session contents
  choosenProductTitle.textContent= choosenProduct.title;
  chooseProductPrice.textContent=`$${choosenProduct.price}`
  
  choosenProductImg.src=choosenProduct.colors[0].img;
  chooseProductColor.forEach((color, index)=>{
    color.style.backgroundColor=choosenProduct.colors[index].code;

  })



  })

})
// change product img based on color clicked
chooseProductColor.forEach((color,index)=>{
  color.addEventListener('click',(event)=>{
    console.log(event);
    choosenProductImg.src=choosenProduct.colors[index].img;
  })
})
// adding click effect to sizes in product session
chooseProductSize.forEach((size,index)=>{
  size.addEventListener('click',e=>{
    chooseProductSize.forEach(size=>{
      size.style.backgroundColor="white"
      size.style.color="black"
    })
        size.style.backgroundColor="black"
      size.style.color="white"
  })

})
const buybtn = document.querySelector('.buynow')
const payment = document.querySelector('.payment')
const close =document.querySelector('.close')
buybtn.addEventListener('click',event=>{
  payment.style.display="flex";
})
close.addEventListener('click',event=>{
payment.style.display="none";
}
)
