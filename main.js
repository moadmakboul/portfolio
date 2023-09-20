const navbar = document.getElementById('nav-bar')
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('#nav-links ul li')

window.onscroll = ()=>{
    var current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute("id")
        }
    })

    navLi.forEach((li) => {
        li.classList.remove("active")
        if (li.classList.contains(current)){
            li.classList.add("active")
        }
    })

    if (window.scrollY > 100){
        navbar.style.background = 'black'
        navbar.style.padding = '0'
    }else{
        navbar.style.background = 'transparent'
        navbar.style.padding = '20px 0px'
    }
}

const projectsdiv = document.querySelectorAll('.projects-div')

projectsdiv.forEach(div => {
    div.addEventListener('mouseenter', ()=>{
        div.style.backgroundColor = 'white'
        div.children[0].style.opacity = 0
        div.children[1].classList.add('button-animate')
        div.children[2].classList.add('animate-description')
    })

    div.addEventListener('mouseleave', ()=>{
        div.style.backgroundColor = 'inherit'
        div.children[0].style.opacity = 1
        div.children[1].classList.remove('button-animate')
        div.children[2].classList.remove('animate-description')
    })
})

const rocket = document.getElementById('rocket')
const rocketMessage = document.getElementById('rocket-message')

rocket.addEventListener('mouseenter', ()=>{
    rocketMessage.style.transition= '.5s ease-in'
    rocketMessage.style.visibility = 'visible'
})

rocket.addEventListener('mouseleave', ()=>{
    rocketMessage.style.visibility = 'hidden'
})

rocket.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})

const certificatesDiv = document.querySelectorAll('.certificates-div')

certificatesDiv.forEach(div => {
    div.addEventListener('mouseenter', ()=>{
        div.style.backgroundColor = 'white'
        div.children[0].style.opacity = 0
        div.children[1].style.display = 'block'
    })

    div.addEventListener('mouseleave', ()=>{
        div.style.backgroundColor = 'inherit'
        div.children[0].style.opacity = 1
        div.children[1].style.display = 'none'
    })
})