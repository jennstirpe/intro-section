const overlay = document.querySelector("#overlay");
const nav = document.querySelector("nav");

// nav icons
const openIcon = document.querySelector(".menu-closed");
const closeIcon = document.querySelector(".menu-opened");

// features
const featuresDropdown = document.querySelector("#features-dropdown");
const featuresArrow = document.querySelector("#features-arrow");
const featuresBtn = document.querySelector("#features-btn");

// company
const companyDropdown = document.querySelector("#company-dropdown");
const companyArrow = document.querySelector("#company-arrow");
const companyBtn = document.querySelector("#company-btn");



openIcon.addEventListener("click", () => {
    nav.classList.remove("main-nav-close");
    overlay.classList.add("display-overlay");
})
closeIcon.addEventListener("click", () => {
    nav.classList.add("main-nav-close");
    overlay.classList.remove("display-overlay");
})

featuresBtn.addEventListener("click", () => {
    featuresDropdown.classList.toggle("sub-nav-close");
    featuresDropdown.classList.toggle("active");
    featuresArrow.classList.toggle("arrow-up");
   
    
})

companyBtn.addEventListener("click", () => {
    companyDropdown.classList.toggle("sub-nav-close");
    companyDropdown.classList.toggle("active");
    companyArrow.classList.toggle("arrow-up");
})