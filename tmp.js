

setTimeout(() => {
    
    particle_div = document.querySelector("#particles-js")    
    
    div = document.querySelector("#root > div > div")
    nav = document.querySelector("nav")
    
    div.insertBefore(particle_div, nav)
    
    console.log('particles-js moved');
    

}, 1)
