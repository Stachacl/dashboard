
$(document).ready(function() {


const ctx = document.getElementById('analyticsChart').getContext('2d');

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(54, 162, 235, 0.9)');
gradient.addColorStop(1, 'rgba(255, 162, 207, 0.05)');


// Define chart data
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Revenue',
      data: [1500, 2000, 1800, 2200, 2800, 3200, 2900, 2500, 3400, 3600, 3800, 4000],
      backgroundColor: gradient,
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      fill: true,
    }]
  };
  
  // Get chart canvas
  const chartCanvas = document.getElementById('analyticsChart');
  
  //Configs 
  const config = {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      hitRadius: 20,
      hoverRadius: 10,
      scales: {
        y: {
            ticks: {
                callback: function(value){
                    return 'AUD ' + value + "m"
                }
            }
        }
      }
    }
  }

  // Create chart
  const myChart = new Chart(ctx, config);

})