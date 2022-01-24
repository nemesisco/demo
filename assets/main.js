// splash screen intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.into-logo');
let logoSpan = document.querySelectorAll('.splash-logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active'); 
            }, (idx +1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
            document.getElementById('headerID').style.display = 'block';
        }, 2700);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 3000)
    })
})

// showing menu
var menuBtn = document.getElementById('menu-btn');
var header = document.getElementById('header-menuID');

if(menuBtn && header){
    menuBtn.addEventListener('click', () => {
        header.classList.toggle('show')
    })
}

const headerLink = document.querySelectorAll('.header-link')

function ShowActiveSection(){
    headerLink.forEach(n => n.classList.remove('active-section'))
    this.classList.add('active-section')

    var headerMenu = document.getElementById('header-menuID')
    headerMenu.classList.remove('show')
}
headerLink.forEach(n => n.addEventListener('click', ShowActiveSection))


// dark theme
var darkModeBtn = document.getElementById('moon-icon');

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "light"){
    darkModeBtn.src = "assets/moon.png";
    document.body.classList.remove("dark-mode");
}
else if(localData == "dark"){
    darkModeBtn.src = "assets/sun.png";
    document.body.classList.add("dark-mode");
}

darkModeBtn.onclick = function (){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        darkModeBtn.src = "assets/sun.png"
        localStorage.setItem("theme", "dark");
    }
    else{
        darkModeBtn.src = "assets/moon.png"
        localStorage.setItem("theme", "light");
    }
}

// scroll selection active section
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header-menu a[href*=' + sectionId + ']').classList.add('active-section')
        }else{
            document.querySelector('.header-menu a[href*=' + sectionId + ']').classList.remove('active-section')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// scroll-reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home-data, .about-img, .skills-subtitle, .skills-text',{}); 
sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 
sr.reveal('.skills-data, .work-img, .contact-input',{interval: 200});