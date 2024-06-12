let bar=document.querySelector(".bar")
let slider_nav=document.querySelector(".side-nav")
let x_icon=document.querySelector(".x-icon")



bar.addEventListener("click",()=>{
    slider_nav.classList.remove("right-[-50%]")
    slider_nav.classList.add("right-[0%]")

})
x_icon.addEventListener("click",()=>{
    slider_nav.classList.add("right-[-50%]")
    slider_nav.classList.remove("right-[0%]")

})