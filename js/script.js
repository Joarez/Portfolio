const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            element.classList.add("active");
        }
    });
    
const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(currentPage < pages.length - 1){
            pages[currentPage].classList.add("flipped");
            currentPage++;
        }
    });
});
