let menuBar = document.getElementById("menu-bar");

let isMenuOpened = false;
function toggleMenuBar() {
  isMenuOpened = !isMenuOpened;

  let sideBar = document.getElementById("sidebar");

  if (isMenuOpened) {
    sideBar.style.display = "flex";
  }
  if (!isMenuOpened) {
    sideBar.style.display = "none";
  }
}
