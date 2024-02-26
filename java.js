var typed = new Typed('.auto-type', {
    strings: ["Developer.",
        "Designer.",
        "Blogger.",
        "Freelancer."],
    smartBackspace: true,
    typeSpeed: 100,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
})

let btn = document.querySelector('.menuBtn')
let menu = document.querySelector('.navbar nav ul')
let links = document.querySelectorAll('.navbar nav ul li')
let navbar = document.querySelector('.navbar')
let backToTop = document.querySelector('.backToTop')
let progressPercent = document.querySelectorAll('.percent')

links.forEach(link => {
    link.addEventListener('click', e => {
        let id = e.target.getAttribute('id')
        if(id == 'home'){
            window.scrollTo(0, 0)
        }
    })
})


btn.addEventListener('click', function () {
    btn.classList.toggle('active')
    menu.classList.toggle('show')
})

backToTop.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

function setNavbarClass() {
    if (window.scrollY > 167) {
        navbar.classList.add('active')
        backToTop.classList.add('show')
    } else {
        navbar.classList.remove('active')
        backToTop.classList.remove('show')
    }
}

function progress() {
    progressPercent.forEach(percentDiv => {
        if (window.scrollY >= 533) {
            let percent = percentDiv.dataset.percent
            percentDiv.style.width = percent
        }
    })
}
progress()
setNavbarClass()

window.addEventListener('scroll', (e) => {
    setNavbarClass()
    progress()
})

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 1
        },
        540: {
            items: 2
        },
        960: {
            items: 3
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
});