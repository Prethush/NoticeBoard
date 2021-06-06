const form = document.querySelector(".form");
const ul = document.querySelector(".sub-container");
let cards = JSON.parse(localStorage.getItem("cards")) || [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let obj = {};
    let title = form.elements.title;
    let category = form.elements.category;
    obj.titleName = title.value;
    obj.categoryName = category.value;
    title.value = "";
    category.value = "";
    cards.push(obj);
    localStorage.setItem("cards", JSON.stringify(cards));
    createUI(cards);
    
});

function handleDoubleClick(element, text) {
    let input = document.createElement("input");
    input.type = "text";
    let el = element;
    input.value = text;
    let parent = el.parentElement;
    input.addEventListener("keydown", (event) => {
        if(event.keyCode === 13) {
            let updated = event.target.value;
            el.innerText = updated;
            parent.replaceChild(el, input);
        }
    });
    input.addEventListener("blur", (event) => {
        let updated = event.target.value;
        el.innerText = updated;
        parent.replaceChild(el, input);
    })
    parent.replaceChild(input, el);
}

function createUI(cards) {
    ul.innerHTML = "";
    cards.forEach((card) => {
        let li = document.createElement("li");
        li.style.height = "100px";
        let h2 = document.createElement("h2");
        let h5 = document.createElement("h5");
        h2.innerText = card.titleName;
        h5.innerText = card.categoryName;
        h5.addEventListener("dblclick", (event) => {
            handleDoubleClick(event.target, event.target.innerText)
        });
        li.append(h5, h2);
        ul.append(li);
    })
   
    
}

createUI(cards);