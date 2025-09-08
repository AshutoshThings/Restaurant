import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";

document.addEventListener("DOMContentLoaded", ()=>{
    home();
    const homeBtn = document.querySelector("#homeButton");
    homeBtn.classList.add("selected");
    const menuBtn = document.querySelector("#Menu");

    homeBtn.addEventListener("click", ()=>{
        if(!homeBtn.classList.contains("selected")){
            console.log("home button is clicked");
            menuBtn.classList.remove("selected");
            homeBtn.classList.add("selected");
        home();
        } 
    });
    menuBtn.addEventListener("click", ()=>{
        if(!menuBtn.classList.contains("selected")){
            console.log("Menu button is clicked");
            homeBtn.classList.remove("selected");
            menuBtn.classList.add("selected");
            menu();
        }  
    });
    console.log("have a nice day!");
});



