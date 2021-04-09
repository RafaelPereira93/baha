function initEasyPieChart() {
  $(function () {
    $(".chart").easyPieChart({
      lineWidth: 6,
      size: 130,
      scaleLength: 0,
      trackColor: "#0e0f10",
      barColor: "#fff"
    });
  });
  
}

export default initEasyPieChart;