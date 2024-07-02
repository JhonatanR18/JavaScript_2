let favProducts = JSON.parse(localStorage.getItem('fav')) || []
import { printNav, printFooter, printIcons } from "./module/layout.js";
import { setupEventListeners } from "./module/isOnline.js";
import { printFav } from "./module/printFavorites.js";
// layout
printNav()
printFooter()
printIcons()
// isOnline
setupEventListeners()
// ----
printFav(favProducts, "fav-container")