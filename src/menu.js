import pizza1 from "./images/pizza1.png";
import "./css/menu.css";
const content = document.querySelector("#content");

function menu(){
    content.innerHTML = "";

    const menuHeading = document.createElement("div");
    menuHeading.textContent = "Menu";
    menuHeading.classList.add("menuHeading");

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const item1 = createItem(pizza1, "Margarita", "Crazzy Hot Shit");
    item1.classList.add("item" , "left");
    const item2 = createItem(pizza1, "Margarita", "Crazzy Hot Shit");
    item2.classList.add("item" , "right");
    const item3 = createItem(pizza1, "Margarita", "Crazzy Hot Shit");
    item3.classList.add("item" , "left");
    const item4 = createItem(pizza1, "Margarita", "Crazzy Hot Shit");
    item4.classList.add("item" , "right");
    const item5 = createItem(pizza1, "Margarita", "Crazzy Hot Shit");
    item5.classList.add("item" , "left");
    hero.append(item1,item2,item3,item4,item5);

    content.append(menuHeading, hero);
}
function createItem(imgPath, title, itemDescp){
    const item = document.createElement("div");
    item.classList.add("item");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        imgContainer.style.backgroundImage = `url(${imgPath})`;
        imgContainer.style.backgroundSize = 'cover';
        imgContainer.style.backgroundPosition = "center";
        imgContainer.style.height = "200px";
        imgContainer.style.width = "200px";
        const detail = document.createElement("div");
        detail.classList.add("detail");
        const itemTitle = document.createElement("div");
        itemTitle.classList.add("itemTitle");
        itemTitle.textContent = title;
        const description = document.createElement("div");
        description.classList.add("discription");
        description.textContent = itemDescp;

        detail.append(itemTitle, description);
    item.append(imgContainer, detail);
    return item;

}
export {menu};