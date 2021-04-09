function initActiveMenuLinks() {
  const iconsMenu = document.querySelectorAll(".links i");

  function handleIconMenu(e) {
    const icons = e.target.attributes[1].value.replace("#", "");

    removeClassIconsInative();

    if (icons !== "home") {
      e.target.classList.add("active-menu-link");
    }

    if (icons !== "home") {
      let iconeAtivo = [];

      const iconesInativos = Array.prototype.filter.call(iconsMenu, (icon) => {
        if (icon.classList.contains("active-menu-link")) {
          iconeAtivo.push(icon);
        }

        if (!icon.classList.contains("active-menu-link")) {
          return icon;
        }
      });

      if (iconeAtivo[0]) {
        iconeAtivo[0].classList.remove("inactive-menu-link");
      }

      iconesInativos.forEach((icon) => {
        icon.classList.add("inactive-menu-link");
      });
    } else {
      iconsMenu.forEach((icon) => {
        icon.classList.remove("inactive-menu-link");
      });
    }
  }

  function removeClassIconsInative() {
    iconsMenu.forEach((icon) => {
      icon.classList.remove("active-menu-link");
    });
  }

  iconsMenu.forEach((icon) => {
    icon.addEventListener("click", handleIconMenu);
  });
}

export default initActiveMenuLinks;