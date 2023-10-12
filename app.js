window.onscroll = function() {
    stickyHeader();
};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky");
    }
}