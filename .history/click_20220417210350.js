const body = document.querySelector("body");
body.addEventListener(
    "click",
    function (e) {
        if (e.ctrlKey) {
            alert(e.target.tagName);
        } else if (e.shiftKey) {
            alert(e.type);
        }
    },
    false
);
