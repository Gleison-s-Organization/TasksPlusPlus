let labels = ["Português", "Matemática", "Geografia", "Historia", "Inglês"];
let title = "11/10/2020 a 17/10/2020";

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [20, 40, 60, 120, 200],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: title,
    },
  },
});

new Chart(document.getElementById("pie-chart"), {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [20, 40, 60, 120, 200],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: title,
    },
  },
});

var ctxP = document.getElementById("labelChart").getContext("2d");
var myPieChart = new Chart(ctxP, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [210, 130, 120, 160, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: "right",
      labels: {
        padding: 20,
        boxWidth: 10,
      },
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "white",
        labels: {
          title: {
            font: {
              size: "16",
            },
          },
        },
      },
    },
  },
});
