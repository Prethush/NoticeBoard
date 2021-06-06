const form = document.querySelector(".form");
const ul = document.querySelector(".sub-container");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = form.elements.title;
    let category = form.elements.category;

    let li = document.createElement("li");
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    li.style.height = "100px";
    h3.innerText = title.value;
    h5.innerText = category.value;
    title.value = "";
    category.value = "";
    li.append(h5, h3);
    ul.append(li);
});