      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Approved Students',     80],
          ['Eat',      0],
          ['Commute',  0],
          ['Watch TV', 0],
          ['Failed Students',    40]
        ]);

        var options = {
          title: 'Goal Points',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
