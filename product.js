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


// product filter

let pro_input=document.querySelector(".pro-input")
let products=document.querySelector(".products")
let products_box=products.querySelectorAll(".box")

pro_input.addEventListener("keyup",()=>{
  
    // console.log(event.target.value)
    products_box.forEach((e)=>{
        // console.log( e.querySelector("p").textContent)
        let product=e.querySelector("p").textContent.toLocaleLowerCase()
         let result=product.includes(event.target.value.toLocaleLowerCase())
         console.log(result)
         if(result){
            
            e.classList.remove("hidden")
         }else{
            e.classList.add("hidden")
            

         }
         
     
     })
})



