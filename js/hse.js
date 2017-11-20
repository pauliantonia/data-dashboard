google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Sprint', 'Sprint Average', 'Total Average'],
    ['1',  1000,      400],
    ['2',  1170,      460],
    ['3',  800,       900],
    ['4',  1030,      540]
  ]);

  var options = {
    title: 'HSE Points',
    hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div3'));
  chart.draw(data, options);
}