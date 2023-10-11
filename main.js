const sidebar = document.getElementById("sidebar");

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector("nav .toggle-sidebar");
const allSideDivider = document.querySelectorAll("#sidebar .divider");
if (sidebar.classList.contains("hide")) {
    allSideDivider.forEach((item) => {
        item.textContent = "-";
    });
} else {
    allSideDivider.forEach((item) => {
        item.textContent = item.dataset.text;
    });
}
toggleSidebar.addEventListener("click", function () {
    sidebar.classList.toggle("hide");

    if (sidebar.classList.contains("hide")) {
        allSideDivider.forEach((item) => {
            item.textContent = "-";
        });
    } else {
        allSideDivider.forEach((item) => {
            item.textContent = item.dataset.text;
        });
    }
});
sidebar.addEventListener("mouseleave", function () {
    if (this.classList.contains("hide")) {
        allSideDivider.forEach((item) => {
            item.textContent = "-";
        });
    }
});
sidebar.addEventListener("mouseenter", function () {
    if (this.classList.contains("hide")) {
        allSideDivider.forEach((item) => {
            item.textContent = item.dataset.text;
        });
    }
});
