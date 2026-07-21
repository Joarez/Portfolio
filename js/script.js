const pages = document.querySelectorAll(".page");
let currentPage = 0;

/* Avançar */
function nextPage(){
    console.log("ANTES:", currentPage);
    if(currentPage < pages.length - 1){
        pages[currentPage].classList.add("flipped");
        currentPage++;
        console.log("AGORA:", currentPage);
        console.log("Página:", pages[currentPage].id);
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
    openBookBtn.addEventListener("click", function(event){
        event.stopPropagation();
        nextPage();
    });
}

/* Próximo capítulo */
const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", function(event){
        event.stopPropagation();
        nextPage();
    });
});


/* Voltar */
const prevButtons = document.querySelectorAll(".prev-page-btn");
prevButtons.forEach(button => {
    button.addEventListener("click", function(event){
        event.stopPropagation();
        prevPage();
    });
});
