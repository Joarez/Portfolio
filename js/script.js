const pages = document.querySelectorAll(".page");
let currentPage = 0;

/* Avançar */
function nextPage(){
    if(currentPage < pages.length - 1){
        pages[currentPage].classList.add("flipped");
        currentPage++;
    }
}

/* Voltar */
function prevPage(){
    if(currentPage > 0){
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    }
}

/* Abrir livro */
const openBookBtn = document.querySelector(".open-book-btn");
if(openBookBtn){
    openBookBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        nextPage();
    });
}

/* Próximo capítulo */
const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        nextPage();
    });
});

/* Voltar */
const prevButtons = document.querySelectorAll(".prev-page-btn");
prevButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        prevPage();
    });
});

