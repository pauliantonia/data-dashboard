 // Load Charts and the corechart package.
 google.charts.load('current', {'packages':['corechart']});
 
       // Draw the pie chart for Sprint 1 when Charts is loaded.
       google.charts.setOnLoadCallback(drawSarahChart);
 
       // Draw the pie chart for Sprint 2 when Charts is loaded.
       google.charts.setOnLoadCallback(drawAnthonyChart);
 
       // Callback that draws the pie chart for Sarah's pizza.
       function drawSarahChart() {
 
         // Create the data table for Sarah's pizza.
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Topping');
         data.addColumn('number', 'Slices');
         data.addRows([
           ['Mushrooms', 0],
           ['Onions', 0],
           ['Teachers', 4.0],
           ['Jedis', 4.8],
           ['Pepperoni', 0]
         ]);
 
         // Set options for Sarah's pie chart.
         var options = {title:'Sprint 1',
                        width:400,
                        height:300};
 
         // Instantiate and draw the chart for Sarah's pizza.
         var chart = new google.visualization.PieChart(document.getElementById('Sprint1_chart_div'));
         chart.draw(data, options);
       }
 
       // Callback that draws the pie chart for Anthony's pizza.
       function drawAnthonyChart() {
 
         // Create the data table for Anthony's pizza.
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Topping');
         data.addColumn('number', 'Slices');
         data.addRows([
           ['Mushrooms', 0],
           ['Onions', 0],
           ['Teachers', 3.9],
           ['Jedis', 4.3],
           ['Pepperoni', 0]
         ]);
 
         // Set options for Anthony's pie chart.
         var options = {title:'Sprint 2',
                        width:400,
                        height:300};
 
         // Instantiate and draw the chart for Anthony's pizza.
         var chart = new google.visualization.PieChart(document.getElementById('Sprint2_chart_div'));
         chart.draw(data, options);
       }
       