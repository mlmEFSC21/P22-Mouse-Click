const body = document.querySelector("body");
body.addEventListener(
    "click",
    function (e) {
        if (e.ctrlKey) {
            alert(e.target.tagnName);
        } else if (e.shiftKey) {
            alert(e.type);
        }
    },
    false
);
