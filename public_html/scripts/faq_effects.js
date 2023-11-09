function show_answer(elem) {
    if (elem.nextElementSibling.style.display == "none") {
        elem.nextElementSibling.style.display = "flex";
        elem.children[1].style.transform = "rotate(180deg)"
    } else if (elem.nextElementSibling.style.display == "flex") {
        elem.nextElementSibling.style.display = "none";
        elem.children[1].style.transform = "rotate(0deg)"
    }
}