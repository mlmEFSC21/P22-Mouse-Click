const body = document.querySelector("body");
body.addEventListener("click", function (e) {
    if (e.ctrlKey) {
        alert("The CTRL key was pressed!");
    } else if (e.shiftKey) {
        alert("The CTRL key was NOT pressed!");
    }
});
