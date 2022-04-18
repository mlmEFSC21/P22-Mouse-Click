const body = document.querySelector("body");
body.addEventListener("click", function (e) {
    if (event.ctrlKey) {
        alert("The CTRL key was pressed!");
    } else {
        alert("The CTRL key was NOT pressed!");
    }
});
