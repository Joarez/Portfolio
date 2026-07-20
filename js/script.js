const nextButtons = document.querySelectorAll(".next-page-btn");
nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(currentPage < pages.length - 1){
            pages[currentPage].classList.add("flipped");
            currentPage++;
        }
    });
});
