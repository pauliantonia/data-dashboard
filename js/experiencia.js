google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['lol',     0],
    ['Eat',      0],
    ['Happy Students',  110],
    ['Watch TV', 0],
    ['Insatisfied Students',    10]
  ]);

  var options = {
    title: 'Experiences Recomendation',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options);
}