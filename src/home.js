const content = document.querySelector("#content");

function home(){
    content.innerHTML = "";

    const hero1 = document.createElement("div");
    hero1.classList.add("hero1");

    const leftContent = document.createElement("div");
    leftContent.classList.add("leftContent");
    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerHTML = "Bro, <br> PizzaWave<br> is now Online";
    const descp = document.createElement("div");
    descp.classList.add("descp");
    descp.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eius odio ullam, ducimus dignissimos id illum quaerat laborum numquam voluptatibus qui ratione, incidunt adipisci veniam iure, tempora consectetur odit quae.";
    const buttonToOrder = document.createElement("div");
    buttonToOrder.classList.add("buttonToOrder");
    const btn = document.createElement("button");
    btn.textContent = "Order Now";
    
    buttonToOrder.appendChild(btn);
    leftContent.append(heading,descp,buttonToOrder);
    

    const rightContent = document.createElement("div");
    rightContent.classList.add("rightContent");
    const pizzaRotating = document.createElement("div");
    pizzaRotating.classList.add("pizzaRotating");
    
    rightContent.appendChild(pizzaRotating);

    hero1.append(leftContent,rightContent);
    
    const hero2 = document.createElement("div");
    hero2.classList.add("hero2");
        const feature1 = createFeature();
        const feature2 = createFeature();
        const feature3 = createFeature();
        const feature4 = createFeature();

    hero2.append(feature1, feature2, feature3, feature4);
    
    content.appendChild(hero1);
    content.appendChild(hero2);
}
function createFeature(){
    const features = document.createElement("div");
        features.classList.add("features");
            const imageIcon = document.createElement("div");
            imageIcon.classList.add("imageIcon");
            const iconTitle = document.createElement("div");
            iconTitle.classList.add("iconTitle");
            iconTitle.textContent = "Freshly Baked";
            const iconDescp = document.createElement("div");
            iconDescp.classList.add("iconDescp");
            iconDescp.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam nobis quasi quo velit.";
    features.append(imageIcon, iconTitle, iconDescp);

    return features;
}

export {home};