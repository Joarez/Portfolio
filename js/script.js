const pages = document.querySelectorAll(".page");
let currentPage = 0;
const openButton = document.querySelector(".open-book-btn");
if (openButton) {
    openButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.add("flipped");
            currentPage++;
        }
    });
}

const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.add("flipped");
            currentPage++;
        }
    });
});
