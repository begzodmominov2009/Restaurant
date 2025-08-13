const search_input = document.getElementById("search-input");
const search_view = document.getElementById("search-view");
const close = document.getElementById("close");
const menus = document.getElementById("menus");
const close_2 = document.getElementById("close-2");
const menutoggle = document.getElementById("toggle");
const search_card = document.getElementById("search-card")
const search_card_close = document.getElementById("search-card-close")
const menus_2 = document.getElementById("menus-2")

close_2.classList.add("close-3")

search_view.addEventListener("click", () => {
    search_input.classList.add("search-hide")
    search_input.classList.add("search-durition")
})
close.addEventListener("click", () => {
    search_input.classList.remove("search-hide")
    search_input.classList.add("search-durition")
})

search_view.addEventListener("click", () => {
    search_card.classList.add("search-card-view")
    search_card.classList.add("search-card-duration")
    menus_2.classList.add("menus-2-hiden")
})
search_card_close.addEventListener("click", () => {
    search_card.classList.remove("search-card-view")
    search_card.classList.add("search-card-duration")
})
search_view.addEventListener("click", () => {
    menus_2.classList.add("menus-2-hiden")
})
search_card_close.addEventListener("click", () => {
    menus_2.classList.remove("menus-2-hiden")
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
