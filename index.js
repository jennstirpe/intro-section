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


// show/hide overlay
openIcon.addEventListener("click", () => {
    nav.classList.remove("main-nav-close");
    overlay.classList.add("display-overlay");
})
closeIcon.addEventListener("click", () => {
    nav.classList.add("main-nav-close");
    overlay.classList.remove("display-overlay");
})


featuresBtn.addEventListener("click", () => {
    // toggle Features dropdown open&close
    featuresDropdown.classList.toggle("sub-nav-close");
    featuresDropdown.classList.toggle("active");
    featuresArrow.classList.toggle("arrow-up");

    // close Company dropdown if it's open (in desktop view)
    if(screen.width >= 1440) {
        companyDropdown.classList.add("sub-nav-close");
        companyDropdown.classList.remove("active");
        companyArrow.classList.remove("arrow-up");
    }
    
})


companyBtn.addEventListener("click", () => {
    // toggle Company dropdown open&close
    companyDropdown.classList.toggle("sub-nav-close");
    companyDropdown.classList.toggle("active");
    companyArrow.classList.toggle("arrow-up");

    // close Features dropdown if it's open (in desktop view)
    if(screen.width >= 1440) {
        featuresDropdown.classList.add("sub-nav-close");
        featuresDropdown.classList.remove("active");
        featuresArrow.classList.remove("arrow-up");
    }
})
