var p1 = document.querySelector(".self1 p")
var p2 = document.querySelector(".self2 p")
var p3 = document.querySelector(".self3 p")
var menu = document.querySelector(".ri-menu-2-line")
var close = document.querySelector(".ri-close-line")


var typed = new Typed('#element', {
    strings: ['Web Developer', '&amp; a software Developer'],
    typeSpeed: 50,
   
  });

  p1.addEventListener("mouseenter",function(){
    gsap.to(".self1 ul",{
      opacity:1
    })
  })
  p1.addEventListener("mouseleave",function(){
    gsap.to(".self1 ul",{
      opacity:0
    })
  })
  p2.addEventListener("mouseenter",function(){
    gsap.to(".self2 ul",{
      opacity:1
    })
  })
  p2.addEventListener("mouseleave",function(){
    gsap.to(".self2 ul",{
      opacity:0,
      duration:1
    })
  })
  p3.addEventListener("mouseenter",function(){
    gsap.to(".self3 ul",{
      opacity:1,
      duration:1
    })
  })
  p3.addEventListener("mouseleave",function(){
    gsap.to(".self3 ul",{
      opacity:0,
      duration:1
    })
  })

menu.addEventListener("click",function(){
  gsap.to("nav .right",{
    opacity:1,
    zIndex:1,
    
  })
})
close.addEventListener("click",function(){
  gsap.to("nav .right",{
    opacity:0,
    zIndex:0
  })
})
