
$(document).ready(function() {

//   // Get chart canvas
// const ctx = document.getElementById('analyticsChart').getContext('2d');

// //Gradient Fill
// let gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, 'rgba(54, 162, 235, 0.9)');
// gradient.addColorStop(1, 'rgba(255, 162, 207, 0.05)');


// // Define Analitics chart data
// const chartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [{
//       label: 'Revenue',
//       data: [1500, 2000, 1800, 2200, 2800, 3200, 2900, 2500, 3400, 3600, 3800, 4000],
//       backgroundColor: gradient,
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1,
//       fill: true,
//     }]
//   };
  
//   //Configs 
//   const config = {
//     type: 'line',
//     data: chartData,
//     options: {
//       responsive: true,
//       hitRadius: 20,
//       hoverRadius: 10,
//       scales: {
//         y: {
//             ticks: {
//                 callback: function(value){
//                     return 'AUD ' + value + "m"
//                 }
//             }
//         }
//       }
//     }
//   }

//   // Create chart
//   const analyticsChart = new Chart(ctx, config);


/////////** Home Chart Two**//////////

//   Get chart canvas



/////////** Home Chart Three**//////////

const ctx = document.getElementById('homeChartThree');

new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

 //below is a closing tag for $(document).ready(function() {
})