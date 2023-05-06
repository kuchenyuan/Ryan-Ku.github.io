let header = document.querySelector("header");
let headerA = document.querySelectorAll("header nav ul li a");
window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
        header.style = "background-color: rgba(0, 0, 0, 0.5); color: #eee";
        headerA.forEach((a) => {
            a.style = "color: #eee";
        });
    } else {
        header.style = "";
        headerA.forEach((a) => {
            a.style = "color: #09777d"
        });
    }
})