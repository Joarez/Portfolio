const pages = document.querySelectorAll(".page");
let currentPage = 0;

/* CAPA */
const openButton = document.querySelector(".open-book-btn");
if(openButton){
    openButton.addEventListener("click", () => {
        if(currentPage < pages.length - 1){
            pages[currentPage].classList.add("flipped");
            currentPage++;
        }
    });
}

/* PRÓXIMAS PÁGINAS */
const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(currentPage < pages.length - 1){
            pages[currentPage].classList.add("flipped");
            currentPage++;
        }
    });
});;
