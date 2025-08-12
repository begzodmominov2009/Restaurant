const search_input = document.getElementById("search-input");
const search_view = document.getElementById("search-view");
const close = document.getElementById("close");
const menus = document.getElementById("menus");
const close_2 = document.getElementById("close-2");
const menutoggle = document.getElementById("toggle");


search_view.addEventListener("click", () => {
    search_input.classList.add("search-hide")
    search_input.classList.add("search-durition")
})
close.addEventListener("click", () => {
    search_input.classList.remove("search-hide")
    search_input.classList.add("search-durition")
})
menutoggle.addEventListener("click", () => {
    menus.classList.add("menus-view")
    menus.classList.add("menus-durition")
    menutoggle.classList.add("menutoggle-hide")
    close_2.classList.add("close-2-view")
})
close_2.addEventListener("click", () => {
    menus.classList.remove("menus-view")
    menus.classList.add("menus-durition")
    menutoggle.classList.remove("menutoggle-hide")
    close_2.classList.remove("close-2-view")
})