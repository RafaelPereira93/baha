function initNavFilter() {
  const linksFilter = document.querySelectorAll(".filter-tab");
  const dataCategory = document.querySelectorAll("[data-category]");

  function filterNav(e) {
    const currentTarget = e.target;
    linksFilter.forEach((link) => {
      link.classList.remove("active-tab");
    });

    currentTarget.classList.add("active-tab");
  }

  function filterCategory(e) {
    removeAllClasses();

    const nameFilter = e.target.attributes[2].value;

    dataCategory.forEach((category) => {
      const nameCategory = category.attributes[1].value;
      if (nameFilter !== nameCategory) {
        category.classList.add("hidden-work");
      }

      if (nameFilter === "all") {
        category.classList.remove("hidden-work");
      }
    });
  }

  function removeAllClasses() {
    dataCategory.forEach((category) => {
      category.classList.remove("hidden-work");
    });
  }

  linksFilter.forEach((link) => {
    link.addEventListener("click", filterNav);
    link.addEventListener("click", filterCategory);
  });
}

export default initNavFilter;
