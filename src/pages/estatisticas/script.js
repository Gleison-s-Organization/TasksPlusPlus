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
    legend: { display: false },
  },
});
