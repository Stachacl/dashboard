
$(document).ready(function() {

    
    const ctx = document.getElementById('report1');
    
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
          responsive: true,
          // aspectRatio: 3/4,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    
     //below is a closing tag for $(document).ready(function() {
    })