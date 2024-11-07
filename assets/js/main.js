/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Data Analyst", "Machine Learning Enthusiast"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

/* SEND MAIL*/

function sendMail() {
    console.log("Sending mail..."); // Add this
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const service_Id = "service_yv2vhwz";
    const template_Id = "template_q8famcb";

    emailjs.send(service_Id, template_Id, parms)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log("Email sent:", res); // Updated console log
                alert("Message Sent Successfully!!");
            }
        )
        .catch(err => console.log("Error:", err)); // Updated error log
}




const themeToggleButton = document.getElementById('themeToggle');
const icon = themeToggleButton.querySelector('i');

themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is active
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('uil-moon');  // Remove moon icon for light mode
        icon.classList.add('uil-sun');      // Add sun icon for dark mode
    } else {
        icon.classList.remove('uil-sun');   // Remove sun icon for dark mode
        icon.classList.add('uil-moon');     // Add moon icon for light mode
    }
});





window.addEventListener('scroll', scrollActive)