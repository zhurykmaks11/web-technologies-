document.addEventListener("DOMContentLoaded", function() {
    let listItems = document.querySelectorAll("ul li");
    if (listItems.length > 0) {
        listItems[0].textContent = "Hello world!";
    }
    listItems.forEach(item => {
        item.onmousedown = function() {
            document.querySelector("#myButton").textContent = "Петренко Іван";
        };
    });
});
