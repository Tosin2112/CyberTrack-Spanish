const PrimaryNav = document.querySelector(".navlist");
const NavToggle = document.querySelector(".mobile-toggle");


NavToggle.addEventListener("click", () => {
    const  visibility = PrimaryNav.getAttribute ("data-visible")

if (visibility === 'false'){
    PrimaryNav.setAttribute("data-visible", true);
    NavToggle.setAttribute("aria-expanded", true);}
    else if (visibility === 'true'){
    PrimaryNav.setAttribute("data-visible", false);
    NavToggle.setAttribute("aria-expanded", false);}
});