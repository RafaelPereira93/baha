function initMenuMobile() {
  const menuMobile = document.querySelector(".menu-hamburguer");
  const navMenu = document.querySelector(".navegacao");

  function handleMenuMobile(e) {
    e.preventDefault();

    navMenu.classList.toggle("menu-mobile-active");
  }

  function removeClassNavMenu() {
    navMenu.classList.remove("menu-mobile-active");
  }

  menuMobile.addEventListener("click", handleMenuMobile);
}

export default initMenuMobile;
