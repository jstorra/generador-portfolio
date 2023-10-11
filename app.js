import m from "./modules/loadMains.js";
const content = document.querySelector("#content");

addEventListener("DOMContentLoaded", async () => {
    let currentPage = "usuarios"
    m[`${currentPage}Main`](content)
    const pages = document.querySelectorAll("a[id]")
    pages.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector("main").remove();
            currentPage = btn.getAttribute("id").substring(3).toLowerCase()
            m[`${currentPage}Main`](content)
        })
    })
});