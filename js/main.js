//Mobile navigation slide
const navSlide = () => {
    //Variables
    const burgerDiv = document.getElementById("burger-div");
    const nav = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll("#nav-links li");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const languages = document.getElementById("dropdown");
    const dropIcon = document.getElementById("drop-icon");

    //Events
    burgerDiv.onclick = () => {
        //Toggle nav
        nav.classList.toggle("nav-active");
        //Language dropdown reset
        dropdownMenu.classList.remove("drop-menu-active");
        languages.classList.remove("dropdown-active");
        dropIcon.classList.remove("fa-angle-up");
        dropIcon.classList.add("fa-angle-down");

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
            }
        });
    };


    languages.onclick = () => {
        //Showing/hiding language menu
        dropdownMenu.classList.toggle("drop-menu-active");
        //Active state
        languages.classList.toggle("dropdown-active")

        //Switching fa icons
        if (dropdownMenu.classList.contains("drop-menu-active")) {
            dropIcon.classList.remove("fa-angle-down");
            dropIcon.classList.add("fa-angle-up");
        } else {
            dropIcon.classList.add("fa-angle-down");
            dropIcon.classList.remove("fa-angle-up");
        }

    };
};



navSlide();
