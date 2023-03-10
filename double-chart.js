//double chart
$(function () {

const ctx = document.getElementById("doubleChart").getContext("2d");
var myDoubleChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["A", "B", "C", "D", "E", "F", "J"],
    datasets: [
      {
        label: "Pink dataset",
        data: [65, 59, 100, 81, 56, 55, 40],
        backgroundColor: "rgba(105, 0, 132, 0.2)",
        borderColor: "rgba(105, 0, 132, 0.9)",
        fill: true,
        borderWidth: 1,
        lineTension: 0.3,     
      },
      {
        label: "Blue dataset",
        data: [28, 48, 40, 19, 120, 27, 90],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 0.9)",
        fill: true,
        borderWidth: 2,
        lineTension: 0.3, 
      },
    ],
  },
  options: {
    responsive: true,
    // aspectRatio: 3/4,
  },
});
}); 
