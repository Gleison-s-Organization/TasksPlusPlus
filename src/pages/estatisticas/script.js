window.addEventListener("load", () => {
  const pieChart = new CanvasJS.Chart("pieChart", {
    theme: "transparent", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 20, label: "Português" },
          { y: 40, label: "Matemática" },
          { y: 80, label: "Geografia" },
          { y: 160, label: "Historia" },
          { y: 200, label: "Inglês" },
        ],
      },
    ],
  });
  pieChart.render();

  const barChart = new CanvasJS.Chart("barChart", {
    theme: "transparent", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    data: [
      {
        type: "bar",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 20, label: "Português" },
          { y: 40, label: "Matemática" },
          { y: 80, label: "Geografia" },
          { y: 160, label: "Historia" },
          { y: 200, label: "Inglês" },
        ],
      },
    ],
  });
  barChart.render();
});
