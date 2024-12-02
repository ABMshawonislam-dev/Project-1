// let aboutData = [
//     {
//         heading: "Company Overview 1",
//         paragraph: "<span>Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.",
//         image: "images/Rectangle 3.jpg"
//     },
//     {
//         heading: "Company Overview 2",
//         paragraph: "<span>Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.",
//         image: "images/Rectangle 3.jpg"
//     },
//     {
//         heading: "Company Overview 3",
//         paragraph: "<span>Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.",
//         image: "images/Rectangle 3.jpg"
//     },
   
// ]

// let content = document.querySelector(".content")

// aboutData.map((item,index)=>{
//     let indx = index+1

//     if(indx%2 == 0){
//         content.innerHTML += `<div class="sidebyside">
//         <div class="img">
//             <img src="${item.image}" alt="Rectangle 3">
//         </div>
//         <div class="text">
//             <h3 class="poppins-bold">${item.heading}</h3>
//             <p class="poppins-regular"> ${item.paragraph}
//             </p>
//         </div>
        
//     </div>`
//     }else{
//         content.innerHTML += `<div class="sidebyside">
//         <div class="text">
//             <h3 class="poppins-bold">${item.heading}</h3>
//             <p class="poppins-regular"> ${item.paragraph}
//             </p>
//         </div>
//         <div class="img">
//             <img src="${item.image}" alt="Rectangle 3">
//         </div>
//     </div>`
//     }

   
// })



let banner = document.querySelector("#banner")
let outerimg = document.querySelector(".outerimg")
let emoji = document.querySelector(".emoji")
let para = document.querySelector(".para")
let get = document.querySelector(".get")
let drawer = document.querySelector(".drawer")
let close = document.querySelector(".close")


banner.addEventListener("mousemove",function(event){

    outerimg.style.transform = `translate(-${event.clientX/100}px,-${event.clientY/100}px)`
    emoji.style.transform = `translate(-${event.clientY/100}px,-${event.clientX/100}px)`
    para.style.transform = `translate(-${event.clientX/100}px,-${event.clientY/100}px)`
})

get.addEventListener("click",function(event){

    console.log(event)
    drawer.style.left = "0"
})

close.addEventListener("click",function(event){
    drawer.style.left = "-300px"
})