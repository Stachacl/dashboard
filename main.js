$(function () {
  /////////** Home Chart Three**//////////

  const ctx = document.getElementById("homeChartThree");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

// contacxt button function on click 
$("#contactBtn").click(function () {
  //redirect to contact.html page
  window.location.href = "contact.html";

});


  //below is a closing tag for $(document).ready(function() {
});



