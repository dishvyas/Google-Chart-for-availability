
google.charts.load("current", {
    packages: ["timeline"]
  });
  google.charts.setOnLoadCallback(drawCharts);

  function drawIT(){
      drawChart4_2();
    };

function drawChart4_2() {
    var container = document.getElementById('example4.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({
      type: 'string',
      id: 'Position'
    });
    dataTable.addColumn({
      type: 'string',
      id: 'Name'
    });
    dataTable.addColumn({
      type: 'date',
      id: 'Start'
    });
    dataTable.addColumn({
      type: 'date',
      id: 'End'
    });
    dataTable.addRows([
      ['Employee','Shubham', new Date(2019, 8, 1), new Date(2019, 8, 7)],
      ['Employee','Shubham', new Date(2019, 8, 26), new Date(2019, 8, 28)],
      ['Employee','Vivek', new Date(2019, 8, 8), new Date(2019, 8, 12)],
      ['Employee','Priya', new Date(2019, 8, 10), new Date(2019, 8, 12)],
      ['Employee','Rohan', new Date(2019, 8, 17), new Date(2019, 8, 19)],
      ['Employee','Rohan', new Date(2019, 8, 27), new Date(2019, 8, 29)],
      ['Employee','Swati', new Date(2019, 8, 13), new Date(2019, 8, 14)],
      ['Employee','Swati', new Date(2019, 8, 28), new Date(2019, 8, 29)],
      ['Employee','Prakash', new Date(2019, 8, 3), new Date(2019, 8, 7)],
      ['Employee','Abhishek', new Date(2019, 8, 11), new Date(2019, 8, 11)],
      ['Employee','Pradeep', new Date(2019, 8, 9), new Date(2019, 8,13)],
      ['Employee','Pradeep', new Date(2019, 8, 28), new Date(2019, 8, 28)],
      ['Employee','Suhas', new Date(2019, 8, 20), new Date(2019, 8, 23)],
      ['Employee','Vishnu', new Date(2019, 8, 25), new Date(2019, 8, 27)],
      ['Employee','Neha', new Date(2019, 8, 25), new Date(2019, 8, 28)],
      
    ]);

    var options = {
      colors: ['#ff0000','#0000ff'],
      backgroundColor: '#E4E4E4',
      hAxis: {
            format: 'd MMM',
            gridlines: {count: 31},
          },
      
    };

    chart.draw(dataTable, options);
  };
