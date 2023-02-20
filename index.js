const menu = document.querySelector(".primary-nav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");




function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");

  } else {
    menu.classList.add("showMenu");
 
  }
}

hamburger.addEventListener("click",toggleMenu)


menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

