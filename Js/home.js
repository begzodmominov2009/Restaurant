const search_input = document.getElementById("search-input");
const search_view = document.getElementById("search-view");
const close = document.getElementById("close")




search_view.addEventListener("click" , () => {
   search_input.classList.add("search-hide")
   search_input.classList.add("search-durition")
})
close.addEventListener("click" , () => {
    search_input.classList.remove("search-hide")
    search_input.classList.add("search-durition")
})