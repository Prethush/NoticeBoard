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

function handleDoubleClick(element, text, id, label) {
    let input = document.createElement("input");
    input.type = "text";
    let el = element;
    input.value = text;
    let parent = el.parentElement;
    input.addEventListener("keydown", (event) => {
        if(event.keyCode === 13) {
            let updated = event.target.value;
            cards[id][label] = updated;
            localStorage.setItem("cards", JSON.stringify(cards));
            createUI();
        }
    });
    input.addEventListener("blur", (event) => {
        let updated = event.target.value;
        cards[id][label] = updated;
        localStorage.setItem("cards", JSON.stringify(cards));
        createUI();
    })
    parent.replaceChild(input, el);
    
}

function createUI(data = cards, root = ul) {
    ul.innerHTML = "";
    let fragment = new DocumentFragment();
    cards.forEach((card, id) => {
        let li = document.createElement("li");
        li.style.height = "auto";
        let h2 = document.createElement("h2");
        let h5 = document.createElement("h5");
        h2.style.fontSize = "1.3rem";
        h2.style.fontWeight = "700";
        h2.innerText = card.titleName;
        h2.addEventListener("dblclick", (event) => {
            handleDoubleClick(event.target, event.target.innerText, id, "titleName")
        });
        h5.innerText = card.categoryName;
        h5.addEventListener("dblclick", (event) => {
            handleDoubleClick(event.target, event.target.innerText, id, "categoryName")
        });
        li.append(h5, h2);
        fragment.appendChild(li);
    })
   
    root.append(fragment);
    
}

createUI(cards);