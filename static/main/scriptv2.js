
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 650) {
        const sections = document.querySelectorAll("#main-section");
    
        const observerOptions = {
            root: null,
            threshold: 0.3,
            rootMargin: "-100px",
        };
    
        const sectionObserver = new IntersectionObserver(callBackFunction, observerOptions);
    
        // register all main sections as observable
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
})

function callBackFunction(entries) {
    const [entry] = entries;
    // determine which of the main sections went immediately in/out of view by unique class name
    section = document.querySelector("."+entry.target.classList[0]);
    if (entry.isIntersecting) {
        section.classList.remove("hidden");
    } else {
        section.classList.add("hidden");
    }
}