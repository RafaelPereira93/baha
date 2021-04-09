function initActiveSections() {
  const navLinks = document.querySelectorAll("[data-href]");
  const sections = document.querySelectorAll("section");
  sections[0].classList.add("active-section");

  function handleClick(e) {
    e.preventDefault();

    removeClassSections();

    // removeClassNavMenu();

    const href = e.target.attributes[1].value.replace("#", "").trim();

    sections.forEach((section) => {
      const sectionId = section.id;
      if (sectionId === href) {
        section.classList.add("active-section");
      } else {
        section.classList.remove("active-section");
      }
    });

    overflowBody();

    if (href === "home") {
      window.scrollTo({
        top: 0,
      });
    }
  }

  function removeClassSections() {
    sections.forEach((section) => {
      section.classList.remove("active-section");
    });
  }

  function overflowBody() {
    sections[0].classList.contains("active-section")
      ? document.documentElement.classList.add("overflow-y-hidden")
      : document.documentElement.classList.remove("overflow-y-hidden");
  }

  window.onload = overflowBody;

  const navMenu = document.querySelector('.navegacao');

  function removeClassNavMenu() {
    navMenu.classList.remove("menu-mobile-active");
  }


  navLinks.forEach((link) => {
    link.addEventListener("click", handleClick);
    link.addEventListener('click', removeClassNavMenu);
  });
}

export default initActiveSections;