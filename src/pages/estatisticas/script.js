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

/* chart.js chart examples */

// chart colors
var colors = ["#007bff", "#28a745", "#333333", "#c3e6cb", "#dc3545", "#6c757d"];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 85,
  legend: { position: "bottom", padding: 5, labels: { pointStyle: "circle", usePointStyle: true } },
};

// donut 1
var chDonutData1 = {
  labels: ["Bootstrap", "Popper", "Other"],
  datasets: [
    {
      backgroundColor: colors.slice(0, 3),
      borderWidth: 0,
      data: [74, 11, 40],
    },
  ],
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
    type: "pie",
    data: chDonutData1,
    options: donutOptions,
  });
}

// donut 2
var chDonutData2 = {
  labels: ["Wips", "Pops", "Dags"],
  datasets: [
    {
      backgroundColor: colors.slice(0, 3),
      borderWidth: 0,
      data: [40, 45, 30],
    },
  ],
};
