/*GRAFICO 1: STUDENTS*/
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

/*GRAFICO 2: GOAL POINTS */
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
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

/*GRAFICO 3: Net Promoter Score */
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic3);

function drawBasic3() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'NPS');

      data.addRows([
        [0, 0],   [1, 20],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      var options = {
        hAxis: {
          title: 'Sprints'
        },
        vAxis: {
          title: 'Percent'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

 /*GRAFICO 4: TENICAL POINTS */ 
 google.charts.load('current', {packages: ['corechart', 'line']});
 google.charts.setOnLoadCallback(drawCurveTypes);
 
 function drawCurveTypes() {
       var data = new google.visualization.DataTable();
       data.addColumn('number', 'X');
       data.addColumn('number', 'Average Points');
       data.addColumn('number', 'Sprint Points');
 
       data.addRows([
         [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
         [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
         [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
         [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
         [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
         [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
         [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
         [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
         [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
         [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
         [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
         [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
       ]);
 
       var options = {
         hAxis: {
           title: 'Technical Points Obtained'
         },
         vAxis: {
           title: 'Percent'
         },
         series: {
           1: {curveType: 'function'}
         }
       };
 
       var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
       chart.draw(data, options);
     }
 
 /*GRAFICO 5: HSE POINTS */
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart5);
 
 function drawChart5() {
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


/*GRAFICO 6: RECOMENDACION */
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart6);
function drawChart6() {
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