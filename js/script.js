const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage(){
    if(currentPage < pages.length - 1){
        pages[currentPage].classList.add("flipped");
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");
    }
}

function prevPage(){
    if(currentPage > 0){
        pages[currentPage].classList.remove("active");
        currentPage--;
        pages[currentPage].classList.remove("flipped");
        pages[currentPage].classList.add("active");
    }
}

const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        nextPage();
    });
});

const prevButtons = document.querySelectorAll(".prev-page-btn");
prevButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        prevPage();
    });
});

