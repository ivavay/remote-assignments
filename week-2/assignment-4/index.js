// Request 1: Click to change text 
// Change the 'Welcome Message' header to 'Have a good time!' upon clicking 

let headerBox = document.querySelector('header > h1')

headerBox.addEventListener('click', function() {
    headerBox.innerHTML = 'Have a Good Time!'
})

// Request 2: Click to show/hide menu 

let menu = document.querySelector('.hamburger-menu')
let openMenu = document.querySelector('.opened-menu')
let exitMenu = document.querySelector('.exit-menu')
let minMenu = document.querySelector('.nav-item')

function toggleMenu() {
    if (openMenu.style.display == 'block') {
        // console.log('x clicked')
        menu.style.display = 'flex'
        openMenu.style.display = 'none'
        exitMenu.style.display = 'none'

    } else {
        // console.log("toggle")
        menu.style.display = 'none'
        openMenu.style.display = 'block'
        exitMenu.style.display = 'block'
    }
   
}

// TODO Open the menu display upon clicking 
menu.addEventListener('click', function() {
    toggleMenu()
})  

// TODO Close the menu display upon clicking 'x' button 
exitMenu.addEventListener('click', function() {
    toggleMenu()
})



// Request 3: Click to show more content boxes 

// TODO Expand to show more content boxes upon clicking 'CTA'