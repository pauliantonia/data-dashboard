google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     0],
    ['Dropout Students',      25],
    ['Registered Students',  145],
    ['Watch TV', 0],
    ['Sleep',    0]
  ]);

  var options = {
    title: 'Students'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}