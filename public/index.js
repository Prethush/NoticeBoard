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
    title.innerText = "";
    category.innerText = "";
    cards.push(obj);
    localStorage.setItem("cards", JSON.stringify(cards));
    createUI(cards);
    console.log(localStorage);
});

function createUI(cards) {
    ul.innerHTML = "";
    cards.forEach((card) => {
        let li = document.createElement("li");
        li.style.height = "100px";
        let h2 = document.createElement("h2");
        let h5 = document.createElement("h5");
        h2.innerText = card.titleName;
        h5.innerText = card.categoryName;
        li.append(h5, h2);
        ul.append(li);
    })
   
    
}

createUI(cards);