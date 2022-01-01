const BANNER_ELEMENT_ID = "ContentWallHardsell";
const REGISTRATION_BANNER_ID = "HardsellOverlay";

let registrationBanner = document.getElementById(REGISTRATION_BANNER_ID);
if (registrationBanner != null) {
    document.body.removeChild(registrationBanner);
}

let salaryBanner = document.getElementById(BANNER_ELEMENT_ID);
if (salaryBanner != null) {
    document.body.removeChild(salaryBanner);
}

document.body.style.overflow = null;
window.addEventListener("scroll", function(event) {
    event.stopPropagation();
}, true);
