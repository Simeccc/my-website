let hamStill1 = document.querySelector('.ham-still1')
let hamStill2 = document.querySelector('.ham-still2')
let hamStill3 = document.querySelector('.ham-still3')
let hamburgerBtn = document.querySelector('.hamburger')
let closeNav = document.querySelector('.close-nav')
let ulNav = document.querySelector('.ulNav')

let clicked = false;

hamburgerBtn.addEventListener('click', function() {
    if(clicked === false) {
        ulNav.style.top = "40px"
    
        hamStill3.style.display = "none"
    
        hamStill2.style.transform = "rotate(45deg)"
        hamStill2.style.transform = "rotate(45deg)"
    
        hamStill1.style.transform = "rotate(-45deg)"
        hamStill1.style.position = "absolute"
        hamStill1.style.top = "0"

        clicked = true;
    } 

    else if (clicked === true) {
        ulNav.style.top = "-1000px"
    
        hamStill3.style.display = "block"
    
        hamStill2.style.transform = "rotate(0)"
        hamStill2.style.transform = "rotate(0)"
    
        hamStill1.style.transform = "rotate(0)"
        hamStill1.style.position = "relative"
        hamStill1.style.top = "0"

        clicked = false;
    }



})

