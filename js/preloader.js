function initPreloader() {
  function onWindowLoad() {
    const layersPreLoad = document.querySelectorAll(".layer-preloader");
    const circlePreload = document.querySelector(".circle-preloader-layer");

    layersPreLoad.forEach((layer) => {
      layer.classList.add("window-loaded");
    });

    circlePreload.classList.add("window-loaded");
  }

  window.onload = onWindowLoad;
}

export default initPreloader;
