
$(document).ready(function() {


const ctx = document.getElementById('analyticsChart').getContext('2d');


// Define chart data
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Revenue',
      data: [15000, 20000, 18000, 22000, 25000, 28000, 30000, 32000, 34000, 36000, 38000, 40000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
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
    }
  }

  // Create chart
  const myChart = new Chart(ctx, config);

})