
setTimeout(() => {
    console.log('particles-js div created');

    particle_div = document.createElement('div')
    particle_div.id = 'particles-js'
    
    div = document.querySelector("#root > div > div")
    background = document.querySelector("#root > div > div > section")
    
    div.insertBefore(particle_div, background)

    

}, 100)    
