//Mobile navigation slide
const navSlide = () => {
    const burgerDiv = document.getElementById("burger-div");
    const nav = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll("#nav-links li");


    burgerDiv.onclick = () => {
        //Toggle nav
        nav.classList.toggle("nav-active");

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
            }
        });
    };
};
//Dropdown menu for languages
const dropMenu = () => {
    const languages = document.getElementById("dropdown");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropIcon = document.getElementById("drop-icon");

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
dropMenu();