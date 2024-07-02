// import data
import { optionsNav, optionsFooter, optionIcons } from "./dataLayout.js";
// Función imprint Nav Bar
function printNav (){
    const navSelector = document.getElementById("navbar");
    for ( let optionNav of optionsNav){
        let anchor = document.createElement("a");
        anchor.className = "nav-button";
        anchor.textContent = optionNav.title;
        anchor.href = optionNav.linkTo
        navSelector.appendChild(anchor)
}
}
// Función imprint footer
function printFooter(){
    const footerSelector = document.getElementById("footer");
    for ( let optionFooter of optionsFooter){
        const ul = document.createElement("ul")
        ul.className = "footer-ul"
        let li = document.createElement("li")
        li.className = "footer-main-item"
        let a = document.createElement("a")
        a.className = "footer-a"
        a.textContent = optionFooter.title
        a.href = optionFooter.linkTo
        li.appendChild(a)
        ul.appendChild(li)

        for (let col of optionFooter.cols){
            let li = document.createElement("li")
            li.className = "footer-li"
            let a = document.createElement("a")
            a.className = "footer-a"
            a.textContent = col.title
            a.href = col.linkTo
            li.appendChild(a)
            ul.appendChild(li)
        }
        footerSelector.appendChild(ul)
    }
}
function printIcons (){
    const iconsTemplate = optionIcons()
    const iconsSelector = document.getElementById("icons")
    iconsSelector.innerHTML = iconsTemplate
}
// export functions
export{printNav, printFooter, printIcons}